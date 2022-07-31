import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getProductById } from "../../lib/services";
const Article = ({ idArticle, element, click, ...props }) => {
  const [product, setProduct] = useState(); // empty product
  const cart = useContext(CartContext);
  const handleClick = () => {
    cart.addElement(product);
    click();
  };
  const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0px !important;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.413);
    z-index: 99;
  `;
  const S_container = styled.div`
    width: 100vw;
    height: 100vh !important;
    background-color: white;
    color: black;
    @media only screen and (min-width: 700px) {
      position: relative;
      width: 70vw;
      height: 70vh !important;
      padding: min(3vw, 10px);
    } ;
  `;
  const Title = styled.div`
    width: 100%;
    display: flex;
    font-size: min(8vw, 2rem);
    justify-content: space-between;
    align-items: center;
    padding: min(3vw, 10px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  `;
  const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 700px) {
      width: 100%;
      height: 80%;
      flex-direction: row;
    } ;
  `;
  const StyledSpan = styled.span`
    padding: 3px;
    &:hover {
      cursor: pointer;
    }
  `;
  const PhotoContainer = styled.img`
    width: 100vw;
    height: 40vh;
    padding: min(3vw, 10px);
    @media only screen and (min-width: 700px) {
      width: 50%;
      height: 100%;
    } ;
  `;

  const DetailContainer = styled.div`
    width: 100vw;
    height: 50vh;
    overflow-y: scroll;
    display: flex;
    font-size: min(6vw, 1.2rem);
    padding: min(3vw, 10px);
    padding-bottom: 65px !important;
    flex-direction: column !important;
    @media only screen and (min-width: 700px) {
      width: 50%;
      height: 100%;
    } ;
  `;
  const S_title = styled.div`
    font-size: min(8vw, 2rem);
    text-decoration: underline;
    padding: 1rem 0rem;
  `;
  const StyledButton = styled.div`
    padding: 2px;
    width: 100vw;
    height: 50px;
    background-color: rgb(33, 50, 32);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    color: white;
    left: 0px;
    @media only screen and (min-width: 700px) {
      position: relative;
      margin: 10px 0px;
      width: 20vw;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    } ;
  `;
  const renderElement = () => {
    if (product) {
      return (
        <S_container>
          <Title>
            <span>Product Details</span>
            <StyledSpan onClick={click}>X</StyledSpan>
          </Title>
          <Content>
            <PhotoContainer src={product.image} alt="horace" />
            <DetailContainer>
              <S_title>
                {product.name} {product.price}
              </S_title>
              <div>
                d'un point de vue technique. Ceci est nécessaire techniquement
                puisque si un élément flottant traverse l'élément avec barres de
                défilement, cela forcera l'encapsulation du contenu de ce
                dernier autour de l'élément flottant. L'encapsulation devrait
                alors se produire après chaque défilement de la barre et
                mènerait à une expérience utilisateur dégradée d'un point de vue
                technique. Ceci est nécessaire techniquement puisque si un
                élément flottant traverse l'élément avec barres de défilement,
                cela forcera l'encapsulation du contenu de ce dernier autour de
                dégradée
              </div>
              <StyledButton onClick={handleClick}>Acheter</StyledButton>
            </DetailContainer>
          </Content>
        </S_container>
      );
    }
  };
  useEffect(() => {
    setProduct(getProductById(idArticle));
    element.current.style.overflow = "hidden";
  });
  return <Container>{renderElement()}</Container>;
};

export default Article;
