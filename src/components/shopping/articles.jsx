import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../lib/services";
import styled from "styled-components";
import Product from "../product";
import Article from "./article";
const Articles = () => {
  const ref = useRef(null);
  const [products, setProducts] = useState([]);
  const [selectedId, setId] = useState(null);
  const [show, setShow] = useState(false); // article details
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
      padding: 10px;
      grid-template-columns: 1fr 1fr;
      gap: 0.4em;
      justify-items: center;
      align-items: center;
    }
    @media only screen and (min-width: 800px) {
      padding: 10px min(15vw, 550px);
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.4em;
      justify-items: center;
    } ;
  `;
  const ArticleContainer = styled.div`
    display: ${() => (show ? "block" : "none")};
  `;
  useEffect(() => {
    setProducts(getProducts());
  }, []);
  const handleClick = (id) => {
    setShow(!show);
    setId(id);
  };
  return (
    <Container ref={ref}>
      {" "}
      <S_container>
        {products.map((prod, index) => {
          console.log("product = ", prod);
          return (
            <Product
              key={index}
              product={prod}
              onClick={() => handleClick(prod.id)}
            />
          );
        })}
      </S_container>
      <ArticleContainer>
        <Article idArticle={selectedId} element={ref} click={handleClick} />
      </ArticleContainer>
    </Container>
  );
};

export default Articles;
