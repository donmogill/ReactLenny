import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Reorder } from 'motion/react'; // Ensure you are importing from motion/react
import config from '../config/config';
import useFetchPics from '../hooks/PicHooks';

interface Item {
  id: number;
  filename: string;
  displayOrder: number;
}

export function PicList() {
  const queryClient = useQueryClient();
  const queryKey = ['items'];

  const { data: serverItems = [] } = useFetchPics();

  // 1. Fetch data from server
  // const { data: serverItems = [] } = useQuery<Item[]>({
  //   queryKey,
  //   queryFn: async () => {
  //     const res = await fetch(`${config.baseApiUrl}/pics`);
  //     return res.json();
  //   },
  // });

  // 2. Keep a local state copy for snappy drag animations
  const [localItems, setLocalItems] = useState<Item[]>(serverItems);

  // Synchronize local state whenever server data refreshes (e.g., on focus/background refetch)
  useEffect(() => {
    if (serverItems.length) {
      setLocalItems(serverItems);
    }
  }, [serverItems]);

  // 3. Define reorderMutation to persist new order to database
  const reorderMutation = useMutation({
    mutationFn: async (newOrder: Item[]) => {

      const ids = newOrder.map(i => i.id);
      return fetch(`${config.baseApiUrl}/api/pics/reorder`, {
        method: 'POST',
        body: JSON.stringify(ids),
        headers: {
          'Content-Type': 'application/json', // 👈 REQUIRED
          'Accept': 'application/json',
        },
      });
    },
    // Optimistic Update: instantly update React Query cache if a background refetch happens
    onMutate: async (newOrder) => {
      await queryClient.cancelQueries({ queryKey });
      const previousItems = queryClient.getQueryData<Item[]>(queryKey);
      queryClient.setQueryData(queryKey, newOrder);
      return { previousItems };
    },
    // Rollback local and cached state if server update fails
    onError: (err, newOrder, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData(queryKey, context.previousItems);
        setLocalItems(context.previousItems);
      }
    },
    // Always refetch to ensure alignment with the server truth
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  // 4. Handle sequential updates from motion/react drag interface
  const handleReorder = (newOrder: Item[]) => {
    setLocalItems(newOrder);
  };

  // 5. Fire reorderMutation only when the user finishes dragging
  const handleDragEnd = () => {
    reorderMutation.mutate(localItems);
  };

  return (
    <Reorder.Group 
      values={localItems} 
      onReorder={handleReorder}
      as="ul"
    >
      {localItems.map((item) => (
        <Reorder.Item 
          key={item.id} 
          value={item}
          onDragEnd={handleDragEnd} // Saves to DB only when mouse/finger is released
        >
          <span>{item.filename}</span>
          <img src={`${config.baseApiUrl}/Uploads/${item.filename}`} className="carouselThumbnail" alt={item.filename} />
          <span>  move me</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default PicList
