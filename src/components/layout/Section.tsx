import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-12 md:py-16 lg:py-20", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow ? (
          <p className="inline-flex rounded-lg border border-line/45 bg-card/45 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-slate-300/95 backdrop-blur-sm">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 max-w-4xl text-balance text-2xl font-bold tracking-tight text-[#f5ead8] md:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#b7aa94] md:text-lg">{subtitle}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
