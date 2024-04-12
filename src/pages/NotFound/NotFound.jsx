import { NavbarLayout } from "../../components/Navbar/Navbar";
import { FooterLayout } from "../../components/Footer/Footer";
import { Container, Text, Image } from "./styled";
import catImage from "../../assets/catlook.png";

export const NotFoundPage = () => {
  return (
    <>
      <header>
        <NavbarLayout />
      </header>

      <Container>
        <Text>CAT NOT FOUND</Text>
        <Image src={catImage}/>
      </Container>

      <footer>
        <FooterLayout />
      </footer>
    </>
  );
};
