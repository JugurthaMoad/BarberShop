import styled from "styled-components";
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
  return <Container>section Contact</Container>;
};

export default Contact;
