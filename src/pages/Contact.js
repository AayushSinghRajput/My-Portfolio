import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const InfoText = styled.p`
  font-size: 1.1em;
  color: #555;
  margin: 5px 0;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 15px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SocialMediaIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  a {
    margin: 0 10px;
    color: #333;
    font-size: 1.5em;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      if (response.status === 200) {
        alert("Your details have been submitted successfully!");
        setFormData({ name: "", email: "", purpose: "", contactNo: "" });
      }
    } catch (error) {
      alert("There was an error submitting your details.");
    }
  };

  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <InfoText>Name: Aayush Singh Rajput</InfoText>
      <InfoText>Contact No: 9805981168</InfoText>
      <InfoText>Email: aayusinghrajput812@gmail.com</InfoText>
      <InfoText>Location: Dharan, Nepal</InfoText>
      <SocialMediaIcons>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialMediaIcons>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="purpose"
          placeholder="Purpose of Collaboration"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="contactNo"
          placeholder="Your Contact No"
          value={formData.contactNo}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
