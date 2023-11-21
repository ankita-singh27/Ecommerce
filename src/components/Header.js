import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt=" logo"/>
      <span className="header-section">SHOPPER</span>
      </NavLink>
      <Nav />
      
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

 .header-section{
   color:rgb(98 84 243);
   font-size:2rem;
   font-weight:bold;
   position: absolute;
   top: 4.7rem;
 }
  
`;
export default Header;
