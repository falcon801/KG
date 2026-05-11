import type { ComponentType } from "react";
import { portfolioCardClass, portfolioCardGlowClass, portfolioIconBoxClass, portfolioTagClass } from "../../lib/portfolioCard";
import { cn } from "../../lib/cn";

export function SkillCategoryCard({
  title,
  icon: Icon,
  items,
  className,
}: {
  title: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn(portfolioCardClass(), className)}>
      <div className={portfolioCardGlowClass} aria-hidden />
      <div className="relative p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <span className={portfolioIconBoxClass}>
            <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.65} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold tracking-tight text-[#f5ead8]">{title}</h3>
          </div>
        </div>
        <ul className="mt-5 flex max-w-full flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className={cn(
                portfolioTagClass,
                item.length > 42 && "w-full max-w-[28rem] px-3 py-2 text-[13px] leading-snug",
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
