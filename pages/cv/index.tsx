import SourceTree from "../../components/source-tree/SourceTree";
import styled from "styled-components";
import colors from "shared/colors";
import ProfileHeader from "components/profile-header/ProfileHeader";
import { useContext } from "react";
import { LanguageContext } from "context/AppContext";
import _find from "lodash/find";
import { RenderPageByPath } from "./utils";

const Home = () => {
  const { path } = useContext(LanguageContext);

  return (
    <div>
      <Container>
        <LeftPanel>
          <ProfileHeader margin={"0 0 30px"} />
          <SourceTree />
        </LeftPanel>
        <Vr color={colors.darkGrey} />
        {RenderPageByPath(path)}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`;

const Vr = styled.div`
  border-left: 1px solid ${props => props.color};
  height: 100vh;
`;

export default Home;
