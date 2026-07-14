import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config/config";
import { Show } from "../types/show";
import { useNavigate } from "react-router-dom";
import Problem from "../types/problem";

const useFetchShows = (bandId: number) => {
    return useQuery<Show[], AxiosError>({
        queryKey: ["shows"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/api/shows${bandId}`).then((resp) => resp.data),
        
    });
};  

const useFetchShow = (id: number) => {
  return useQuery<Show, AxiosError>({
    queryKey: ["shows", id],
    queryFn: () =>
      axios.get(`${config.baseApiUrl}/api/shows/${id}`).then((resp) => resp.data),
  });
};

const useAddShow = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Show>({
    mutationFn: (s:Show) => axios.post(`${config.baseApiUrl}/api/shows`, s),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shows"] });
      nav("/upcomingShows/admin");
    },
  });
};

const useDeleteShow = () => {
    const queryClient = useQueryClient();
    const nav = useNavigate();
    return useMutation<AxiosResponse, AxiosError, Show>({     
        mutationFn: (s: Show) => axios.delete(`${config.baseApiUrl}/api/shows/${s.id}`),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["shows"] });
            nav("/upcomingShows/admin");            
        }        

    });
};

const useUpdateShow = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Show>({
    mutationFn: (s:Show) => axios.put(`${config.baseApiUrl}/api/shows`, s),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shows"] });
      nav("/upcomingShows/admin");
    },
  });
};




export { useFetchShows, useDeleteShow, useAddShow, useFetchShow, useUpdateShow }