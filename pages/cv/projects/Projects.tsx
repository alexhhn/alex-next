import { useEffect } from "react";
import Cardbox from "components/cardbox/Cardbox";
import { projectsData, sideProjectsData } from "api/data";
import { useRouter } from "next/router";
import Cardlist from "components/cardlist/Cardlist";
import styled from "styled-components";

const Projects = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/cv?slug=projects", undefined, { shallow: true });
  }, []);

  return (
    <Wrapper>
      <h1>Projects</h1>
      <Cardlist>
        {projectsData.data.map((element: Experience, i) => {
          return <Cardbox key={i} data={element} />;
        })}
      </Cardlist>
      <SubHeader>Hobby projects</SubHeader>
      <Cardlist>
        {sideProjectsData.data.map((element: Experience, i) => {
          return <Cardbox key={i} data={element} />;
        })}
      </Cardlist>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SubHeader = styled.div`
  font-size: 1.5em;
  margin: 1.5em 0.25em 1em;
`;

export default Projects;
