import styled from "styled-components";
import { useState, useEffect } from "react";
import { ServicesIcon } from "../lib/icons";
import { getServices } from "../lib/services";
const Services = () => {
  const [list, setList] = useState([]);
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 60px min(3vw, 10px);
  `;
  const Title = styled.h2`
    font-size: min(8vw, 2rem);
    text-decoration: underline;
  `;
  const S_container = styled.div`
    width: 100%;
    height: 100%;
    padding: min(3vw, 10px);
    display: grid;
    gap: 1rem 0rem;
    @media only screen and (min-width: 700px) {
      padding: 10px min(15vw, 550px);
      grid-template-columns: 1fr 1fr;
    } ;
  `;
  const Service = styled.div`
    display: flex;
    border: 1px solid rgb(33, 50, 32);
    gap: 3px 3px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: min(3vw, 10px);
  `;
  const Text = styled.p`
    box-sizing: border-box;
    width: min(700px, 100%);
    text-align: ${({ center }) => (center ? "center" : "left")};
    font-size: min(6vw, 1.2rem);
  `;
  useEffect(() => {
    setList(getServices());
  }, [list]);
  return (
    <Container id="services">
      <Title>Services</Title>
      <ServicesIcon />
      <S_container>
        {list.map((l, index) => {
          return (
            <Service key={index}>
              <Title>
                {l.title} --{l.price}--
              </Title>
              <Text center={true}>{l.description}</Text>
            </Service>
          );
        })}
      </S_container>
    </Container>
  );
};

export default Services;
