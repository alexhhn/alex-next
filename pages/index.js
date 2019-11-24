import styled from "styled-components";
import AlexImg from "../static/images/alex-portrait.png";

export default () => (
  <Container>
    <AlexImgArea />
    <RightArea>
      <h1>Hi, I'm Alex</h1>
      <h2>
        A front-end developer based in Oslo, Norway. Feel free to browse my
        page!
      </h2>
    </RightArea>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: red;
`;

const AlexImgArea = styled.img.attrs({
  src: AlexImg
})`
  width: 45%;
  height: 100vh;
  object-fit: cover;
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
