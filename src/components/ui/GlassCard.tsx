import type { HTMLAttributes, ReactNode } from "react";

import { portfolioCardClass, portfolioCardGlowClass } from "../../lib/portfolioCard";

import { cn } from "../../lib/cn";



export function GlassCard({

  className,

  children,

  hover = true,

  ...props

}: HTMLAttributes<HTMLDivElement> & { children: ReactNode; hover?: boolean }) {

  return (

    <div className={cn(portfolioCardClass({ hover }), className)} {...props}>

      <div className={portfolioCardGlowClass} aria-hidden />

      <div className="relative flex h-full min-h-0 w-full flex-col">{children}</div>

    </div>

  );

}

