import experienceData from "./experienceData";
import projectsData, { sideProjectsData } from "./projectsData";

const hobbyData: PageData = {
  title: "Livet mitt utenfor progging",
  navigationTitle: "hobbies",
  path: "hobbies",
};

const pages: PageData[] = [experienceData, projectsData, hobbyData];

export default pages;
export { experienceData, projectsData, hobbyData, sideProjectsData };
