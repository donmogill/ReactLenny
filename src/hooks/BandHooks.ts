import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config/config";
import { useNavigate } from "react-router-dom";
import Problem from "../types/problem";
import { Band } from "../types/band";


const useFetchBands = () => {
    return useQuery<Band[], AxiosError>({
        queryKey: ["bands"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/api/bands`).then((resp) => resp.data),
        
    });
};  

const useDeleteBand = () => {
    const queryClient = useQueryClient();
    const nav = useNavigate();
    return useMutation<AxiosResponse, AxiosError, Band>({     
        mutationFn: (v: Band) => axios.delete(`${config.baseApiUrl}/api/bands/${v.id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bands"] });
            nav("/bands");            
        } 
    });
};

const useAddBand = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  return useMutation<AxiosResponse, AxiosError<Problem>, Band>({
    mutationFn: (v:Band) => axios.post(`${config.baseApiUrl}/api/bands`, v),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shows"] });
      nav("/bands");
    },
  });
};



export {useFetchBands, useDeleteBand, useAddBand}