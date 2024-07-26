import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 1em;
  color: #555;
`;

const Link = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectCard = ({ title, description, link, image }) => (
  <Card>
    <Image src={image} alt={title} />
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </Link>
    </Content>
  </Card>
);

export default ProjectCard;
