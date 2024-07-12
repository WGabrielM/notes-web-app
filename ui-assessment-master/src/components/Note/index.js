import React from 'react';

import { useNoteDataDelete } from '../../hooks/useNoteDataDelete';

import { Board, DeleteButton, Text, UpdateButton } from './styles';

export default function Note({ id, text }) {
  const {deleteNote} = useNoteDataDelete(); 

  const handleDelete = () => {
    deleteNote(id); 
  };

  const handleUpdate = () => {};

  return (
    <Board>
      <Text>{text}</Text>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Board>
  );
}
