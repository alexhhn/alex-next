const experienceData: ExperienceData = {
  title: "Experience",
  navigationTitle: "Experience",
  path: "experience",
  data: [
    {
      title: "Forte Digital",
      imgSrc: "forte-logo.png",
      jobTitle: "Front-end consultant",
      periode: "06.2019 - now",
      description:
        " Forte_ er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og kontinuerlig forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi.",
      buzzwords: ["consulting", "frontend", "sanity", "cms"]
    },
    {
      title: "Visma",
      jobTitle: "Front-end and UX consultant",
      imgSrc: "visma-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        " Visma er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og kontinuerlig forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi..",
      buzzwords: ["consulting", "frontend", "ux", "vue"]
    },
    {
      title: "Intoit",
      jobTitle: "Front-yo and UX consultant",
      imgSrc: "intoit-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        " Visma er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og aefef forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi..",
      buzzwords: ["consulting", "frontend", "ux", "vue"]
    }
  ]
};

const projectsData: ExperienceData = {
  title: "Projects",
  navigationTitle: "Projects",
  path: "projects",
  data: [
    {
      title: "Norges Automobil-Forbund ",
      subTitle: "Forvaltning og modernisering av digitale tjenester innad NAF",
      imgSrc: "forte-logo.png",
      jobTitle: "Front-end consultant",
      periode: "06.2019 - now",
      description:
        " Norges Automobil-Forbund (NAF) er en norsk medlemsorganisasjon som arbeider innenfor samferdsel, hovedsakelig innenfor temaer som trafikksikkerhet, miljøpåvirkninger av transport, fremkommelighet, behov for bedre veier og infrastruktur, avgifter og kollektivtrafikk. Naf er Nordens største interesseorganisasjon med over 500 000 medlemmer. NAF har utviklet mange digitale tjenester over lang tid, og Forte_ har ansvar for å forvalte og videreutvikle disse tjenestene.",
      buzzwords: ["consulting", "frontend", "sanity", "cms"]
    },
    {
      title: "Visma",
      jobTitle: "Front-end and UX consultant",
      imgSrc: "visma-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        " Visma er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og kontinuerlig forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi..",
      buzzwords: ["consulting", "frontend", "ux", "vue"]
    },
    {
      title: "Intoit",
      jobTitle: "Front-yo and UX consultant",
      imgSrc: "intoit-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        " Visma er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og aefef forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi..",
      buzzwords: ["consulting", "frontend", "ux", "vue"]
    }
  ]
};

const hobbyData: PageData = {
  title: "Livet mitt utenfor progging",
  navigationTitle: "Life",
  path: "hobby"
};

const pages: PageData[] = [experienceData, projectsData, hobbyData];

export default pages;
export { experienceData, projectsData, hobbyData };
