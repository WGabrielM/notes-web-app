import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const deleteData = async (id) => {
  const response = await axios.delete(`${API_URL}/notes/${id}`);
  return response.data;
};

export function useNoteDataDelete() {
  const queryClient = useQueryClient();

  const deleteNote = async (id) => {
    await deleteData(id);
    queryClient.invalidateQueries(["notes-data"]);
  };

  const { mutate } = useMutation(deleteNote, {
    retry: 2,
  });

  return {
    deleteNote,
    mutate,
  };
}
