import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const marqueeAnimation = keyframes`
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-400%);
  }

  @media (max-width: 768px) {
    0% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(-200%); 
    }
  }

  @media (max-width: 480px) {
    0% {
      transform: translateX(0%);
      background-color:red;
    }
    100% {
      transform: translateX(-100%); 
    }
  }
`;

export const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 145px;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 130px;
  }
  @media (max-width: 480px) {
    margin-top: 50px;
    margin-bottom: 145px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  animation: ${marqueeAnimation} 60s linear infinite;
  padding: 50px;
  &::before {
    content: attr(data-content);
  }
  @media (max-width: 768px) {
    padding: 30px;
    animation: ${marqueeAnimation} 45s linear infinite;
  }
  @media (max-width: 480px) {
    padding: 20px;
    animation: ${marqueeAnimation} 30s linear infinite;
  }
`;


export const Image = styled.img`
  width: 300px;
  height: 300px;
  border: 3px solid rgba(255, 240, 220);
  object-fit: cover;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  margin: 1em;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
    border:3px solid #F2EFDF;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    border-width:3px;
  }
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    border-width:2px;
  }
`;


export const Name = styled.figcaption`
  text-align: center;
  margin-top: 10px;
  font-size: 1.5em;
  color: rgba(255, 240, 220);
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border-radius: 1.5em;
  transition: transform 0.5s ease;
  }
`;
