import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Navbar,
  StyledLink,
  Logo,
  Title,
  Burger,
  NavLinks,
  StyledLinkImage,
} from "./styled";
import "./styled.css";

export const NavbarLayout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavBarLinks = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Cats",
      url: `/cats`,
    },
    {
      title: "About Us",
      url: `/about`,
    },
    {
      title: "Support Us",
      url: `/support`,
    },
  ];

  const menuElements = NavBarLinks.map((item) => (
    <StyledLink
      open={open}
      to={item.url}
      activated={location.pathname === item.url}
      key={item.title}
    >
      {item.title}
    </StyledLink>
  ));

  return (
    <Navbar>
      <StyledLinkImage to="/home">
        <Logo src="/src/assets/caticon.png" />
        <Title>The Catsie</Title>
      </StyledLinkImage>
      <Burger open={open} >
        <input type="checkbox" id="checkbox" onClick={() => setOpen(!open)}/>
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </Burger>
      <NavLinks open={open}>{menuElements}</NavLinks>
    </Navbar>
  );
};
