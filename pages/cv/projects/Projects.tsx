import { useEffect } from "react";
import Cardbox from "components/cardbox/Cardbox";
import { projectsData } from "api/data";
import { useRouter } from "next/router";
import Cardlist from "components/cardlist/Cardlist";

const Projects = () => {
  const { data } = projectsData;

  const router = useRouter();

  useEffect(() => {
    router.push("/cv?slug=projects", undefined, { shallow: true });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <Cardlist>
        {data.map((element: Experience, i) => {
          return <Cardbox key={i} data={element} />;
        })}
      </Cardlist>
    </div>
  );
};

export default Projects;
