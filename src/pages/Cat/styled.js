import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  padding: 2em;
  justify-content: center;
  align-items: center;
  padding-bottom:95px;
  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export const CardContainer = styled.div`
  border-bottom: 5px solid rgba(255, 255, 224);
  border-top: 5px solid rgba(255, 255, 224);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  border: 2px solid rgba(255, 255, 224);
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(255, 255, 224, 0.5);
  display: flex;
  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 10px;
  font-size: 1.5em;
  justify-content: justify;
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;
export const CatImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    border-width: 2px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 3em;
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  width: 70%;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 2em;
  }
`;
export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  column-gap: 0.5em;
  row-gap: 0.5em;
  padding: 0.5em;
  justify-content: center;
`;
export const ListItemStyle = styled.li`
  padding: 0.5em 1em 1em 0.5em;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const StrongStyle = styled.strong`
  color: #D9C2A7;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.2em 3em;
  margin: 0;
  @media (max-width:480px) {
    font-size: 1.2em;
    padding: 0.2em 2.6em;
  }
`;

export const StyledButtonAdopt = styled.button`
  width: 7em;
  height: 2.5em;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 22px;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 0.2em solid rgba(255, 240, 220, 0.725);
    background: rgba(255, 240, 220);
    color: #2f2f2f;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
