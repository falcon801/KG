import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Box, Database, LayoutGrid, Palette, Rocket, Server } from "lucide-react";
import type { SkillGroup } from "../../data/skills";
import { skillGroups } from "../../data/skills";
import { SkillCategoryCard } from "../skills/SkillCategoryCard";

const icons: Record<SkillGroup["icon"], typeof LayoutGrid> = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  palette: Palette,
  box: Box,
  rocket: Rocket,
};

function previewChips(items: string[], max = 5) {
  return items.slice(0, max);
}

export function StackPreview() {
  return (
    <section className="scroll-mt-28 border-t border-line/25 bg-gradient-to-b from-transparent via-[#17100a]/35 to-transparent py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="inline-flex rounded-md border border-[#c9a45c]/55 bg-[#2a2318]/85 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2bd6f] shadow-[inset_0_0_0_1px_rgba(255,244,223,0.05)]">
              Stack
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#f5ead8] md:text-[2rem] md:leading-tight">
              What I work in
            </h2>
            <p className="mt-3 text-pretty text-base leading-relaxed text-[#b7aa94] md:text-[17px]">
              BI metrics through SQL, plus Domo experience when that stack is in play. Python APIs and dashboards when
              leadership wants the number and the app that backs it.
            </p>
          </div>
          <Link
            to="/skills"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-[#c9a45c]/50 bg-[#2a2318]/85 px-5 py-2.5 text-sm font-semibold text-[#f5ead8] shadow-[inset_0_1px_0_rgba(255,244,223,0.08)] transition hover:border-[#d8bc83]/70 hover:bg-[#342a1b] hover:text-[#fff4df] sm:self-auto"
          >
            Full breakdown
            <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon];
            return (
              <SkillCategoryCard key={g.id} title={g.title} icon={Icon} items={previewChips(g.items)} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
