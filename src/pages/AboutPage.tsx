import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import { profile } from "../data/profile";

import { PageHeader } from "../components/layout/PageHeader";

import { GlassCard } from "../components/ui/GlassCard";



export function AboutPage() {

  return (

    <main className="flex w-full min-w-0 flex-1 flex-col pb-24 pt-24 sm:pt-28">

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

        <PageHeader

          className="mb-8 md:mb-10"

          eyebrow="About"

          title="How I work and what I lean toward."

          subtitle="Manufacturing, operations, reporting, internal tooling, and systems that still help when exports get ugly."

        />



        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-x-14 lg:gap-y-12">

          <div className="min-w-0 space-y-6 text-pretty text-lg leading-relaxed text-[#b7aa94]">

            <p>

              Most of my experience sits around manufacturing, operations, reporting, and internal tooling. I like

              building systems people actually rely on during day to day work, dashboards, reporting views, workflow apps,

              and operational tools that stay useful once the data volume grows and reporting gets messy.

            </p>

            <p>

              I&apos;ve worked with BI metrics, SQL systems, Domo dashboards and dataflows, reporting cleanup, workflow

              tracking, and internal applications tied to real operational processes. A lot of the work ends up being part

              frontend, part backend, part reporting, and part figuring out how to make disconnected processes easier to

              manage.

            </p>

            <p>

              Frontend and backend both show up depending on the problem. React or Vue when the UI matters, Python and

              FastAPI when validation and backend workflows matter, SQL when reporting and operational data need

              structure, and Linux hosting when the application actually needs to stay running outside development.

            </p>

            {profile.teachingNote ? (

              <p>{profile.teachingNote}</p>

            ) : null}

          </div>



          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">

            <GlassCard className="px-8 py-9 sm:px-10 sm:py-10" hover={false}>

              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8bc83]">

                How I like to work

              </p>

              <ul className="mt-7 space-y-6 text-[15px] leading-relaxed text-[#d8c6a6] sm:text-base">

              {[

                {

                  dot: "bg-[#c9a45c]",

                  body:

                    "Usually starts with whatever people are currently fighting: spreadsheet drift, ugly exports, double entry, missing visibility, or nobody trusting the numbers anymore.",

                },

                {

                  dot: "bg-[#8fa36d]",

                  body:

                    "I like getting something usable in front of people early instead of disappearing for weeks polishing edge cases nobody asked for.",

                },

                {

                  dot: "bg-[#c9a45c]",

                  body:

                    "Most of the work ends up being part reporting, part cleanup, part UI, and part figuring out where the actual bottleneck is.",

                },

                {

                  dot: "bg-[#9c7048]",

                  body:

                    "I care a lot about making systems easier to maintain once they've been running for months, not just making them look good on day one.",

                },

                {

                  dot: "bg-[#b87967]",

                  body:

                    "Good reporting matters. So does making sure someone new can step in without needing a 45 minute explanation from the one person who understands the process.",

                },

                {

                  dot: "bg-[#8fa36d]",

                  body:

                    "I also like keeping frontend, backend, reporting, and hosting connected instead of treating them like separate worlds.",

                },

              ].map((item) => (

                  <li key={item.body} className="flex gap-4">

                    <span className={`mt-[0.35rem] h-2 w-2 shrink-0 rounded-full ring-2 ring-white/10 ${item.dot}`} aria-hidden />

                    <span className="min-w-0">{item.body}</span>

                  </li>

                ))}

              </ul>

            </GlassCard>

          </div>

        </div>



        <div className="mt-14 grid gap-6 sm:grid-cols-3">

          {[

            {

              title: "Reporting & operational systems",

              body: "BI metrics, Domo dashboards and dataflows, SQL, KPI visibility, imports and exports, and internal apps tied to how teams actually run day to day. Most of it sits in manufacturing and operations contexts where reporting volume grows fast.",

            },

            {

              title: "Frontend, backend, and workflow tooling",

              body: "React or Vue when the UI matters, Python and FastAPI when validation and workflows matter, SQL when operational data needs structure. Reporting, cleanup, dashboards, and process visibility usually show up together.",

            },

            {

              title: "Hosting, deployment, and systems",

              body: "Linux-hosted apps, SSH and SFTP, internal tools that need to stay running outside dev. Software plus the environment around it: deployment, integrations, and keeping things maintainable after months in production.",

            },

          ].map((card) => (

            <GlassCard key={card.title} className="p-6 sm:p-7" hover={false}>

              <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d8bc83]">

                {card.title}

              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#b7aa94]">{card.body}</p>

            </GlassCard>

          ))}

        </div>



        <GlassCard className="mt-14 p-8 sm:p-9" hover={false}>

          <p className="font-mono text-xs uppercase tracking-wider text-[#d8bc83]">How this maps to data &amp; BI roles</p>

          <ul className="mt-6 space-y-4 text-base leading-relaxed text-[#d8c6a6]">

            {profile.roleFit.map((line) => (

              <li key={line} className="flex gap-3">

                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fa36d]/80" />

                {line}

              </li>

            ))}

          </ul>

        </GlassCard>



        <div className="mt-16 flex flex-wrap gap-4">

          <Link

            to="/projects"

            className="inline-flex items-center gap-2 rounded-md border border-[#5a4a35]/70 bg-[#18150f]/70 px-5 py-2.5 text-sm font-semibold text-[#e8dcc8] transition hover:border-[#c9a45c]/50 hover:bg-[#211d15]/80 hover:text-[#fff4df]"

          >

            See projects

            <ArrowRight className="h-4 w-4" aria-hidden />

          </Link>

          <Link

            to="/contact"

            className="inline-flex items-center gap-2 rounded-md border border-[#5a4a35]/60 bg-[#18150f]/55 px-5 py-2.5 text-sm font-semibold text-[#d8c6a6] transition hover:border-[#c9a45c]/45 hover:bg-[#211d15]/70 hover:text-[#fff4df]"

          >

            Get in touch

            <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />

          </Link>

        </div>

      </div>

    </main>

  );

}

