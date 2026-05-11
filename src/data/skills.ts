export type SkillGroup = {

  id: string;

  title: string;

  icon: "layout" | "server" | "database" | "palette" | "box" | "rocket";

  items: string[];

};



export const skillGroups: SkillGroup[] = [

  {

    id: "frontend",

    title: "Frontend",

    icon: "layout",

    items: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Chart.js",
      "Jinja templates",
    ],

  },

  {

    id: "backend",

    title: "Backend and APIs",

    icon: "server",

    items: [
      "Python",
      "FastAPI",
      "Uvicorn",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "Jinja2",
      "Import validation",
      "Session authentication",
      "Server-rendered workflows",
    ],

  },

  {

    id: "data-bi",

    title: "Data, BI, and reporting",

    icon: "database",

    items: [

      "Domo experience, one year of exp with dashboards, ETLs and dataflows",

      "BI metrics and KPI reporting",

      "SQL and relational databases",

      "Snowflake",

      "MySQL",

      "PostgreSQL",

      "SQLite",

      "Supabase SQL",

      "HeidiSQL",

      "Jupyter notebooks",

      "CSV and Excel pipelines",

      "OpenPyXL",

      "Reporting dashboards",

      "Data cleanup and validation",

    ],

  },

  {

    id: "ui-ux",

    title: "UI and UX",

    icon: "palette",

    items: [

      "Dashboard systems",

      "Workflow focused UI",

      "Mobile first forms",

      "Admin interfaces",

      "Dense operational tables",

      "Error and loading states",

    ],

  },

  {

    id: "game-hosted",

    title: "Game and hosted systems",

    icon: "box",

    items: [

      "Lua scripting",

      "FiveM integrations",

      "Linux hosting",

      "SSH and SFTP workflows",

      "Browser overlays and UI systems",

      "Blender environment work",

    ],

  },

  {

    id: "tools-deploy",

    title: "Tools and deployment",

    icon: "rocket",

    items: [

      "Git version control",

      "Static site hosting",

      "Vite build pipelines",

      "Linux server management",

      "Dedicated server setup",

      "Session and process supervision",

    ],

  },

];

