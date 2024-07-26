import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  font-family: "Montserrat", sans-serif;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  margin-top: 30px;
`;

const SkillsTitle = styled.h2`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.a`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 20px;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;
  max-width: 200px; /* Limit the width to handle long text */
  display: inline-block; /* Make it inline-block to handle width */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
  overflow: hidden; /* Hide overflowing text */
  white-space: nowrap; /* Prevent text wrapping */

  &:hover {
    background: #0056b3;
  }
`;

const skillLinks = {
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  React: "https://reactjs.org/docs/getting-started.html",
  Bootstrap: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  "Next.js": "https://nextjs.org/docs",
  Figma: "https://www.figma.com/resources/learn-design/",
  "RESTful APIs": "https://restfulapi.net/",
  Git: "https://git-scm.com/doc",
  GitHub: "https://docs.github.com/en/github",
};

const About = () => (
  <AboutContainer>
    <Title>About Me</Title>
    <Description>
      I am a front-end developer with experience in HTML, CSS, JavaScript,
      React, and various other web technologies. I love to create intuitive and
      responsive web applications.
    </Description>
    <Description>
      In my free time, I enjoy learning new technologies, contributing to
      open-source projects, and exploring the latest trends in web development.
    </Description>
    <SkillsContainer>
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillsList>
        {Object.entries(skillLinks).map(([skill, link]) => (
          <li key={skill}>
            <Skill href={link} target="_blank" rel="noopener noreferrer">
              {skill}
            </Skill>
          </li>
        ))}
      </SkillsList>
    </SkillsContainer>
  </AboutContainer>
);

export default About;
