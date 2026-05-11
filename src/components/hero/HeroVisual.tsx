import { useCallback, useId, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioCardClass, portfolioCardGlowClass } from "../../lib/portfolioCard";
import { cn } from "../../lib/cn";

const METRIC_NODE_BRASS = "rgb(201, 164, 92)";
const METRIC_NODE_OLIVE = "rgb(143, 163, 109)";
const METRIC_NODE_CLAY = "rgb(184, 121, 103)";
const GRAPH_NODE_RGB = [METRIC_NODE_BRASS, METRIC_NODE_OLIVE, METRIC_NODE_CLAY] as const;
const GRAPH_NODE_SECONDARY_STROKE = "rgba(191, 165, 120, 0.45)";

function strokeForHeroGraphNode(cx: number, cy: number): string {
  if (cx === 52 && cy === 180) return METRIC_NODE_CLAY;
  if (cx === 248 && cy === 100) return METRIC_NODE_BRASS;
  if (cx === 368 && cy === 140) return METRIC_NODE_OLIVE;
  if (cx === 320 && cy === 168) return METRIC_NODE_CLAY;
  if (cx === 72 && cy === 92) return GRAPH_NODE_SECONDARY_STROKE;
  return GRAPH_NODE_SECONDARY_STROKE;
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 26, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 90, damping: 26, mass: 0.45 });

  const rotateX = useTransform(sy, [-1, 1], [3, -3]);
  const rotateY = useTransform(sx, [-1, 1], [-4, 4]);

  const dx = useTransform(sx, (v) => v * 18);
  const dy = useTransform(sy, (v) => v * 18);
  const dx2 = useTransform(sx, (v) => v * 26);
  const dy2 = useTransform(sy, (v) => v * 26);
  const dx3 = useTransform(sx, (v) => v * 12);
  const dy3 = useTransform(sy, (v) => v * 12);

  const move = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    },
    [mx, my],
  );

  const leave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const gid = useId().replace(/:/g, "");

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="relative hidden min-h-[min(68vh,560px)] w-full min-w-0 select-none lg:block"
      style={{ perspective: 1600 }}
    >
      <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-gradient-to-tr from-[#705c3f]/12 via-transparent to-[#8fa36d]/8 blur-3xl" />

      <motion.div className="relative h-full min-h-[520px] w-full [transform-style:preserve-3d]" style={{ rotateX, rotateY }}>
        <motion.div
          className={cn(
            portfolioCardClass({ hover: false }),
            "absolute left-[4%] top-[10%] z-[1] flex h-[42%] w-[72%] flex-col overflow-hidden",
          )}
          style={{ x: dx, y: dy }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={portfolioCardGlowClass} aria-hidden />
          <div className="relative z-[1] flex flex-1 flex-col p-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">Kelley's life</span>
              <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[9px] text-slate-400">Today</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                {
                  k: "Caffeine",
                  v: "92%",
                  valueClass:
                    "text-[#c9a45c] drop-shadow-[0_0_6px_rgba(201,164,92,0.2)] [text-shadow:0_0_10px_rgba(201,164,92,0.1)]",
                },
                {
                  k: "Energy",
                  v: "117%",
                  valueClass:
                    "text-[#8fa36d] drop-shadow-[0_0_6px_rgba(143,163,109,0.18)] [text-shadow:0_0_10px_rgba(143,163,109,0.08)]",
                },
                {
                  k: "Drive",
                  v: "100%",
                  valueClass:
                    "text-[#b87967] drop-shadow-[0_0_6px_rgba(184,121,103,0.2)] [text-shadow:0_0_10px_rgba(184,121,103,0.09)]",
                },
              ].map((m) => (
                <div key={m.k} className="rounded-lg border border-white/[0.08] bg-black/40 px-2 py-2 text-center shadow-inner shadow-black/40">
                  <div className="font-mono text-[8px] uppercase tracking-wider text-slate-500">{m.k}</div>
                  <div className={cn("mt-1 font-mono text-lg font-semibold tabular-nums", m.valueClass)}>{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-2 border-t border-white/[0.06] pt-3">
              {[
                { w: 84, t: "Outside time", bar: "bg-[#c9a45c]" },
                { w: 62, t: "Focus left", bar: "bg-[#d8bc83]" },
                { w: 91, t: "Good mood", bar: "bg-[#8fa36d]" },
              ].map((row) => (
                <div key={row.t} className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div className={cn("h-full rounded-full", row.bar)} style={{ width: `${row.w}%` }} />
                  </div>
                  <span className="w-[7.5rem] shrink-0 text-right font-mono text-[9px] text-slate-400">{row.t}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-[14%] top-[26%] z-[2] h-[48%] w-[68%]"
          style={{ x: dx2, y: dy2 }}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <svg viewBox="0 0 400 280" className="h-full w-full overflow-visible drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]" aria-hidden>
            <defs>
              <linearGradient id={`ln-${gid}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(191,165,120)" stopOpacity="0.32" />
                <stop offset="50%" stopColor="rgb(240,228,205)" stopOpacity="0.62" />
                <stop offset="100%" stopColor="rgb(143,163,109)" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 52 180 C 120 80, 180 220, 248 100 S 340 200, 368 140"
              fill="none"
              stroke={`url(#ln-${gid})`}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.path
              d="M 72 92 C 140 180, 220 40, 320 168"
              fill="none"
              stroke="rgb(191 165 120 / 0.42)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
            {[
              [52, 180],
              [248, 100],
              [368, 140],
              [72, 92],
              [320, 168],
            ].map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r={6}
                fill="rgb(18 16 12)"
                stroke={strokeForHeroGraphNode(cx, cy)}
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
              />
            ))}
          </svg>
        </motion.div>

        <motion.div
          className={cn(portfolioCardClass({ hover: false }), "absolute left-[8%] top-[52%] z-[3] flex w-[38%] flex-col overflow-hidden")}
          style={{ x: dx2, y: dy }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <div className={portfolioCardGlowClass} aria-hidden />
          <div className="relative z-[1] border-b border-white/[0.08] px-3 py-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">Checks</span>
          </div>
          <ul className="relative z-[1] space-y-2 p-3">
            {["Coffee handled", "Keys found", "Phone charged", "Plans half made"].map((label, i) => (
              <li key={label} className="flex items-center gap-2 font-mono text-[10px] text-slate-300">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-white/15 bg-white/[0.05] text-[9px] text-emerald-400/95">
                  ✓
                </span>
                <span className={cn(i === 2 ? "text-slate-200" : "")}>{label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={cn(
            portfolioCardClass({ hover: false }),
            "absolute bottom-[10%] right-[5%] z-[4] flex h-[40%] w-[54%] flex-col overflow-hidden",
          )}
          style={{ x: dx3, y: dy3 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <div className={portfolioCardGlowClass} aria-hidden />
          <div className="absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative z-[1] flex items-center justify-between border-b border-white/[0.08] px-3 py-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">Recent runs</span>
            <span className="font-mono text-[9px] text-slate-500">Life log</span>
          </div>
          <div className="relative z-[1] min-h-0 flex-1 overflow-hidden px-2 pb-2 pt-1">
            <div className="grid grid-cols-[1fr_4rem_3.5rem] gap-1 border-b border-white/[0.06] pb-1 font-mono text-[8px] uppercase tracking-wider text-slate-500">
              <span>Job</span>
              <span className="text-center">Time</span>
              <span className="text-right">Out</span>
            </div>
            <div className="mt-1 space-y-1">
              {[
                ["Hit the river", "07:12", "Good"],
                ["Drove to the store", "09:41", "Done"],
                ["Waved to stranger", "11:03", "Solid"],
                ["Made portfolio cooler", "14:22", "WIP"],
              ].map(([job, time, out]) => (
                <div
                  key={job}
                  className="grid grid-cols-[1fr_4rem_3.5rem] items-center gap-1 rounded-md border border-transparent bg-white/[0.03] px-1.5 py-1.5 font-mono text-[10px] text-slate-400 hover:border-white/[0.06]"
                >
                  <span className="truncate text-slate-300">{job}</span>
                  <span className="text-center tabular-nums text-slate-500">{time}</span>
                  <span className="text-right text-emerald-400/90">{out}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HeroVisualMobile() {
  return (
    <div className="relative mt-8 w-full lg:hidden">
      <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#705c3f]/12 via-transparent to-[#8fa36d]/8 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className={cn(portfolioCardClass({ hover: false }), "relative")}
      >
        <div className={portfolioCardGlowClass} aria-hidden />

        <div className="relative z-[2] space-y-3 p-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">Kelley's life</span>
            <span className="rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[9px] text-slate-400">Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["92%", "Caffeine", "text-[#c9a45c] drop-shadow-[0_0_5px_rgba(201,164,92,0.18)] [text-shadow:0_0_8px_rgba(201,164,92,0.08)]"],
              ["117%", "Energy", "text-[#8fa36d] drop-shadow-[0_0_5px_rgba(143,163,109,0.16)] [text-shadow:0_0_8px_rgba(143,163,109,0.07)]"],
              ["100%", "Drive", "text-[#b87967] drop-shadow-[0_0_5px_rgba(184,121,103,0.18)] [text-shadow:0_0_8px_rgba(184,121,103,0.08)]"],
            ].map(([v, l, valueClass]) => (
              <div key={l} className="rounded-lg border border-white/[0.08] bg-black/45 px-2 py-2 text-center">
                <div className="font-mono text-[7px] uppercase text-slate-500">{l}</div>
                <div className={cn("mt-0.5 font-mono text-sm font-semibold tabular-nums", valueClass)}>{v}</div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 320 120" className="mx-auto h-[100px] w-full" aria-hidden>
            <motion.path
              d="M 24 88 Q 90 24 160 72 T 296 40"
              fill="none"
              stroke="rgb(191 165 120 / 0.52)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {[24, 160, 296].map((x, i) => (
              <circle
                key={x}
                cx={x}
                cy={i === 1 ? 72 : i === 0 ? 88 : 40}
                r={5}
                fill="rgb(18 16 12)"
                stroke={GRAPH_NODE_RGB[i]}
                strokeWidth="1.35"
              />
            ))}
          </svg>
          <div className="grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-3 font-mono text-[9px]">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-2 py-2 text-slate-400">
              <div className="text-[8px] uppercase text-slate-500">Last run</div>
              <div className="mt-1 text-slate-200">Hit the river · Good</div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-2 py-2 text-slate-400">
              <div className="text-[8px] uppercase text-slate-500">Queue</div>
              <div className="mt-1 text-slate-200">Store trip · stranger wave</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
