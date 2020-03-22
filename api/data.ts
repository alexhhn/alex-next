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
        "Forte_ er et konsulentselskap med kompetanse innen leveranseledelse, rådgivning og konseptutvikling, UX/design, utvikling og kontinuerlig forbedring av løsninger i drift. Som IT konsulent hos Forte_ jobber jeg med spennende prosjekter ved hjelp av moderne front-end teknologi.",
      buzzwords: ["konsulent", "frontend", "cms"]
    },
    {
      title: "Intoit",
      jobTitle: "Daglig leder",
      imgSrc: "intoit-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        "I November 2017 lanserte vi Intoit - en crowdsource-basert læringsplattform der fellesskapet av studenter selv kan quizze, diskutere, moderere og bidra til relevant innhold fra studiet. Tjennesten er tilgjengelig på www.intoit.io.",
      buzzwords: ["administrasjon", "startup", "edtech", "frontend"]
    },
    {
      title: "Visma Consulting",
      jobTitle: "Front-end and UX consultant",
      imgSrc: "visma-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        "Som konsulent hos Visma jobbet jeg med spennende prosjekter hvor jeg hadde ansvar i både front-end og UX. I tillegg var jeg aktiv i mange faggrupper hvor jeg holdte jevnlig presentasjoner/meet-ups",
      buzzwords: ["konsulent", "frontend", "ux", "faggruppe", "meetup"]
    },
    {
      title: "Ace Education",
      jobTitle: "Front-end utvikler",
      imgSrc: "ace-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        "Ace Education AS produserer og markedsfører digitale læringstjenester for studenter i høyere utdanning. Jeg jobbet som styremedlem og frontend-utvikler.",
      buzzwords: ["startup", "frontend", "ux", "faggruppe", "meetup"]
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
      imgSrc: "naf-logo.png",
      jobTitle: "Front-end utvikler",
      periode: "06.2019 - now",
      description:
        " Norges Automobil-Forbund (NAF) er en norsk medlemsorganisasjon som arbeider innenfor samferdsel, hovedsakelig innenfor temaer som trafikksikkerhet, miljøpåvirkninger av transport, fremkommelighet, behov for bedre veier og infrastruktur, avgifter og kollektivtrafikk. Naf er Nordens største interesseorganisasjon med over 500 000 medlemmer. NAF har utviklet mange digitale tjenester over lang tid, og Forte_ har ansvar for å forvalte og videreutvikle disse tjenestene",
      buzzwords: ["consulting", "frontend", "sanity", "cms"]
    },
    {
      title: "Nye Munchmuseet",
      jobTitle: "Front-end utvikler",
      imgSrc: "munch-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        "Oslo kommune bygger et nytt museum i Bjørvika for kunstsamlingen til Edvard Munch. Det nye museet skal bli et signalbygg i Oslo som skal huse kommunens fantastiske Munchsamling på nærmere 28 000 kunstverk. Munchmuseet.no blir bygd på nytt som et CMS system ved hjelp av Episerver og React.",
      buzzwords: ["consulting", "frontend", "ux", "vue"]
    },
    {
      title: "Dolly",
      jobTitle: "Front-end and UX utvikler",
      imgSrc: "nav-logo.png",
      periode: "07.2018 - 05.2019",
      description:
        "Hos Arbeids- og velferdsforvaltningen i Norge (NAV) krever det et stort behov for testdata. Derfor ble Dolly - en web-applikasjon for å generere og håndtere disse datatene etter egne kriterier/egenskaper utviklet",
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
