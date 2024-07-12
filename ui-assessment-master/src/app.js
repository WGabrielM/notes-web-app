import { useState } from "react";

import Note from "./components/Note";
import Header from "./components/Header";
import { useNoteData } from "./hooks/useNoteData";
import { useNoteDataMutate } from "./hooks/useNoteDataMutate";
import InformationPainel from "./components/InformationPainel";

import "./app.css";
import {
  AddNote,
  FormField,
  HomeContainer,
  SaveButton,
  TextArea,
} from "./styles";

function App() {
  const { data } = useNoteData();
  const { mutate } = useNoteDataMutate();
  const [noteText, setNoteText] = useState("");

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("This field is required");
  }

  function handleInputChange(event) {
    setNoteText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    mutate({ text: noteText });
    setNoteText("");
  }

  return (
    <HomeContainer>
      <Header />

      <InformationPainel />

      <AddNote>
        <FormField onSubmit={handleSubmit}>
          <TextArea
            name="note"
            title="Field to add a note"
            placeholder="Add a new note here"
            onInvalid={handleNewCommentInvalid}
            onChange={handleInputChange}
            value={noteText}
            required
          />
          <SaveButton type="submit">Save</SaveButton>
        </FormField>
      </AddNote>

      {Array.isArray(data) &&
        data.map((noteData) => (
          <Note key={noteData.id} id={noteData.id} text={noteData.text} />
        ))}
    </HomeContainer>
  );
}

export default App;
