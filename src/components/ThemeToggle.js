import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const ThemeToggle = ({ theme, toggleTheme }) => (
  <ToggleButton onClick={toggleTheme}>
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </ToggleButton>
);

export default ThemeToggle;
