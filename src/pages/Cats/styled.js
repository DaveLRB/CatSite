/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayContainer = styled.div`
display: grid; 
grid-auto-flow: row dense; 
grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
grid-template-rows: 1fr 1fr; 
gap: 20px 30px; 
grid-template-areas: 
  ". . . . ."
  ". . . . ."; 
justify-content: center; 
align-items: center; 
padding:1.5em 1em;
@media (max-width: 480px) {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    ". ."
    ". ."
    ". .";
padding: 1em 0.5em;
gap: 0 0;
}
`;

export const CardContainer = styled.div`
  border-bottom: 5px solid rgba(255, 255, 224);
  border-top: 5px solid rgba(255, 255, 224);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  max-width: 300px;
  font-size: 0.75em;
  @media(max-width: 480px){
    max-width: 200px;
    margin: 5px;
    padding: 5px;
    font-size: 0.5em;
    
  }
`;

export const InfoContainer = styled.div`
  border: 2px solid rgba(255, 255, 224);
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 224, 0.5);
  font-size:1.4em;
  @media(max-width: 480px){
    font-size: 1.3em;
  }
`;
export const CatImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  @media(max-width:480px){
    padding: 0.5em;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 1em;
  font-size: 1em;
  color: black;

  ${({ isCurrentPage }) =>
    isCurrentPage &&
    `
    background-color: rgba(255, 255, 224, 0.5);
    border: 2px solid rgba(255, 255, 224, 0.5);
    color: rgba(255, 255, 224);
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border-radius: 1.5em;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledUL = styled.ul`
list-style-type: none;
display:flex;
justify-content: center;
padding: 0;

`
export const StyledLI = styled.li`
cursor: pointer;
padding: 0.5em;
`

export const StyledStrong = styled.strong`
color: #D9C2A7;
`