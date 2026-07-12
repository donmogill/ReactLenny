import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config/config";
import { Show } from "../types/show";
import { useNavigate } from "react-router-dom";
import Problem from "../types/problem";
import { Venue } from "../types/venue";

const useFetchShows = () => {
    return useQuery<Show[], AxiosError>({
        queryKey: ["shows"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/api/shows`).then((resp) => resp.data),
        
    });
};  

const useFetchVenues = () => {
    return useQuery<Venue[], AxiosError>({
        queryKey: ["venues"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/api/venues`).then((resp) => resp.data),
        
    });
};  

const useAddShow = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Show>({
    mutationFn: (s:Show) => axios.post(`${config.baseApiUrl}/api/shows`, s),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Shows"] });
      nav("/upcomingShows/admin");
    },
  });
};

const useDeleteShow = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Show>({     
        mutationFn: (show: Show) => axios.delete(`${config.baseApiUrl}/api/shows/${show.id}`),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["Shows"] });
            navigate("/upcomingShows/admin");
        }
    });
};


export default useFetchShows
export {useDeleteShow, useAddShow, useFetchVenues}