import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Hobby from "./Hobby/Hobby";
import { experienceData, projectsData, hobbyData } from "api/data";

const RenderPageByPath = (path: string | string[]) => {
  switch (path) {
    case experienceData.path:
      return <Experience />;
    case projectsData.path:
      return <Projects />;
    case hobbyData.path:
      return <Hobby />;
    default:
      return <h1>Default path</h1>;
  }
};

export { RenderPageByPath };
