/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCatInfo } from "../../store/cats/catSlice";
import { NavbarLayout } from "../../components/Navbar/Navbar";
import { FooterLayout } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import jsonData from "../../assets/list.json";
import { getCatById } from "../../store/cats/selectors";
import {
  CardContainer,
  InfoContainer,
  CatImage,
  ButtonStyle,
  DisplayContainer,
  ButtonContainer,
  StyledLink,
  StyledUL,
  StyledLI,
  StyledStrong,
} from "./styled";

const CustomCard = ({ id }) => {
  const cat = useSelector((state) => getCatById(state, id));
  if(!cat){
    return null;
  }
  return (
    <StyledLink to={`/cat/${cat.id}`}>
      <CardContainer>
        <CatImage src={cat.image} alt={cat.name} />
        <h2>{cat.name}</h2>
        <InfoContainer>
          <p><StyledStrong>Race: </StyledStrong>{cat.race}</p>
          <p><StyledStrong>Color: </StyledStrong>{cat.color}</p>
          <p><StyledStrong>Weight: </StyledStrong> {cat.weight} kg</p>
        </InfoContainer>
      </CardContainer>
    </StyledLink>
  );
};

export const CatsPage = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = window.localStorage.getItem("catsPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.cat);
  const itemsPerPage = 10;

  useEffect(() => {
    const catArray = Object.values(jsonData);
    dispatch(setCatInfo(catArray));
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem("catsPage", currentPage);
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? Object.values(data).slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/cats/${pageNumber}`);
  };

  return (
    <div>
      <header>
        <NavbarLayout />
      </header>
      <main>
        <DisplayContainer>
          {currentItems.map(
            (cat, index) => cat && <CustomCard key={index} id={Number(cat.id)} />
          )}
        </DisplayContainer>
        <ButtonContainer>
          {data && (
            <StyledUL>
              <StyledLI>
                <ButtonStyle
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  {"<"}
                </ButtonStyle>
              </StyledLI>

              {Array.from(
                {
                  length: Math.ceil(Object.values(data).length / itemsPerPage),
                },
                (_, i) => (
                  <StyledLI key={i}>
                    <ButtonStyle
                      isCurrentPage={currentPage === i + 1}
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </ButtonStyle>
                  </StyledLI>
                )
              )}

              <StyledLI>
                <ButtonStyle
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage >=
                    Math.ceil(Object.values(data).length / itemsPerPage)
                  }
                >
                  {">"}
                </ButtonStyle>
              </StyledLI>
            </StyledUL>
          )}
        </ButtonContainer>
      </main>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
};
export default CatsPage;
