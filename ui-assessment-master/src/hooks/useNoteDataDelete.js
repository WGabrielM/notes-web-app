import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

export function useDeleteNote() {
    const queryClient = useQueryClient();

    const deleteNote = async (id) => {
        await axios.delete(`${API_URL}/notes/${id}`);
    };

    const mutation = useMutation(
        (id) => deleteNote(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('notes-data'); 
            }
        }
    );

    return mutation;
}
