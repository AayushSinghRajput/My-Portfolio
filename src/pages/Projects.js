import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";

const ProjectsContainer = styled.div`
  padding: 50px 20px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #333;
  font-family: "Montserrat", sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const projectList = [
  {
    id: "newsapp",
    title: "NewsApp",
    description: "A news application built using React.",
    link: "https://github.com/AayushSinghRajput/News-App",
    image:
      "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
  },
  {
    id: "inotebook",
    title: "iNotebook",
    description: "A note-taking application built with React.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
  },
  {
    id: "travel-website",
    title: "Travel Website",
    description: "A travel website created using HTML, CSS, and JavaScript.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://www.shutterstock.com/image-vector/travel-vacation-concept-famous-landmarkstravel-260nw-2074286584.jpg", // Replace with actual image URL
  },
  {
    id: "login-page",
    title: "Login Page",
    description:
      "A responsive login page designed with HTML, CSS, and JavaScript.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1KNJyZ-7jnOwTqcofY64LQoIYQLpT1Eu_A&s", // Replace with actual image URL
  },
  {
    id: "lamborghini-design",
    title: "Lamborghini Car Design",
    description: "A Lamborghini car design using HTML, CSS, and JavaScript.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg", // Replace with actual image URL
  },
  // Additional projects
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://p.kindpng.com/picc/s/394-3941580_portfolio-circle-hd-png-download.png", // Replace with actual image URL
  },
  {
    id: "e-commerce",
    title: "E-commerce Store",
    description:
      "An e-commerce store built with React and integrated payment gateways.",
    link: "https://github.com/AayushSinghRajput",
    image:
      "https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-commerce-Logo-Design-PSD-Download-1024x576.jpg", // Replace with actual image URL
  },
];

const Projects = () => (
  <ProjectsContainer>
    <Title>My Projects</Title>
    <Grid>
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </Grid>
  </ProjectsContainer>
);

export default Projects;
