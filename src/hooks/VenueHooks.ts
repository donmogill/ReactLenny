import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config/config";
import { useNavigate } from "react-router-dom";
import Problem from "../types/problem";
import { Venue } from "../types/venue";


const useFetchVenues = () => {
    return useQuery<Venue[], AxiosError>({
        queryKey: ["venues"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/api/venues`).then((resp) => resp.data),
        
    });
};  

const useDeleteVenue = () => {
    const queryClient = useQueryClient();
    const nav = useNavigate();
    return useMutation<AxiosResponse, AxiosError, Venue>({     
        mutationFn: (v: Venue) => axios.delete(`${config.baseApiUrl}/api/venues/${v.id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["venues"] });
            nav("/venues");            
        } 
    });
};

const useAddVenue = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Venue>({
    mutationFn: (v:Venue) => axios.post(`${config.baseApiUrl}/api/venues`, v),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shows"] });
      nav("/venues");
    },
  });
};



export {useFetchVenues, useDeleteVenue, useAddVenue}