import React from 'react'
import { Board, DeleteButton, Text, UpdateButton } from './styles'

export default function Note({text}) {
  return (
    <Board>
        <Text>{text}</Text>
        <UpdateButton>Update</UpdateButton>
        <DeleteButton>Delete</DeleteButton>
    </Board>
  )
}
