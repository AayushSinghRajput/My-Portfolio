import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2024 My Portfolio. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
