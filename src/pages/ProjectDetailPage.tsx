import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projectBySlug } from "../data/projects";
import { GlassCard } from "../components/ui/GlassCard";
import { ProjectDetailEmbed } from "../components/ui/ProjectCardEmbed";
import { SkillPill } from "../components/ui/SkillPill";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = useMemo(() => (slug ? projectBySlug(slug) : undefined), [slug]);

  if (!project || !slug) {
    return (
      <main className="mx-auto w-full min-w-0 max-w-3xl flex-1 px-4 py-32 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-white">Not found</h1>
        <p className="mt-3 text-slate-400">That project slug is not in this portfolio.</p>
        <Link to="/projects" className="mt-8 inline-flex font-mono text-sm font-medium text-slate-300 hover:text-slate-200">
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full min-w-0 flex-1 pb-24 pt-24 sm:pt-28">
      <div className="mx-auto w-full min-w-0 max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm font-medium text-slate-400 transition hover:text-slate-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-400/90">Case study</p>
          <h1 className="mt-4 max-w-4xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-slate-400">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <SkillPill key={s}>{s}</SkillPill>
            ))}
          </div>
          <GlassCard className="mt-10 p-6 sm:p-8" hover={false}>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400/90">At a glance</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{project.tagline}</p>
          </GlassCard>
        </motion.div>

        <div className="mt-16 grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 space-y-6">
            {[
              ["Problem", project.problem],
              ["What I built", project.whatBuilt],
              ["Outcome", project.outcome],
            ].map(([label, body]) => (
              <GlassCard key={label} className="p-6 sm:p-8" hover={false}>
                <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400/90">{label}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{body}</p>
              </GlassCard>
            ))}
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400/90">Key features</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base text-slate-400">
                {project.keyFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400/90">Tech used</h2>
              <p className="mt-4 text-base text-slate-300">{project.stack.join(", ")}</p>
            </GlassCard>
          </div>

          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Demo</h2>
            <div className="mt-4 min-w-0">
              <ProjectDetailEmbed project={project} />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/projects"
            className="btn-portfolio-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </div>
    </main>
  );
}
