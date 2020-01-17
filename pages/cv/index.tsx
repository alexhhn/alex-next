import SourceTree from "../../components/source-tree/SourceTree";
import { NextPage } from "next";
import styled from "styled-components";
import colors from "constants/colors"
import ProfileHeader from "components/profile-header/ProfileHeader";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Container>
    <LeftPanel>
      {/* <ProfileHeader/> */}
      <SourceTree />
    </LeftPanel>
    <Vr color={colors.darkGrey}/>
    <h1>Title</h1>
  </Container>
);

const Container = styled.div`
  display: flex;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
`

const Vr = styled.div`
  border-left: 1px solid ${props => props.color};
  height: 100vh;
`

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;

 