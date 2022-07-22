import React, { Component } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Herro = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/appointment");
  };
  const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-image: url("images/hero.jpg");
    background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  `;
  const StyledHerro = styled.div`
    position: relative;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.57);
  `;
  const Sub_container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  `;
  const Title = styled.span`
    font-size: min(12vw, 10rem);
    color: white;
  `;
  const Sub_title = styled.span`
    font-size: min(10vw, 9rem);
    color: rgb(171, 171, 171);
};
  `;
  const StyledButton = styled.span`
    display: block;
    padding: 25px 10px;
    width: min(80%, 300px);
    background-color: rgb(33, 50, 32);
    border-radius: 15px;
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
      <StyledHerro>
        <Sub_container>
          <Title>Barber</Title>
          <Sub_title>Fresh since 2010</Sub_title>
          <StyledButton onClick={handleClick}>Book an appointment</StyledButton>
        </Sub_container>
      </StyledHerro>
    </Container>
  );
};

export default Herro;
