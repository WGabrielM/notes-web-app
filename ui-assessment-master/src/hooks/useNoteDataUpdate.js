import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export function useNoteDataUpdate() {
  const queryClient = useQueryClient();

  const updateNote = async (id, newText) => {
    const response = await axios.put(`${API_URL}/notes/${id}`, { text: newText });
    return response.data;
  };

  const { mutate } = useMutation(updateNote, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notes-data"]);
    },
    retry: 2,
  });

  return {
    updateNote,
    mutate,
  };
}
