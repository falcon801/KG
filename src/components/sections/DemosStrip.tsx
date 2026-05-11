import { ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";
import { projectCardEmbedHref } from "../ui/ProjectCardEmbed";

const featuredDemos = [...projects]
  .sort((a, b) => Number(b.featured) - Number(a.featured))
  .filter((p) => p.featured);

export function DemosStrip() {
  return (
    <section id="demos" aria-label="Live demos" className="scroll-mt-28 border-y border-[#3a3227]/45 bg-[#120f0a]/28 py-9 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-lg font-semibold tracking-tight text-[#f5ead8] md:text-xl">Live demos</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#b7aa94]">
          Static demos open in a fresh tab. Story and tradeoffs stay on the project pages underneath.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {featuredDemos.map((p) => (
            <li key={p.slug}>
              <a
                href={projectCardEmbedHref(p)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-[#c9a45c]/32 bg-[#1b150d]/82 px-4 py-2 text-sm font-medium text-[#e8dcc8] shadow-[inset_0_1px_0_rgba(255,244,223,0.05)] backdrop-blur-sm transition hover:border-[#c9a45c]/58 hover:bg-[#2a2318]/90 hover:text-[#fff4df]"
              >
                {p.title}
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-50 transition group-hover:opacity-90" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
