import type { Pic } from "../types/pic";
import config from "../config/config";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import type Problem from "../types/problem";


const useFetchPics = () => {
    return useQuery<Pic[], AxiosError>({
        queryKey: ["pics"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/pics`).then((resp) => resp.data),
        
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
        mutationFn: async (fileToUpload) => {
        const formData = new FormData();

        formData.append('file', fileToUpload);

      
        const response = await fetch(`${config.baseApiUrl}/api/Upload`, {
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
export { useAddPic, useDeletePic, useUploadPic };   