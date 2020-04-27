import SourceTree from "../../components/source-tree/SourceTree";
import SourceTreeCompact from "components/source-tree/SourceTreeCompact";
import styled from "styled-components";
import colors from "shared/colors";
import ProfileHeader from "components/profile-header/ProfileHeader";
import { useContext } from "react";
import { PathContext } from "context/AppContext";
import _find from "lodash/find";
import { RenderPageByPath } from "./utils";
import { NextPage } from "next";
import { useRouter } from "next/router";
import devices from "shared/media";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const { path } = useContext(PathContext);
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Wrapper>
      <DesktopSideBar>
        <ProfileHeader margin={"0 0 30px"} />
        <SourceTree />
      </DesktopSideBar>
      <MobileTopBar>
        <ProfileHeader />
        <SourceTreeCompact />
      </MobileTopBar>
      <Content>
        {/* {path ? RenderPageByPath(path) : RenderPageByPath(slug)} */}
        {RenderPageByPath(slug)}
      </Content>
      {/* <MobileFab>
        <Folder size={24} /> <pre>src</pre>
      </MobileFab> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1680px;
  padding: 0 10px;
  margin: auto;
  background-color: ${colors.background};

  @media ${devices.tabletOnly} {
    flex-direction: column;
    padding: 1em;
  }
`;

const DesktopSideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  border-right: 1px solid ${colors.grey};
  min-height: 100vh;
  min-width: 300px;

  @media ${devices.tabletOnly} {
    display: none;
  }
`;

const MobileTopBar = styled.div`
  @media ${devices.notTablet} {
    display: none;
  }
`;

const Content = styled.div`
  padding: 30px;
  width: 100%;
  @media ${devices.tabletOnly} {
    padding: 0;
  }
`;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
