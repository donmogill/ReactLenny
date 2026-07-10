import { useState, useEffect } from 'react';
import { Reorder } from 'motion/react'; // Ensure you are importing from motion/react
import useFetchPics, { useReorderMutation } from '../hooks/PicHooks';
import PicDetail from './PicDetail';
import { Link } from "react-router-dom";

interface Item {
  id: number;
  filename: string;
  displayOrder: number;
}

const PicList = () => {
  
  // 1. Fetch data from server
  const { data: serverItems = [] } = useFetchPics();

  // 2. Keep a local state copy for snappy drag animations
  const [localItems, setLocalItems] = useState<Item[]>(serverItems);

  // Synchronize local state whenever server data refreshes (e.g., on focus/background refetch)
  useEffect(() => {
    if (serverItems.length) {
      setLocalItems(serverItems);
    }
  }, [serverItems]);


  // 3. Define reorderMutation to persist new order to database
  const reorderMutation = useReorderMutation();

  
  // 4. Handle sequential updates from motion/react drag interface
  const handleReorder = (newOrder: Item[]) => {
    setLocalItems(newOrder);
  };

  // 5. Fire reorderMutation only when the user finishes dragging
  const handleDragEnd = () => {
    reorderMutation.mutate(localItems);
  };

  return (
    <div className="wrap">
    <h1 className="wrap padtop10"> Move images vertically to reorder them on the from page</h1>
    <Link to="/pic/add" className="btn center">Add Picture</Link>    
    <Reorder.Group 
      values={localItems} 
      onReorder={handleReorder}
      as="ul"
      className="reorderGroup"
    >
      {localItems.map((item) => (
        <Reorder.Item 
          key={item.id} 
          value={item}
          onDragEnd={handleDragEnd} // Saves to DB only when mouse/finger is released
        >
         <PicDetail detail={item}/>
        </Reorder.Item>
      ))}
    </Reorder.Group>     
    
    </div>    
    
  );
}

export default PicList
