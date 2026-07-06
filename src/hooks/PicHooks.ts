import type { Pic } from "../types/pic";
import config from "../config/config";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const useFetchPics = () => {
    return useQuery<Pic[], AxiosError>({
        queryKey: ["pics"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/pics`).then((resp) => resp.data),
        
    });
};

const useAddPic = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse, AxiosError, Pic>({
        mutationFn: (p: Pic) => axios.post(`${config.baseApiUrl}/pics`, p),     
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ["pics"] });
            navigate("/pics");
        }
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
export { useAddPic, useDeletePic };   