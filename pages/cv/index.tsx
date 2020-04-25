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
        {path ? RenderPageByPath(path) : RenderPageByPath(slug)}
      </Content>
      {/* <MobileFab>
        <Folder size={24} /> <pre>src</pre>
      </MobileFab> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  @media ${devices.mobileOnly} {
    flex-direction: column;
    padding: 24px;
  }
`;

const DesktopSideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background-color: ${colors.background};
  border-right: 1px solid ${colors.grey};
  min-height: 100vh;

  @media ${devices.mobileOnly} {
    display: none;
  }
`;

const MobileTopBar = styled.div`
  @media ${devices.notMobile} {
    display: none;
  }
`;

const MobileFab = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.lightBackground};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 12px;
  bottom: 30px;

  pre {
    margin: 0;
  }

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Content = styled.div`
  padding: 40px;

  @media ${devices.mobileOnly} {
    padding: 0;
  }
`;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;