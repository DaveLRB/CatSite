import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
  color: #fff;
  transition: transform 0.3s ease;
`;

export const AnchorStyle = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
  color: #fff;
  transition: transform 0.3s ease;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 2em;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 1em;
    align-items: center;
    row-gap: 0;
    column-gap: 1em;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2em;
  background-color: rgba(255, 255, 255, 0.5);
  border: 20px solid rgba(255, 240, 220);
  width: 500px;
  height: 500px;
  border-radius: 50%;
  margin: 2em;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    border-width: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  column-gap: 2.2em;
  row-gap: 1.5em;
  @media (max-width: 480px) {
    column-gap: 1em;
    row-gap: 0.5em;
    font-size: 1.5em;
  }
`;

export const ImageCat = styled.img`
  width: 350px;
  height: 350px;
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

export const ImageBank = styled.img`
  width: 200px;
  height: 100px;
  @media (max-width: 480px) {
    width: 100px;
    height: 50px;
  }
`;

export const TextStyled = styled.p`
  font-size: 1.5em;
  display: inline;
  margin: 0;
  padding: 0;
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;
