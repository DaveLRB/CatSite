import {
  MarqueeContainer,
  ImagesWrapper,
  Image,
  Name,
  Figure,
  StyledLink,
} from "./styled";
import { useSelector } from 'react-redux';


const Marquee = () => {
  const catData = useSelector(state => state.user.cat);
  return (
    <MarqueeContainer>
      <ImagesWrapper>
        {Object.values(catData).map((cat) => (
          <StyledLink key={cat.id} to={`/cat/${cat.id}`}>
            <Figure>
              <Image src={cat.image} alt={cat.name} />
              <Name>{cat.name}</Name>
            </Figure>
          </StyledLink>
        ))}
      </ImagesWrapper>
    </MarqueeContainer>
  );
};

export default Marquee;
