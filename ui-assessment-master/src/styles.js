import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: 0 auto;

  width: 1280px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SupportContact = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Email = styled.div`
  margin-top: 15px;
`;

export const AddNote = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 5rem auto 0;

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
  color: var(--gray-300);
  background-color: var(--gray-500);

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
  color: var(--gray-100);
  transition: background-color 0.1s;
  background-color: var(--blue-dark);

  height: 100%;
  width: 13%;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
