import SourceTree from "../../components/source-tree/SourceTree";
import styled from "styled-components";
import colors from "shared/colors";
import ProfileHeader from "components/profile-header/ProfileHeader";
import { useContext } from "react";
import { LanguageContext } from "context/AppContext";
import _find from "lodash/find";
import { RenderPageByPath } from "./utils";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const { path } = useContext(LanguageContext);
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Wrapper>
      <Sidebar>
        <ProfileHeader margin={"0 0 30px"} />
        <SourceTree />
      </Sidebar>
      <Content>
        {path ? RenderPageByPath(path) : RenderPageByPath(slug)}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background-color: ${colors.background};
  border-right: 1px solid ${colors.grey};
  min-height: 100vh;
`;

const Content = styled.div`
  padding: 40px;
`;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
