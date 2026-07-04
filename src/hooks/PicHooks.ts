import type { Pic } from "../types/pic";
import config from "../config/config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useFetchPics = () => {
    return useQuery<Pic[], AxiosError>({
        queryKey: ["pics"],
        queryFn: () => 
            axios.get(`${config.baseApiUrl}/pics`).then((resp) => resp.data),
        
    });
};

export default useFetchPics;