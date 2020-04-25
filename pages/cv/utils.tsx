import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Hobby from "./hobby/Hobby";
import Algorithms from "./algorithms/Algorithms";
import { experienceData, projectsData, hobbyData } from "api/data";

const RenderPageByPath = (path: string | string[]) => {
  switch (path) {
    case experienceData.path:
      return <Experience />;
    case projectsData.path:
      return <Projects />;
    case hobbyData.path:
      return <Hobby />;
    case 'algorithms':
      return <Algorithms />;
    default:
      return <h1>Default path</h1>;
  }
};

export { RenderPageByPath };
