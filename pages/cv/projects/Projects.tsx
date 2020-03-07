import Cardbox from "components/cardbox/Cardbox";
import { projectsData } from "api/data";

const Projects = () => {
  const { data } = projectsData;
  return (
    <div>
      <h1>Projects</h1>
      {data.map((element: Experience, i) => {
        return <Cardbox key={i} data={element} />;
      })}
    </div>
  );
};

export default Projects;
