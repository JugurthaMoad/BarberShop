import styled from "styled-components";
import { Products } from "../../lib/icons";

const Herro = () => {
  const Container = styled.div`
    width: 100%;
    height: 60vh;
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
    font-size: min(10vw, 8rem);
    color: white;
  `;
  const Sub_title = styled.span`
font-size: min(8vw, 6rem);
color: rgb(171, 171, 171);
};
`;
  return (
    <Container>
      <StyledHerro>
        <Sub_container>
          <Products />
          <Title>Products</Title>
          <Sub_title>Online Shop</Sub_title>
        </Sub_container>
      </StyledHerro>
    </Container>
  );
};

export default Herro;
