import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: #f0f2f5;
  padding: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
  font-family: "Montserrat", sans-serif;
`;

const Description = styled(motion.p)`
  font-size: 1.5em;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ImageContainer = styled(motion.div)`
  perspective: 1000px;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Image = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.1s;
`;

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = imageRef.current;
    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;
    const rotateX = (clientY - centerY) / 20;
    const rotateY = (centerX - clientX) / 20;
    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ImageContainer onMouseMove={handleMouseMove}>
        <Image
          ref={imageRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRm-hS4hgF1jsAir-fRcbgDAfVDnLruZR4Jg&s" // Replace this with the actual image URL
          alt="Profile"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-in"
        />
      </ImageContainer>
      <Title
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
      >
        Welcome to My Portfolio
      </Title>
      <Description
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
      >
        I am a front-end developer passionate about building beautiful and
        functional web applications.
      </Description>
    </HomeContainer>
  );
};

export default Home;
