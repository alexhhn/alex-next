import AlexForte from "public/images/alex-forte.jpeg";
import styled from "styled-components";

interface Props {
  margin?: string;
}

const ProfileHeader = ({ margin }: Props) => (
  <Container margin={margin}>
    <img src={AlexForte} />
    <div>
      <strong>ALEX</strong>
      <pre>#brogrammer</pre>
      <pre>#casualgamer</pre>
    </div>
  </Container>
);

const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : "0")};

  img {
    width: 109px;
    height: 106px;
    object-fit: cover;
    border-radius: 50%;
  }

  pre {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default ProfileHeader;
