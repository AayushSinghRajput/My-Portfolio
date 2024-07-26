import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProjectDetailsContainer = styled.div`
  padding: 20px;
`;

const ProjectDetails = () => {
  const { id } = useParams();
  // You can add more detailed information for each project here based on the ID
  return (
    <ProjectDetailsContainer>
      <h1>Project Details for {id}</h1>
      <p>More details about the project will go here.</p>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails;
