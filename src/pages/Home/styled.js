import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8em;
  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 3em;
  margin: 0;
  padding: 0.5em 2em 0.5em 2em;
  color: #F2EFDF;
  font-weight: bold;
  border: 4px solid #D9C2A7;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  width: fit-content;
  height: fit-content;
  background-color: rgba(255, 240, 220, 0.4);
  @media (max-width: 480px) {
    font-size: 1.8em;
    border-width: 2px;
  }
`;
