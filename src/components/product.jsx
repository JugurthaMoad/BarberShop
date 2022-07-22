import styled from "styled-components";

const Product = ({ product }) => {
  const Container = styled.div`
    border: 2px solid rgb(33, 50, 32);
    border-radius: 10px;
    padding: min(3vw, 10px);
    width: 100%;
    height: 320px;
    display: flex;
    flex-direction: column;
  `;
  const Title = styled.h2`
    font-size: min(5vw, 1rem);
    text-decoration: underline;
    text-align: left;
    padding: min(4vw, 1rem);
  `;
  const Photo = styled.img`
    width: 100%;
    height: 80%;
  `;

  return (
    <Container>
      <Photo src={product.image} alt="horace" />
      <Title>
        {product.name}
        -- {product.price}
      </Title>
    </Container>
  );
};

export default Product;
