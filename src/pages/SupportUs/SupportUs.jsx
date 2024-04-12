import { NavbarLayout } from "../../components/Navbar/Navbar.jsx";
import { FooterLayout } from "../../components/Footer/Footer.jsx";

import {
  Container,
  MainContainer,
  ImageCat,
  ImageBank,
  RowContainer,
  TextStyled,
  StyledLink,
  AnchorStyle,
} from "./styled.js";

export const SupportUsPage = () => {
  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <RowContainer>
          <MainContainer>
            <StyledLink to="/cats">
              <Container>
                <ImageCat src="src/assets/cat.png" />
                <TextStyled>Help me?</TextStyled>
              </Container>
            </StyledLink>
          </MainContainer>

          <MainContainer>
            <StyledLink>
              <Container>
                <ImageBank src="src/assets/mbway.png" />{" "}
                <TextStyled>The Catsie: +351 915 062 503</TextStyled>{" "}
              </Container>
            </StyledLink>
          </MainContainer>
        </RowContainer>

        <RowContainer>
          <MainContainer>
            <AnchorStyle href="https://www.uniaozoofila.org/" target="_blank">
              <Container>
                <ImageBank src="src/assets/mbway.png" />
                <TextStyled>União Zoófila: +351 934 606 853</TextStyled>
              </Container>
            </AnchorStyle>
          </MainContainer>

          <MainContainer>
            <StyledLink to="/about">
              <Container>
                <ImageCat src="src/assets/cat.png" />
                <TextStyled>Thank you!</TextStyled>
              </Container>
            </StyledLink>
          </MainContainer>
        </RowContainer>
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};
