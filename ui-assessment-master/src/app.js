import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Email, Header, HomeContainer, SupportContact } from "./styles";

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

      <article>
        <form>
          <textarea name="task" placeholder="Add a new note" required />
          <button type="submit">Save</button>
        </form>
      </article>
    </HomeContainer>
  );
}

export default App;
