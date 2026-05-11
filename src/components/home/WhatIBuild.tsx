import { GlassCard } from "../ui/GlassCard";

const CARE_ABOUT = [
  "Building things people can actually use during a normal workday.",
  "Keeping reports readable after the data gets bigger and messier.",
  "Cutting down duplicate entry, manual cleanup, and spreadsheet drift.",
  "Making workflows easier to maintain after the first version ships.",
  "Connecting the UI, backend, SQL, and reporting instead of treating them like separate problems.",
  "Leaving systems clear enough that someone else can step in later.",
  "Catching bad imports and reporting issues before they turn into bigger cleanup jobs.",
  "Keeping dashboards focused, useful, and easy to trust.",
] as const;

const WHY_HIRE_ME = [
  "I care about the real workflow, not just the screen. I want to understand what people are fighting before I build around it.",
  "I can move between reporting, SQL, frontend, backend, and hosting, which helps when the problem does not fit neatly in one box.",
  "I am motivated, practical, and comfortable learning what the job needs. I like getting useful work in front of people and improving it from there.",
] as const;

export function WhatIBuild() {
  return (
    <section className="scroll-mt-28 border-t border-line/25 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#f5ead8] md:text-3xl lg:text-4xl">
            How I work and what I tend to build
          </h2>

          <p className="mt-5 text-pretty text-base leading-relaxed text-[#b7aa94] md:text-lg">
            Most of my work ends up somewhere between reporting, operational tooling, internal apps, dashboards, workflow
            systems, and fixing processes that became hard to manage once teams or data grew.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <GlassCard className="flex h-full flex-col p-6 sm:p-7" hover={false}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d8bc83]">
              Reporting &amp; operational systems
            </p>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-[#d8c6a6]">
              <p>
                Most of my experience is around reporting, BI metrics, dashboards, workflow apps, and operational tooling
                used in manufacturing and day to day business environments.
              </p>
              <p>
                I&apos;ve worked with Domo dashboards and dataflows, SQL systems, reporting cleanup, KPI visibility,
                imports and exports, and internal applications focused on making operational information easier to track
                and actually use.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="flex h-full flex-col p-6 sm:p-7" hover={false}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d8bc83]">
              Frontend, backend, and workflow tooling
            </p>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-[#d8c6a6]">
              <p>
                I usually work across both frontend and backend depending on what the project needs. React or Vue when
                the UI matters, Python and FastAPI when validation and backend workflows matter, and SQL when reporting
                and operational data need structure.
              </p>
              <p>
                Most projects involve some mix of reporting, workflows, cleanup, imports, dashboards, and process
                visibility.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="flex h-full flex-col p-6 sm:p-7" hover={false}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d8bc83]">
              Hosting, deployment, and systems
            </p>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-[#d8c6a6]">
              <p>
                I&apos;m comfortable working with Linux hosted applications, SSH and SFTP workflows, hosted internal
                tools, server setup, and applications that need to stay running outside development.
              </p>
              <p>
                A lot of projects end up involving both software and the environment around it, hosting, deployment,
                integrations, or operational maintenance.
              </p>
            </div>
          </GlassCard>
        </div>

        <div className="mt-16 grid gap-8 md:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:items-start">
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-[#f5ead8] md:text-2xl">
              What I care about when building systems
            </h3>

            <ul className="mt-6 space-y-3 text-pretty text-base leading-relaxed text-[#d8c6a6] md:text-[17px]">
              {CARE_ABOUT.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8fa36d]/80" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <GlassCard className="p-6 sm:p-7" hover={false}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d8bc83]">
              Why hire me?
            </p>
            <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-[#d8c6a6]">
              {WHY_HIRE_ME.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
