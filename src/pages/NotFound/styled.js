import styled from "styled-components";

export const Container = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
export const Text = styled.h1`
font-size:7em;
@media (max-width:480px) {
    font-size:2.5em;
}
`
export const Image = styled.img`
width: 700px;
height: 500px;
@media (max-width:480px) {
    width: 300px;
    height: 200px;
}
`
