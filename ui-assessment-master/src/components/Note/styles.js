import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  background-color: white;

  margin: 0 auto 1.5rem;
  padding: 1.5rem;

  width: 736px;
`;

export const Text = styled.p`
  flex-grow: 9;
  width: 12rem;
`;

export const DeleteButton = styled.button`
  flex-grow: 1;

  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-left: 1rem;
  border-radius: 8px;

  transition: background-color 0.1s;
  background-color: red;

  width: 3rem;
  height: 3rem;
`;
