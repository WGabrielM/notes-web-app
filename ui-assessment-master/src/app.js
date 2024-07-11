import {
  AddNote,
  DataNotes,
  Email,
  FormField,
  Header,
  HomeContainer,
  InfoPanel,
  NotesData,
  NotesUploads,
  PercentualData,
  Sales,
  SaveButton,
  SavedProcess,
  SupportContact,
  SupportInfo,
  TextArea,
} from "./styles";

import "./app.css";
import Note from "./components/Note";

function App() {
  return (
    <HomeContainer>
      <Header>
        <h1>Account Overview</h1>
        <SupportInfo>
          <span>your feefo support contact</span>
          <SupportContact>
            <img src="/src/assets/images/support-img.png" alt="" />
            <Email>
              <strong>Support</strong>
              <p>support@feefo.com</p>
            </Email>
            <p>020 3362 4208</p>
          </SupportContact>
        </SupportInfo>
      </Header>

      <InfoPanel>
        <Sales>
          <strong>Sales</strong>
          <p>
            You had <strong>0 uploads</strong> and <strong>0 lines</strong>{" "}
            added.
          </p>
        </Sales>

        <NotesData>
          <NotesUploads>
            <PercentualData>0%</PercentualData>
            <SavedProcess>upload success</SavedProcess>
          </NotesUploads>
          <NotesUploads>
            <PercentualData>0%</PercentualData>
            <SavedProcess>lines saved</SavedProcess>
          </NotesUploads>
        </NotesData>
      </InfoPanel>

      <AddNote>
        <FormField>
          <TextArea name="note" placeholder="Add a new note" required />
          <SaveButton type="submit">Save</SaveButton>
        </FormField>
      </AddNote>

      <Note text="Test text note here " />

    </HomeContainer>
  );
}

export default App;
