import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import styled from "styled-components";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: min(4vw, 1rem);
  `;
  const Element = styled.div`
    width: 90vw;
    height: 200px;
    border: 1px solid black;
    display: flex;
    padding: min(4vw, 1rem);
    border-radius: 10px;
    @media only screen and (min-width: 800px) {
      width: 760px;
      margin: auto;
    }
  `;
  const StyledButton = styled.div`
    padding: 2px;
    width: 100vw;
    height: 50px;
    background-color: rgb(33, 50, 32);
    border-radius: 10px;
    display: ${() => (total > 0 ? "flex" : "none")};
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
  const Photo = styled.img`
    width: 50%;
    height: 100%;
  `;
  const Info = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const Title = styled.h2`
    font-size: min(5vw, 1rem);
    text-decoration: underline;
    text-align: left;
    padding: min(4vw, 1rem);
  `;
  const N_Article = styled.div`
    width: 100%;
    display: flex;

    gap: 10px;
    align-items: center;
    padding: min(4vw, 1rem);
  `;
  const Add = styled.span`
    border: 1px solid black;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  `;
  const { listArticles, addElement, deleteElement } = useContext(CartContext);
  const Rep = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
  `;
  const handleAdd = (el) => {
    addElement(el);
  };
  const handleDelete = (el) => {
    deleteElement(el);
  };

  const renderContent = () => {
    if (listArticles.length > 0) {
      return listArticles.map((item, index) => {
        return (
          <Element key={index}>
            <Photo src={item.element.image} />
            <Info>
              <Title>
                {item.element.name} {item.element.price}
              </Title>
              <N_Article>
                <Add onClick={() => handleAdd(item.element)}>+</Add>
                <Rep>{item.rep}</Rep>
                <Add onClick={() => handleDelete(item.element)}>-</Add>
              </N_Article>
            </Info>
          </Element>
        );
      });
    } else {
      return <div>No elements</div>;
    }
  };

  useEffect(() => {
    let price = 0;
    listArticles.forEach((article) => {
      price += article.element.price * article.rep;
    });
    setTotal(price);
  });
  return (
    <Container>
      {renderContent()}
      <StyledButton>Payer {total}€ </StyledButton>
    </Container>
  );
};

export default Cart;
