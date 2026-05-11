import { useMemo, useState } from "react";
import { PageHeader } from "../components/layout/PageHeader";
import { DemosStrip } from "../components/sections/DemosStrip";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import { cn } from "../lib/cn";

export function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const ordered = useMemo(() => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)), []);

  const visible = useMemo(
    () => (filter === "featured" ? ordered.filter((p) => p.featured) : ordered),
    [filter, ordered],
  );

  return (
    <main className="flex w-full min-w-0 flex-1 flex-col pb-24 pt-24 sm:pt-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <PageHeader
          eyebrow="Work"
          title="Projects"
          subtitle="Analytics and ops tooling from industries I've worked in: KPI dashboards, metrics pipelines, estimators, compliance stuff people use daily. Open a card for the writeup and embedded demo when there is one."
        />

        <div className="mb-12 flex flex-wrap items-center gap-2">
          {(["all", "featured"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition",
                filter === key
                  ? "border-[#c9a45c]/55 bg-[#2a2318]/80 text-[#fff4df] shadow-[0_0_24px_-12px_rgba(201,164,92,0.45)]"
                  : "border-[#5a4a35]/60 bg-[#18150f]/55 text-[#b7aa94] hover:border-[#c9a45c]/40 hover:bg-[#211d15]/70 hover:text-[#e8dcc8]",
              )}
            >
              {key === "all" ? "All projects" : "Featured"}
            </button>
          ))}
        </div>
      </div>

      <DemosStrip />

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-8 pt-10 sm:px-6 md:pt-12 lg:px-10">
        <div className="grid min-h-0 grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
