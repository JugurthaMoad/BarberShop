import { useContext } from "react";
import CartContext from "../../context/CartContext";
import styled from "styled-components";
const Cart = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Element = styled.div`
    width: 90vw;
    height: 200px;
    border: 1px solid black;
  `;
  const { listArticles } = useContext(CartContext);
  const renderContent = () => {
    if (listArticles.length > 0) {
      return listArticles.map((item, index) => {
        return <Element key={index}>{item.rep}</Element>;
      });
    } else {
      return <div>No elements</div>;
    }
  };
  return <Container>{renderContent()} </Container>;
};

export default Cart;
