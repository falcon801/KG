export type ProjectMeta = {

  slug: string;

  title: string;

  tagline: string;

  featured: boolean;

  embedEntry?: string;

  cardImage?: string;

  problemOneLine: string;

  problem: string;

  whatBuilt: string;

  keyFeatures: string[];

  stack: string[];

  outcome: string;

};



export const projects: ProjectMeta[] = [

  {

    slug: "asset-tracker",

    title: "IT asset and assignment tracker",

    tagline: "Centralized assets, assignments, renewals, and ownership in one app.",

    featured: true,

    problemOneLine:

      "Tracking hardware, assignments, renewals, and ownership across spreadsheets became difficult to audit and maintain.",

    problem:

      "Tracking hardware, assignments, renewals, and ownership across spreadsheets became difficult to audit and maintain.",

    whatBuilt:

      "Centralized assets, assignments, categories, and software renewals into a single application with searchable history and status tracking. Built with import validation, assignment history, filtering, and reporting views designed around real operational usage.",

    keyFeatures: [

      "Searchable history and status tracking",

      "Import validation",

      "Assignment history and filtering",

      "Reporting views for operational usage",

    ],

    stack: ["FastAPI", "SQLAlchemy", "SQLite", "Jinja2"],

    outcome:

      "Single source for audits and assignments with imports that fail loudly instead of poisoning downstream tabs.",

  },

  {

    slug: "calculate-times",

    title: "Shop labor estimator",

    tagline: "Shop labor estimator with configurable rates, live totals, and exports that match the floor process.",

    featured: true,

    problemOneLine:
      "Labor and quoting metrics lived in spreadsheets that were difficult to maintain consistently across teams.",

    problem: "Estimator logic lived in spreadsheets that were difficult to maintain consistently across teams.",

    whatBuilt:

      "Built a browser-based estimator tied to configurable rates, live recalculation, and export flows that matched existing operational processes. Versioned configuration helped keep calculations consistent and easier to audit.",

    keyFeatures: [

      "Configurable rates with live recalculation",

      "Exports aligned to existing processes",

      "Versioned configuration for audits",

    ],

    stack: ["FastAPI", "Pydantic", "OpenPyXL", "Jinja2"],

    outcome: "Same math everyone recognizes, with fewer forked sheets and paste accidents.",

  },

  {

    slug: "codasite",

    title: "Fabrication quality dashboard",

    tagline: "Fabrication exports turned into KPI trends, charts, and supervisor-ready summaries instead of pivot nights.",

    featured: true,

    problemOneLine:

      "Large export datasets were technically accurate but difficult to turn into readable operational reporting and leadership-ready visuals.",

    problem:

      "Large export datasets were technically accurate but difficult to turn into readable operational reporting.",

    whatBuilt:

      "Built an internal dashboard for ingesting exports, cleaning labels, surfacing KPI trends with Chart.js visualizations, and simplifying reporting into readable operational summaries for supervisors. Focused on visibility, filtering, drill-downs, and reducing time spent manually cleaning reports.",

    keyFeatures: [

      "Ingest and label cleanup",

      "KPI trends and summaries",

      "Filtering and drill-downs",

      "Less manual report cleanup",

    ],

    stack: ["FastAPI", "Tailwind", "Chart.js"],

    outcome: "Supervisors saw movement in the data without rebuilding pivot homework every morning.",

  },

  {

    slug: "front-desk-tracker",

    title: "Front desk interaction log",

    tagline: "Walk ins and calls with notes the next person can read.",

    featured: false,

    problemOneLine: "Paper scraps and inboxes meant handoffs turned into guessing games.",

    problem:

      "Walk ins, pickups, and scheduling calls landed everywhere at once. Texts, sticky notes, and whatever lived in the shift lead's head. The next desk rebuilt story from memory instead of facts.",

    whatBuilt:

      "Vue app with list plus detail, tight channel and outcome pickers, tables sized for throughput not demos. API stays boring so production upgrades stay small.",

    keyFeatures: [

      "Interaction stream with quick filters",

      "Detail pane built for handoff sentences",

      "Create flow that refuses empty summaries",

    ],

    stack: ["Vue 3", "TypeScript", "Vite", "PrimeVue"],

    outcome: "Repeat visitors stopped getting different answers. Reporting turned into a query instead of crowd sourcing memory.",

  },

  {

    slug: "hr-time-tracker",

    title: "Payroll exception workbench",

    tagline: "Imported punch exceptions grouped so HR clears lists instead of chasing tabs.",

    featured: false,

    problemOneLine: "HRIS dumps spat rows faster than context stayed attached.",

    problem:

      "Each import stacked exceptions for missed punches, long breaks, duplicates. Every line needed employee history and a supervisor name without flipping six tabs.",

    whatBuilt:

      "FastAPI queue with server rendered rows, filters that survive reloads, employee and department columns frozen where eyes land first. State changes stay logged because arguing later without breadcrumbs wastes everyone's afternoon. Database matches whatever Postgres constraints IT handed over.",

    keyFeatures: ["Open versus cleared lanes", "Row actions that assume interruptions", "Import summaries when batches surprise people"],

    stack: ["FastAPI", "Jinja2", "Python", "Postgres"],

    outcome: "Fewer round trips to supervisors. Tickets cited facts instead of vibes.",

  },

  {

    slug: "safety-qr",

    title: "Mobile safety intake",

    tagline: "Near miss intake under a minute on a beat up phone.",

    featured: false,

    problemOneLine: "Paper slowed reporting and aggregation became transcription duty.",

    problem:

      "Near misses on carbon forms meant low completion and somebody typing rows twice. Field folks needed a guided flow that tolerates gloves and glare.",

    whatBuilt:

      "Multi step intake with plain language prompts, department and area pickers, optional identity, attachment hooks left ready for the heavier deployment. Progressive enhancement keeps bare phones usable.",

    keyFeatures: [

      "Stepper flow that refuses giant walls of fields",

      "Anonymous path stays default",

      "Confirmation token people can screenshot",

    ],

    stack: ["HTML", "CSS", "Progressive enhancement"],

    outcome: "Reports landed in week instead of month end recap fiction. Sort by area without retyping carbon.",

  },

  {

    slug: "trainings-tracker",

    title: "Training compliance matrix",

    tagline: "Roster by course grid supervisors defend before audits arrive.",

    featured: false,

    problemOneLine: "LMS exports and spreadsheets argued about who stayed current.",

    problem:

      "Forklift and lockout renewals needed visibility before somebody gets hurt. Spreadsheets forked from roster truth every time HR tweaked exports late Friday.",

    whatBuilt:

      "Internal roster imports, course catalog, per cell completions with timestamps, due logic spelled out in code so nobody trusts conditional formatting alone. Auth gated views match how managers versus admins behave in prod.",

    keyFeatures: ["Matrix faster than scrolling ninety slides", "Per cell toggles with fatigue friendly spacing", "Import receipts when auditors ask who loaded what"],

    stack: ["FastAPI", "SQLite", "Jinja2", "Session auth"],

    outcome: "Gaps surfaced during standups instead of post audit panic buys.",

  },

  {

    slug: "t-track-calc",

    title: "Alternate estimator profile",

    tagline: "Second product line rates without forking the whole shell people trained on.",

    featured: false,

    problemOneLine: "One curve could not cover two product lines without hacked cells.",

    problem:

      "Second line needed different install and saw assumptions. Sharing one workbook invited profile slips where somebody edited half a sheet and hoped pricing matched reality.",

    whatBuilt:

      "Parallel shell with its own rates file, labels, and QA checklist while reuse stays intentional so training carries over. Export columns stay tracker shaped so downstream tabs stop improvising.",

    keyFeatures: ["Rate decks isolated per product line", "Same UX muscle memory", "Exports still marry tracker columns"],

    stack: ["FastAPI", "OpenPyxl", "Jinja2"],

    outcome: "Pick the profile before quoting instead of editing half a workbook under pressure.",

  },

];



export function projectBySlug(slug: string): ProjectMeta | undefined {

  return projects.find((p) => p.slug === slug);

}

