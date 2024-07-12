import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async () => {
    const response = axios.get(API_URL + '/notes');
    return response;
}

export function useNoteData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['notes-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}