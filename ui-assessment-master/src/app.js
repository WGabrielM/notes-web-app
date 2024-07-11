import {
  AddNote,
  Email,
  FormField,
  Header,
  HomeContainer,
  SaveButton,
  SupportContact,
  SupportInfo,
  TextArea,
} from "./styles";

import "./app.css";

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
      <div>
        <div>
          <strong>Sales</strong>

          <p>You had 0 uploads and 0 lines added.</p>
        </div>

        <div>
          <strong></strong>
          <span>upload success</span>
        </div>
        <div>
          <strong></strong>
          <span>lines saved</span>
        </div>
      </div>

      <AddNote>
        <FormField>
          <TextArea name="note" placeholder="Add a new note" required />
          <SaveButton type="submit">Save</SaveButton>
        </FormField>
      </AddNote>
    </HomeContainer>
  );
}

export default App;
