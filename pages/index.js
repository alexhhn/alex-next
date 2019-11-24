import styled from "styled-components";
import AlexImg from "../static/images/alex-portrait.png";

export default () => (
  <div>
    <Title>My First Next.js Page</Title>
    <img src={AlexImg} />
    aewff
  </div>
);

const Title = styled.h1`
  color: red;
`;
