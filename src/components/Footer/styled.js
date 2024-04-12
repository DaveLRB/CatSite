import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 2em;
  position: static;
  height: 130px;
  background-color: #D9C2A7;
  padding: 10px;
  @media (max-width: 480px){
    height: 80px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  @media (max-width: 480px){
    width: 30px;
    height: 30px;
  }
`;
export const AnchorStyle = styled.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;
