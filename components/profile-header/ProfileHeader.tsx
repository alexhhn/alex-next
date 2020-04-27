import AlexForte from "public/images/alex-forte.jpeg";

import styled from "styled-components";
import devices from "shared/media";

interface Props {
  margin?: string;
}

const ProfileHeader = ({ margin }: Props) => (
  <Container margin={margin}>
    <img src={AlexForte} />
    <div>
      <strong>ALEX</strong>
      <code>#brogrammer</code>
      <code>#casualgamer</code>
    </div>
  </Container>
);

const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "0")};

  img {
    width: 109px;
    height: 106px;
    object-fit: cover;
    border-radius: 50%;
  }

  code {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 0 20px 14px;

    @media ${devices.laptopOnly} {
      margin: 0 0 20px 30px;
    }
  }
`;

export default ProfileHeader;
