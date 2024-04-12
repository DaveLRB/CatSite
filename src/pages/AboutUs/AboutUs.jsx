import { NavbarLayout } from "../../components/Navbar/Navbar";
import {
  TextContainer,
  Text,
  SubTitle,
  List,
  ListItem,
  Container,
  Image,
  InfoContainer,
  AnchorStyle,
} from "./styled";

export const AboutUsPage = () => {
  return (
    <>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <Container>
          <TextContainer>
            <Text>
              <SubTitle>About Us</SubTitle> Welcome to The Catsie, your ultimate
              destination for all things feline! At The Catsie, we are
              passionate about providing cat lovers with top-quality products
              and accessories to enhance the lives of their beloved feline
              companions.
              <SubTitle>Our mission</SubTitle> Our mission is simple: to offer a
              curated selection of cat products that are not only stylish and
              functional but also contribute to the health, happiness, and
              well-being of cats everywhere. We believe that every cat deserves
              the best, and we strive to deliver just that through our carefully
              chosen range of products. <SubTitle>Our Story</SubTitle> The
              Catsie was founded by a team of dedicated cat enthusiasts who
              recognized the need for a one-stop shop where cat owners could
              find everything they need to pamper their furry friends. With a
              shared love for cats and a commitment to exceptional customer
              service, we set out to create an online platform that caters to
              the unique needs and preferences of both cats and their humans.{" "}
              <SubTitle>What Sets Us Apart</SubTitle>
              <List>
                <ListItem>
                  Expert Curation: Our team of experts hand-picks each product,
                  ensuring that only the best items make it to our shelves. From
                  premium cat food to designer cat furniture, we prioritize
                  quality, safety, and innovation in everything we offer.
                </ListItem>
                <ListItem>
                  Customer Satisfaction: We value our customers above all else
                  and are dedicated to providing them with a seamless shopping
                  experience from start to finish. Whether you have a question
                  about a product or need assistance with your order, our
                  friendly and knowledgeable customer support team is here to
                  help.
                </ListItem>
                <ListItem>
                  Community Engagement: At The Catsie, we believe in giving back
                  to the cat community. That's why we regularly partner with
                  local shelters and rescue organizations to support their
                  efforts in finding loving homes for cats in need. When you
                  shop with us, you're not just buying products—you're making a
                  difference in the lives of cats everywhere.
                </ListItem>
              </List>
              <SubTitle>Get in Touch</SubTitle> We'd love to hear from you!
              Whether you have feedback, suggestions, or just want to share
              photos of your adorable cat enjoying their new toys, we're all
              ears. Feel free to reach out to us via email, phone, or social
              media—we're always here to chat! Thank you for choosing The
              Catsie. We look forward to serving you and your furry friends!
              <SubTitle>Contact Us</SubTitle>
              <InfoContainer>
                <AnchorStyle href="mailto:" target="_blank" rel="noopener noreferrer">
                  info@catsie.com
                </AnchorStyle>

                <AnchorStyle
                  href="https://www.instagram.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="src/assets/instagram.png" />
                </AnchorStyle>

                <AnchorStyle
                  href="https://www.facebook.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="src/assets/facebook.png" />
                </AnchorStyle>

                <AnchorStyle
                  href="https://www.twitter.com/thecatsie/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="src/assets/twitter.png" />
                </AnchorStyle>
              </InfoContainer>
            </Text>
          </TextContainer>
        </Container>
      </main>
    </>
  );
};
