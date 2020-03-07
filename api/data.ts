interface PageData {
  title: string;
  navigationTitle: string;
  path: string;
}

const experienceData: PageData = {
  title: "Experience",
  navigationTitle: "Experience",
  path: "experience"
};

const projectsData: PageData = {
  title: "Projects",
  navigationTitle: "Projects",
  path: "projects"
};

const hobbyData: PageData = {
  title: "Livet mitt utenfor progging",
  navigationTitle: "Life",
  path: "hobby"
};

const pages: PageData[] = [experienceData, projectsData, hobbyData];

export default pages;
export { experienceData, projectsData, hobbyData };
