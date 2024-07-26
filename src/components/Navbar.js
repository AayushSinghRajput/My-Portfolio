import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/pictures/logo.webp";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo = styled.img`
  height: 40px; // Adjust size as needed
`;

const Navbar = ({ theme, toggleTheme }) => (
  <Nav>
    <Link to="/">
      <Logo src={logo} alt="Company Logo" />
    </Link>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  </Nav>
);

export default Navbar;
