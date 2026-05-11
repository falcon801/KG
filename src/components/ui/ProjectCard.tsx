import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";

import type { ProjectMeta } from "../../data/projects";

import { cn } from "../../lib/cn";

import { SkillPill } from "./SkillPill";

import { ProjectCardEmbed } from "./ProjectCardEmbed";

const projectCardShellClass = cn(

  "group relative isolate flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-[#17120c]/96 p-0",

  "shadow-[0_18px_42px_-30px_rgba(0,0,0,0.78),inset_0_0_0_1px_rgba(201,164,92,0.22)] transition duration-300",

  "hover:-translate-y-0.5 hover:bg-[#211a10]/96 hover:shadow-[0_24px_52px_-30px_rgba(0,0,0,0.88),inset_0_0_0_1px_rgba(201,164,92,0.32)]",

);



export function ProjectCard({ project, index }: { project: ProjectMeta; index: number }) {

  return (

    <motion.div

      initial={{ opacity: 0, y: 28 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, margin: "-80px" }}

      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}

      className="h-full min-h-0"

    >

      <div className={projectCardShellClass}>

        <div

          aria-hidden

          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#c9a45c]/[0.08] via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100"

        />



        <div className="relative z-[2] flex min-h-0 flex-1 flex-col">

          <ProjectCardEmbed project={project} />



          <div className="relative flex min-h-0 flex-1 flex-col border-t border-[#5a4a35]/38 bg-[#17120c]/92 px-5 pb-6 pt-5 shadow-[inset_0_1px_0_0_rgba(201,164,92,0.06)] sm:px-6 sm:pb-7 sm:pt-6">

            <div className="flex items-start justify-between gap-3">

              <div className="min-w-0">

                <h3 className="text-lg font-semibold tracking-tight text-[#f5ead8] sm:text-xl">{project.title}</h3>

                <p className="mt-1.5 text-sm font-medium leading-snug text-[#d8c6a6]">{project.problemOneLine}</p>

              </div>

              <Link

                to={`/projects/${project.slug}`}

                aria-label={`Open case study: ${project.title}`}

                className="hidden size-9 shrink-0 items-center justify-center rounded-md border border-[#c9a45c]/28 bg-[#2a2318]/72 text-[#d8bc83] transition group-hover:border-[#c9a45c]/55 group-hover:bg-[#342a1b] group-hover:text-[#fff4df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a45c]/60 sm:inline-flex"

              >

                <ArrowUpRight className="h-5 w-5" aria-hidden />

              </Link>

            </div>



            <p className="mt-3 line-clamp-3 min-h-0 text-sm leading-relaxed text-[#a99b85] sm:line-clamp-4">{project.whatBuilt}</p>



            <div className="mt-auto flex min-h-0 flex-col gap-3 pt-4">

              <div className="flex flex-wrap gap-2">

                {project.stack.map((s) => (

                  <SkillPill key={s}>{s}</SkillPill>

                ))}

              </div>

              <Link

                to={`/projects/${project.slug}`}

                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md font-mono text-xs font-semibold text-[#d8bc83] transition hover:text-[#fff4df]"

              >

                Case study

                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  );

}

