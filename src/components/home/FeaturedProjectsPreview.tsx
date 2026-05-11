import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import { projects } from "../../data/projects";

import { ProjectCard } from "../ui/ProjectCard";



const preview = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)).slice(0, 6);



export function FeaturedProjectsPreview() {

  return (

    <section className="scroll-mt-28 border-t border-line/25 py-16 md:py-20 lg:py-24">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            <p className="inline-flex rounded-md border border-[#c9a45c]/30 bg-[#2a2318]/70 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#d8bc83] backdrop-blur-sm">

              Portfolio

            </p>

            <h2 className="mt-4 max-w-xl text-balance text-2xl font-bold tracking-tight text-[#f5ead8] md:text-3xl">

              Industry analytics &amp; internal tools

            </h2>

            <p className="mt-3 max-w-lg text-[#b7aa94]">

              Fabrication, shop ops, HR, safety: KPI dashboards, metrics pipelines, and workflows built for people on

              the floor and in the office, not for a pitch deck.

            </p>

          </div>

          <Link

            to="/projects"

            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#5a4a35]/70 bg-[#18150f]/70 px-5 py-2.5 text-sm font-semibold text-[#e8dcc8] transition hover:border-[#c9a45c]/50 hover:bg-[#211d15]/80 hover:text-[#fff4df]"

          >

            All projects

            <ArrowRight className="h-4 w-4" aria-hidden />

          </Link>

        </div>



        <div className="mt-12 grid min-h-0 grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">

          {preview.map((p, i) => (

            <ProjectCard key={p.slug} project={p} index={i} />

          ))}

        </div>

      </div>

    </section>

  );

}

