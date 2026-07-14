import type { Pic } from "../types/pic";
import config from "../config/config";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import type Problem from "../types/problem";

interface Item {
  id: number;
  filename: string;
  displayOrder: number;
}

const useFetchPics = () => {
    return useQuery<Pic[], AxiosError>({
        queryKey: ["pics"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/pics`).then((resp) => resp.data),
        
    });
};  

  // 3. Define reorderMutation to persist new order to database
  const useReorderMutation = () => {
    const queryClient = useQueryClient();
    const queryKey = ['items'];
    
    return useMutation({
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
        //setLocalItems(context.previousItems);
      }
    },
    // Always refetch to ensure alignment with the server truth
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
  };
  


const useAddPic = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Pic>({
    mutationFn: (h) => axios.post(`${config.baseApiUrl}/pics`, h),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pics"] });
      nav("/");
    },
  });
};

const useUploadPic = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: async (fileToUpload:File) => {
        const formData = new FormData();

        formData.append('file', fileToUpload);

      
        const response = await fetch(`${config.baseApiUrl}/api/pic`, {
            method: 'POST',
            body: formData        
        });

        if (!response.ok) throw new Error('Upload failed');
        return response.json();
      
        },
        onSuccess: (data) => {
            console.log('File uploaded successfully:', data);
            queryClient.invalidateQueries({ queryKey: ["pics"] });
            navigate("/pics");
        },
    });
};

const useDeletePic = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Pic>({     
        mutationFn: (pic: Pic) => axios.delete(`${config.baseApiUrl}/pics/${pic.id}`),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["pics"] });
            navigate("/pics");
        }
    });
};



export default useFetchPics;
export { useAddPic, useDeletePic, useUploadPic, useReorderMutation };   