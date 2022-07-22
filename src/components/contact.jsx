import styled from "styled-components";
import { ContactIcon } from "../lib/icons";
const Contact = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: rgb(206, 206, 206);
    padding: 60px min(3vw, 10px);
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
  const S_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 0.4em;
    font-size: min(5vw, 1.2rem);
    flex-direction: column;
    justify-content: center;
    padding: min(3vw, 10px);
    @media only screen and (min-width: 800px) {
      width: 80%;
      padding: 10px min(15vw, 550px);
    } ;
  `;
  const Input_container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media only screen and (min-width: 800px) {
      flex-direction: row;
    } ;
  `;
  const Input = styled.input`
    width: 100%;
    padding: 8px;
  `;
  const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
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
  const Informations = styled.div`
    border: 1px solid black;
  `;
  return (
    <Container id="contact">
      <Title>Contact</Title>
      <ContactIcon />
      <Bar />
      <Title>Send a message</Title>
      <S_container>
        <Input_container>
          <Input type="text" placeholder="Name" />
          <Input type="mail" placeholder="Email adresse" />
        </Input_container>
        <TextArea rows="5" cols="33" placeholder="Your message"></TextArea>
        <StyledButton>Send message</StyledButton>
      </S_container>
      <Informations>
        <div></div>
        <div></div>
        <div></div>
      </Informations>
    </Container>
  );
};

export default Contact;
