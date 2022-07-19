import React, { Component } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { CardIcon } from "../lib/icons";
const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about_details");
  };
  const Container = styled.div`
    width: 100%;
    display: grid;
    box-sizing: border-box !important;
    grid-template-columns: 1fr;
    gap: 1rem 0rem;
    padding: 60px min(3vw, 10px);
    background-color: rgb(206, 206, 206);
    @media only screen and (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
      padding: 60px min(15vw, 500px);
    }
  `;
  const Sub_container = styled.div`
    display: flex;
    width: min(600px, 100%);
    flex-direction: column;
    justify-content: center;
    gap: 20px 0px;
  `;
  const Title = styled.h2`
    font-size: min(8vw, 1.5rem);
    text-decoration: underline;
  `;
  const Sub_title = styled.h3`
    font-size: min(6vw, 1.3rem);
  `;
  const Text = styled.p`
    box-sizing: border-box;
    width: min(700px, 100%);
    text-align: ${({ center }) => (center ? "center" : "left")};
    font-size: min(6vw, 1.2rem);
  `;
  const Card = styled.div`
    color: white;
    height: 500px;
    background-color: rgb(33, 50, 32);
    font-size: min(5vw, 1rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-radius: 15px;
    box-shadow: rgba(33, 50, 32, 0.9) 10px 4px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  `;
  const Grid_container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const StyledButton = styled.span`
    display: block;
    padding: 10px;
    width: min(80%, 300px);
    background-color: rgb(33, 50, 32);
    border-radius: 5px;
    color: white;
    text-align: center;
    font-size: min(7vw, 1.5rem);
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  `;
  return (
    <Container>
      <Grid_container>
        <Sub_container>
          <Title>ABOUT US :</Title>
          <Sub_title>A Traditional Barber & Shop</Sub_title>
          <Text>
            Hello! My name is Jugurtha Moad. I am passionate about web
            development especially Front-End web development, I enjoy creating
            things that live on the internet. I am always learning new
            techniques and technologies that will allow me to write clean,
            reusable code and improve performance. My interest in web
            development started when I discovered React Js. I really enjoy
            reading books " Personal Development, investment ..." and play some
            nice guitar tunes.
          </Text>
          <StyledButton onClick={handleClick}>Learn more</StyledButton>
        </Sub_container>
      </Grid_container>
      <Grid_container>
        <Sub_container>
          <Card>
            <CardIcon />
            <Title>OPEN HOURS</Title>
            <Text center={true}>
              Sunday – Friday: 2 pm – 10pm
              <br />
              Saturday – Sunday: 10am – 10pm
            </Text>
            <Title>SHOP</Title>
            <Text center={true}>
              1234 Divi St. #1000
              <br />
              San Francisco, CA 92125
            </Text>
          </Card>
        </Sub_container>
      </Grid_container>
    </Container>
  );
};

export default About;
