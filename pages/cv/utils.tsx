import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import { experienceData, projectsData, hobbyData } from "api/data";

const RenderPageByPath = (path: string) => {
  switch (path) {
    case experienceData.path:
      return <Experience />;
    case projectsData.path:
      return <Projects />;
    default:
      return <h1>Default path</h1>;
  }
};

export { RenderPageByPath };
