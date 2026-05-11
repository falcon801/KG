import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 md:mb-14", className)}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          {eyebrow ? (
            <p className="inline-flex rounded-md border border-[#c9a45c]/30 bg-[#2a2318]/70 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#d8bc83] backdrop-blur-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-3xl text-balance text-3xl font-bold tracking-tight text-[#f5ead8] md:text-4xl lg:text-[2.65rem] lg:leading-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#b7aa94] md:text-lg">{subtitle}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </header>
  );
}
