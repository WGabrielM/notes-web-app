import styled from "styled-components";


export const Support = styled.header`
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