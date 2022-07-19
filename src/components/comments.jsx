import styled from "styled-components";
import { Moustache } from "../lib/icons";
const Comments = () => {
  const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: rgb(206, 206, 206);
    @media only screen and (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
      padding: 60px min(15vw, 500px);
    }
  `;
  const Title = styled.h2`
    font-size: min(8vw, 3rem);
    text-decoration: underline;
  `;
  const Comment = styled.div`
    width: min(100%, 700px);
    background-color: rgb(33, 50, 32);
    font-size: min(5vw, 1rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 400px;
    border-radius: 15px;
    box-shadow: rgba(33, 50, 32, 0.9) 10px 4px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    color: white;
  `;

  const Appointment = styled.div`
    height: 500px;
    display: flex;
    border-radius: 15px;
    background-color: rgb(243, 243, 242);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid rgb(33, 50, 32);
  `;

  const Bar = styled.hr`
    width: 100px;
    border: 2px solid rgb(33, 50, 32);
    margin-bottom: 20px;
  `;
  const Text = styled.p`
    box-sizing: border-box;
    width: min(700px, 100%);
    padding: 5px;
    text-align: ${({ center }) => (center ? "center" : "left")};
    font-size: min(6vw, 1.2rem);
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
      <Appointment>
        <Moustache />
        <Bar />

        <Title>BOOK A CHAIR</Title>
        <Text center={true}>
          Justo eget dolor dictum scelerisque. Ut porta tristique viverra quam
          quis i
        </Text>
        <StyledButton>Book an appointment</StyledButton>
      </Appointment>
      <Comment>JE suis la section commentaire</Comment>
    </Container>
  );
};

export default Comments;
