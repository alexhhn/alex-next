import AlexForte from "public/images/alex-forte.jpeg";
import styled from "styled-components";

const ProfileHeader = () => <Container>
    <img src={AlexForte}/>
    <div>
      <strong>ALEX</strong>
      <p>#brogrammer</p>
      <p>#casualgamer</p>
    </div>
</Container>

const Container = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 109px;
    height: 106px;
    object-fit: cover;
    border-radius: 50%;
  }

  p {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default ProfileHeader;