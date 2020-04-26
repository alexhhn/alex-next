import styled from "styled-components";
import AlexImg from "public/images/alex-portrait.png";
import AlexImgMobile from "public/images/alex-portrait-mobile.png";
import devices from "shared/media";
import SourceTree from "components/source-tree/SourceTree";
import colors from "shared/colors";

const Index = () => {
  return (
    <Wrapper>
      <img className="desktopImg" src={AlexImg} />
      <img className="mobileImg" src={AlexImgMobile} />
      <WelcomeTextArea>
        <h1>Hi, I'm Alex</h1>
        <IntroText>
          A front-end developer based in Oslo, Norway. Feel free to browse my
          page!
        </IntroText>
        <hr />
        <SourceTree />
      </WelcomeTextArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};

  img {
    object-fit: cover;
  }

  .desktopImg {
    display: none;

    @media ${devices.mobile} {
      display: block;
      max-width: 45%;
      height: 100vh;
    }
  }

  .mobileImg {
    display: none;

    @media ${devices.mobileOnly} {
      display: block;
      height: 45vh;
    }
  }

  @media ${devices.mobileOnly} {
    flex-direction: column;
  }
`;

const IntroText = styled.p`
  font-size: 24px;

  @media ${devices.tabletOnly} {
    &:before {
      content: "-";
      margin-left: -25px;
      padding-right: 15px;
    }
  }
`;

const WelcomeTextArea = styled.div`
  flex: 1;
  padding: 0 60px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
  }

  hr {
    margin: 30px 0 60px;
  }

  @media ${devices.laptopOnly} {
    padding: 30px 50px;
  }
`;

export default Index;
