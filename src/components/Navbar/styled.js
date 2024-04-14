import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex; 
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  padding: 1rem;
  &:hover {
    color: #40312C;
  }
  ${props => props.activated &&
    `
      color: #40312C;
      background-color: #D9C2A7;
      border-radius: 1.5em;
      transition: transform 0.5s ease;
      &:hover {
        transform: scale(1.1);
      }
    `}
  @media (max-width: 768px) {
    font-size: ${(props) => (props.open ? "2rem" : "1.4rem")};
  }
`;

export const StyledLinkImage = styled(Link)`
padding:0;
margin:0;
display: flex;
text-decoration: none;
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  opacity: 1; 
  transform: scaleY(1); 
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; 
  @media (max-width: 768px) {
    flex-direction: column;
    opacity: ${(props) => (props.open ? "1" : "0")}; 
    transform: ${(props) => (props.open ? "scaleY(1)" : "scaleY(0)")}; 
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    background-color: #D9C2A7;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
`;

export const Navbar = styled.nav`
  background-color: #D9C2A7;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  max-width: 6rem;
  height: 6em;
  padding: 1rem;
  transition: all 0.3s ease;
  filter: drop-shadow(1px 1px #40312C) drop-shadow(-1px -1px #40312C);
  &:hover{
    transform: scale(1.1);
    filter: drop-shadow(3px 3px  #40312C)  drop-shadow(-3px -3px #40312C);  
  }
`;

export const Title = styled.p`
  font-size: 2.7rem;
  font-weight:bolder;
  margin: 0;
  padding: 0 0.5em;
  -webkit-text-fill-color: #FFF;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const Burger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-right: 1.5em;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }
`;

