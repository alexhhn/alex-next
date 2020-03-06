import styled from "styled-components";
import AlexImg from "public/images/alex-portrait.png";
import AlexImgMobile from "public/images/alex-portrait-mobile.png";

import devices from "shared/media";

const Index = () => {
  return (
    <Container>
      <img className="desktopImg" src={AlexImg} />
      <img className="mobileImg" src={AlexImgMobile} />
      <WelcomeTextArea>
        <h1>Hi, I'm Alex</h1>
        <IntroText>
          A front-end developer based in Oslo, Norway. Feel free to browse my
          page!
        </IntroText>
      </WelcomeTextArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }

  .desktopImg {
    display: none;

    @media ${devices.notMobile} {
      display: block;
      max-width: 45%;
      height: 100vh;
    }
  }

  .mobileImg {
    display: none;

    @media ${devices.mobileOnly} {
      display: block;
      height: 40vh;
    }
  }

  @media ${devices.mobileOnly} {
    flex-direction: column;
  }
`;

const IntroText = styled.p`
  font-family: "Roboto Slab", serif;
  font-weight: 300;
`;

const WelcomeTextArea = styled.div`
  flex: 1;
  padding: 1em 2em 0;
`;

export default Index;
