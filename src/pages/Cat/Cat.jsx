import { useParams } from "react-router-dom";
import { NavbarLayout } from "../../components/Navbar/Navbar";
import {FooterLayout} from "../../components/Footer/Footer";
import {NotFoundPage } from "../NotFound/NotFound";
import { useSelector } from 'react-redux';
import { getCatById } from '../../store/cats/selectors';
import {
  CardContainer,
  InfoContainer,
  CatImage,
  DisplayContainer,
  StyledTitle,
  StyledList,
  ListItemStyle,
  StrongStyle,
  StyledLink,
  StyledButtonAdopt,
} from "./styled";

export const CatPage = () => {
  const { id } = useParams();

  const cat = useSelector(state => getCatById(state, Number(id)));

  if (!cat) {
    return <NotFoundPage/>
  }

  return (
    <div>
      <header>
        <NavbarLayout />
      </header>

      <main>
        <StyledTitle>{cat.name}</StyledTitle>
        <DisplayContainer>
          <CatImage src={cat.image} alt={cat.name} />
          <CardContainer>
            <InfoContainer>
              <StyledList>
                <ListItemStyle>
                  <StrongStyle>Race:</StrongStyle> {cat.race}
                </ListItemStyle>
                <ListItemStyle>
                  <StrongStyle>Color:</StrongStyle> {cat.color}
                </ListItemStyle>
                <ListItemStyle>
                  <StrongStyle>Weight:</StrongStyle> {cat.weight} kg
                </ListItemStyle>
                <ListItemStyle>
                  <StrongStyle>Age: </StrongStyle> {cat.age} 
                </ListItemStyle>
                <ListItemStyle>
                  <StrongStyle>Location:</StrongStyle> {cat.location}
                </ListItemStyle>
                <StyledLink to={`/form/${cat.id}`}>
                  <StyledButtonAdopt>Adopt me?</StyledButtonAdopt>
                </StyledLink>
              </StyledList>
            </InfoContainer>
          </CardContainer>
        </DisplayContainer>
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};
