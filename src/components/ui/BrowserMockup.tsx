import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function BrowserMockup({
  title,
  children,
  className,
  dense,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  dense?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line/50 bg-elevated/90 shadow-card backdrop-blur-md",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line/40 bg-card/80 px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md border border-line/40 bg-canvas/80 px-2 py-1 text-center font-mono text-[10px] text-[#8f816b]">
          {title}
        </div>
      </div>
      <div className={cn("bg-canvas/50", dense ? "p-2" : "p-3 sm:p-4")}>{children}</div>
    </div>
  );
}
