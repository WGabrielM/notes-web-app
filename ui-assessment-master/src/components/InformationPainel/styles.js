import styled from "styled-components";

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