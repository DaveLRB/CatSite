import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2em;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3em;
  row-gap: 2em;
  @media (max-width: 480px) {
    column-gap: 1em;
    row-gap: 0.5em;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 5em;
  background-color: rgba(255, 255, 255, 0.5);
  border: 8px solid rgba(255, 255, 255);
  width: 50%;
  border-radius: 2em;
  @media (max-width: 480px) {
    width: 90%;
    padding: 2em;
  }
`;
export const Text = styled.p`
  font-size: 1.3em;
  margin: 0;
  padding: 0;
  @media(max-width: 480px){
    font-size: 0.8em;
  }
`;

export const SubTitle = styled.h1`
  font-size: 2em;
  color: #D9C2A7;
`;

export const List = styled.ul`
  list-style-type: circle;
`;

export const ListItem = styled.li`
  padding: 0.5em 1em 1em 0.5em;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;
export const AnchorStyle = styled.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;
