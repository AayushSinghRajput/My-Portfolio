import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
