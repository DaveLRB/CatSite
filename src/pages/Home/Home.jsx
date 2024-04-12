import { NavbarLayout } from "../../components/Navbar/Navbar.jsx";
import Marquee from "../../components/Marquee/Marquee.jsx";
import { FooterLayout } from "../../components/Footer/Footer.jsx";
import { Title, Container } from "./styled.js";

export const HomePage = () => {
  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Container>
          <Title>Our Lil Babies</Title>
        </Container>
        <Marquee />
      </main>
      <footer>
        <FooterLayout/>
      </footer>
    </div>
  );
};
