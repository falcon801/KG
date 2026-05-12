import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { HeroVisual, HeroVisualMobile } from "../hero/HeroVisual";

const HEADLINE_ACCENT = "BI metrics, analytics reporting, and internal tools";

function Headline() {
  const { headline } = profile;
  const i = headline.indexOf(HEADLINE_ACCENT);
  if (i === -1) {
    return <span className="text-white">{headline}</span>;
  }
  const before = headline.slice(0, i);
  const after = headline.slice(i + HEADLINE_ACCENT.length);
  return (
    <>
      <span className="text-white">{before}</span>
      <span className="text-gradient-hero">{HEADLINE_ACCENT}</span>
      <span className="text-white">{after}</span>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-w-0 shrink-0 py-12 pt-14 sm:py-16 sm:pt-20 md:py-20 lg:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] min-w-0 px-4 sm:px-6 lg:px-10">
        <div className="grid w-full min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-md border border-[#c9a45c]/55 bg-[#2a2318]/85 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#e2bd6f] shadow-[inset_0_0_0_1px_rgba(255,244,223,0.05)] backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#c9a45c]" />
              Analytics, BI & operational software
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              <Headline />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-2xl space-y-4 text-pretty text-base leading-relaxed text-[#b7aa94] sm:text-lg"
            >
              {profile.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-2.5 sm:gap-3"
            >
              <Link to="/projects" className="btn-portfolio-primary">
                View projects
              </Link>
              <a
                href={profile.contact.resumePdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-portfolio-outline"
              >
                Resume
              </a>
              <Link to="/contact" className="btn-portfolio-outline">
                Contact
              </Link>
            </motion.div>

            <HeroVisualMobile />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
