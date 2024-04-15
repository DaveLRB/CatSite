/* eslint-disable no-undef */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayContainer = styled.div`
display: grid; 
grid-auto-flow: row dense; 
grid-template-columns: repeat(5, 1fr); 
grid-template-rows: repeat(2, 1fr); 
gap: 1.25rem 1.875rem;  
grid-template-areas: 
  ". . . . ."
  ". . . . ."; 
justify-content: center; 
align-items: center; 
padding:1.5em 1em;
@media (max-width: 1200px) {
  grid-template-columns: repeat(4, 1fr);
}
@media (max-width: 992px) {
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
  ". . .";
  ". . .";
  ". . .";
}
@media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr);
}
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
  border-bottom: 0.313rem solid rgba(255, 255, 224);
  border-top: 0.313rem solid rgba(255, 255, 224);
  border-radius: 0.625rem;
  padding: 0.625rem;
  margin: 0.625rem;
  max-width: 18.75rem;
  font-size: 0.75rem;
  @media (max-width: 480px) {
    max-width: 12.5rem;
    margin: 0.313rem;
    padding: 0.313rem;
    font-size: 0.5rem;
  }
`;

export const InfoContainer = styled.div`
  border: 0.125rem solid rgba(255, 255, 224);
  border-radius: 0.313rem;
  padding: 0.625rem;
  background-color: rgba(255, 255, 224, 0.5);
  font-size: 1.4rem;
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
export const CatImage = styled.img`
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  border-top-left-radius: 3.125rem;
  border-bottom-right-radius: 3.125rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  @media (max-width: 480px) {
    padding: 0.5em;
  }
`;

export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 1em;
  font-size: 1em;
  color: black;

  ${(props) =>
    props.currentPage &&
    `
    background-color: rgba(255, 255, 224, 0.5);
    border: 0.125rem solid rgba(255, 255, 224, 0.5);
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
  display: flex;
  justify-content: center;
  padding: 0;
`;
export const StyledLI = styled.li`
  cursor: pointer;
  padding: 0.5em;
`;

export const StyledStrong = styled.strong`
  color: #d9c2a7;
`;
