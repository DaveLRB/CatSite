import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4em;
  row-gap: 2em;
  column-gap: 2em;
  flex-direction: column;
  @media (max-width: 480px) {
    padding: 2em;
    row-gap: 0.5em;
    column-gap: 1em;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  border: 2px solid rgba(255, 255, 224);
  background-color: rgba(255, 255, 224, 0.5);
  font-size: 2em;
  padding: 1em;
  flex-direction: column;
  border-radius: 1em;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media (max-width: 480px) {
    padding: 1em;
    row-gap: 0.5em;
    column-gap: 1em;
    font-size: 1.5em;
    width: 80%;
  }
`;

export const MessageLarge = styled.h3`
  font-size: 2.5em;
  font-weight: bold;
  border-radius: 0.3em;
  width: fit-content;
  text-align: center;
  margin: 0;
  padding: 0.5em;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 480px) {
    font-size: 1.4em;
  }
`;

export const MessageMedium = styled.h6`
  font-size: 1.6em;
  padding: 0.5em;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

export const MessageSmall = styled.p`
  font-size: 1em;
  padding: 0.7em;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3em;
`;

export const ModalContent = styled.div`
  background-color: rgba(255, 240, 220);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 5.5em 3em 3.5em 3em;
  border-radius: 3em;
  position: relative;
  @media (max-width: 480px) {
    width: 60%;
    height: 70%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2.5em;
  cursor: pointer;
  padding: 1em;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: rgba(255, 200, 150);
  }
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.43em;
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  padding-left: 1em;
  width: 100%;
  @media (max-width: 480px) {
    padding-left: 0;
  }
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: rgba(255, 240, 220, 0.725);
  border: 2px solid #fff;
  color: rgba(0, 0, 0, 0.5);
  font-size: 2.5em;
  padding: 0.5em;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: rgba(255, 240, 220, 0.8);
    border-color: #2f2f2f9d;
    color: rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 480px) {
    width: 80px;
    padding: 0.2em;
  }
`;
export const SpanButtons = styled.span`
  font-size: 0.8em;
  @media (max-width: 480px) {
    font-size: 0.6em;
  }
`;

export const ButtonContainer = styled.button`
  padding-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  column-gap: 1em;
  border: none;
  @media (max-width: 480px) {
    column-gap: 0.5em;
  }
`;

export const Title = styled.h2`
  display: flex;
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  text-align: center;
  margin: 0;
  padding: 0.5em;

  @media (max-width: 480px) {
    font-size: 1.35em;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5em;
  color: rgba(255, 240, 220);
  font-weight: bold;
  text-align: left;
  margin: 0;
  @media (max-width: 480px) {
    font-size:1.3em;
  }
`;

export const Image = styled.img`
width:400px;
height:400px;
@media (max-width: 480px) {
  width:200px;
  height:200px;
}
`