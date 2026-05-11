import { portfolioTagClass } from "../../lib/portfolioCard";
import { cn } from "../../lib/cn";

export function SkillPill({ children }: { children: string }) {
  return (
    <span
      className={cn(
        portfolioTagClass,
        "font-mono text-[11px] transition hover:border-[#c9a45c]/45 hover:bg-[#2a2318]/85 hover:text-[#fff4df]",
      )}
    >
      {children}
    </span>
  );
}
