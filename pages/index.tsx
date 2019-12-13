import styled from "styled-components";
import AlexImg from "static/images/alex-portrait.png";

const Index = () => {
  return (
    <Container>
      <img src={AlexImg} />
      <RightArea>
        <h1>Hi, I'm Alex</h1>
        <IntroText>
          A front-end developer based in Oslo, Norway. Feel free to browse my
          page!
        </IntroText>
      </RightArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    max-width: 45%;
    height: 100vh;
    object-fit: cover;
  }
`;

const IntroText = styled.p`
  font-size: 32px;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
`;

const RightArea = styled.div`
  flex: 1;
  padding: 50px 30px 0;

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }
`;

export default Index;
