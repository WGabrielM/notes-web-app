import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0 auto;

  width: 1280px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  gap: 3rem;

  margin-top: 5rem;
`;

export const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  span {
    text-transform: uppercase;
    color: darkgray;
    font-weight: bold;
  }
`;

export const SupportContact = styled.div`
  display: flex;
  align-items: end;

  img {
    height: 3rem;
    width: 3rem;
  }
`;

export const Email = styled.div`
  padding: 0.8rem 0;

  width: 10rem;

  p {
    display: inline;

    &::before {
      content: url("/assets/images/envelope-solid.svg");
      position: relative;
      left: 4px;
      top: 3px;
      width: 10px;
    }
  }
`;

export const InfoPanel = styled.div`
  background-color: white;

  padding: 1rem;
  margin: 0 auto;

  width: 922px;
`;

export const Sales = styled.div`
  border-bottom: 1px solid darkgray;

  strong {
    &::before {
      content: url("/src/assets/upload-solid.svg");
      position: relative;
      left: 4px;
      top: 3px;
    }
  }
`;

export const NotesData = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NotesUploads = styled.div``;

export const PercentualData = styled.div`
  display: block;
  font-size: 75px;
  color: lightgreen;
`;

export const SavedProcess = styled.span`
  color: darkgray;
  font-weight: bold;
  text-transform: uppercase;
`;

export const AddNote = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 5rem auto 5rem;

  width: 736px;
`;

export const FormField = styled.form`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  height: 54px;
  width: 736px;
`;

export const TextArea = styled.textarea`
  border: 0;
  resize: none;
  padding: 1rem;
  line-height: 1.4;
  border-radius: 5px;
  background-color: white;

  height: 100%;
  width: 85%;
`;

export const SaveButton = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-left: 1rem;
  border-radius: 8px;
  color: #F2F2F2;
  transition: background-color 0.1s;
  background-color: #4EA8DE;

  height: 100%;
  width: 13%;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
