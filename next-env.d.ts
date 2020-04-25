/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.png";
declare module "*.jpeg";
declare module "*.mov";
declare module "*.mp4";

interface PageData {
  title: string;
  navigationTitle: string;
  path: string;
}

interface Experience {
  title: string;
  jobTitle: string;
  subTitle?: string;
  periode: string;
  description: string;
  buzzwords: string[];
  imgSrc: string;
}

interface Project {
  title: string;
  projectRole: string;
  periode: string;
  description: string;
  buzzwords: string[];
  imgSrc: string;
}

interface ExperienceData extends PageData {
  data: Experience[];
}
