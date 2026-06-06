import { publicUrl } from "../lib/publicUrl";

export type Profile = {
  name: string;
  headline: string;
  introParagraphs: readonly string[];
  teachingNote?: string;
  roleFit: readonly string[];
  contact: {
    email: string;
    phoneDisplay: string;
    tel: string;
    resumeLabel: string;
    resumePdfHref: string;
  };
};

export const profile: Profile = {
  name: "Kelley Groves",

  headline:
    "I build BI metrics, analytics reporting, and internal tools people use in production.",

  introParagraphs: [
    "My background is mostly in manufacturing and operations environments, building reporting systems, KPI dashboards, workflow apps, and internal tools teams actually use day to day.",

    "I've worked on operational reporting, Domo dashboards and dataflows, SQL-based reporting systems, and workflow tooling focused on visibility, tracking, and reducing manual processes across production and operations.",

    "Most of my projects sit somewhere between frontend systems, backend APIs, reporting pipelines, operational metrics, and internal process tooling.",
  ],

  roleFit: [
    "About a year of Domo experience (dashboards and dataflows), plus BI metrics, KPI reporting, and gnarly SQL or Excel heavy pipelines.",
    "Portfolio matches real industries I've worked in: fabrication analytics, shop labor estimation, HR payroll exceptions, safety intake, training compliance. Stuff that ships as live apps, not slideware.",
    "Production delivery means metrics baked into Python and FastAPI backends and Vue or React frontends that people open every week.",
    "I own projects end to end: messy exports and stakeholder chats through shipped milestones, with assumptions written into the UI and README so the next person is not guessing.",
  ],

  contact: {
    email: "groves1801@gmail.com",
    phoneDisplay: "385-581-6161",
    tel: "385-581-6161",
    resumeLabel: "Resume",
    resumePdfHref: publicUrl("Kelley_Groves_Resume.pdf"),
  },
};
