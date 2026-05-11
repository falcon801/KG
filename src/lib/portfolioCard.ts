import { cn } from "./cn";

export function portfolioCardClass(options?: { hover?: boolean; className?: string }) {
  const { hover = true, className } = options ?? {};
  return cn(
    "group relative overflow-hidden rounded-lg bg-[#18150f]/88 shadow-[0_18px_42px_-30px_rgba(0,0,0,0.78),inset_0_0_0_1px_rgba(201,164,92,0.16)] backdrop-blur-md",
    hover &&
      "transition duration-300 hover:-translate-y-0.5 hover:bg-[#211d15]/92 hover:shadow-[0_22px_48px_-30px_rgba(0,0,0,0.86),inset_0_0_0_1px_rgba(201,164,92,0.24)]",
    className,
  );
}

export const portfolioCardGlowClass =
  "pointer-events-none absolute inset-px rounded-[7px] bg-gradient-to-br from-[#c9a45c]/[0.07] via-transparent to-transparent opacity-70";

export const portfolioIconBoxClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#c9a45c]/45 bg-[#2a2318]/80 text-[#d8bc83] shadow-inner shadow-black/20";

export const portfolioTagClass =
  "max-w-full rounded-md border border-[#c9a45c]/20 bg-[#120f0a]/65 px-2.5 py-1 text-[12px] font-medium leading-snug text-[#e2d1b3] shadow-sm backdrop-blur-sm";
