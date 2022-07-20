import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Wash } from "../lib/icons";
import { getImportantProducts } from "../lib/services";
import Product from "./product";
const Shoping = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 60px min(3vw, 10px);
  `;
  const S_container = styled.div`
    width: 100%;
    height: 100%;
    padding: min(3vw, 10px);
    display: grid;
    align-items: center;
    gap: 0.4em;
    grid-template-columns: 1fr;
    @media only screen and (min-width: 400px) {
      padding: 10px min(15vw, 550px);
      grid-template-columns: 1fr 1fr;
      gap: 0.4em;
      justify-items: center;
    }
    @media only screen and (min-width: 800px) {
      padding: 10px min(15vw, 550px);
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.4em;
      justify-items: center;
    } ;
  `;
  const Title = styled.h2`
    font-size: min(8vw, 2rem);
    text-decoration: underline;
  `;
  const Bar = styled.hr`
    width: 100px;
    border: 2px solid rgb(33, 50, 32);
    margin-bottom: 20px;
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
  useEffect(() => {
    setProducts(getImportantProducts());
  }, []);
  return (
    <Container>
      <Title>Shop</Title>
      <Wash />
      <Bar />
      <Title>Popular Products</Title>
      <S_container>
        {products.map((prod, index) => {
          console.log("product = ", prod);
          return <Product key={index} product={prod} />;
        })}
      </S_container>
      <StyledButton onClick={handleClick}>Visit the Shop</StyledButton>
    </Container>
  );
};

export default Shoping;
