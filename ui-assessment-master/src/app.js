import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AddNote, Email, FormField, Header, HomeContainer, SaveButton, SupportContact, TextArea } from "./styles";

import "./app.css";

function App() {
  return (
    <HomeContainer>
      <Header>
        <h1>Account Overview</h1>
        <SupportContact>
          <span>your feefo support contact</span>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <Email>
              <span>Support</span>
              <p>support@feefo.com</p>
            </Email>
            <p>020 3362 4208</p>
          </div>
        </SupportContact>
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
