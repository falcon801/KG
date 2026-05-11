import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

const POPUP_IMAGE = `${import.meta.env.BASE_URL}deadpool-bridge-steam.gif`;

export function NavbarIronManPfp({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const modal =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {open ? (
              <motion.div
                className="fixed inset-0 z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  tabIndex={-1}
                  aria-label="Close dialog"
                  className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  data-easter-egg-version="gif-fullscreen-background"
                  className="fixed inset-0 z-[101] overflow-hidden bg-black"
                  style={{
                    backgroundImage: `url(${POPUP_IMAGE})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >

                  <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] bg-gradient-to-b from-black/82 via-black/30 to-transparent px-3 pb-24 pt-6 sm:px-4 sm:pt-8">
                    <p
                      id={titleId}
                      className="pointer-events-none text-center font-mono text-xs font-semibold uppercase tracking-[0.32em] text-red-400/95 sm:text-sm"
                    >
                      classified
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 z-[3] rounded-lg bg-black/30 p-2 text-slate-200 backdrop-blur-sm transition hover:bg-white/[0.16] hover:text-white sm:right-6 sm:top-6"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" strokeWidth={2} />
                  </button>

                  <motion.div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/92 via-black/42 to-transparent px-4 pb-10 pt-32 text-center sm:pb-14"
                    initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.span
                      className="block text-pretty text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-4xl"
                      animate={{
                        textShadow: [
                          "0 2px 8px rgba(0,0,0,0.95), 0 0 0 rgba(248,113,113,0)",
                          "0 2px 8px rgba(0,0,0,0.95), 0 0 18px rgba(248,113,113,0.28)",
                          "0 2px 8px rgba(0,0,0,0.95), 0 0 0 rgba(248,113,113,0)",
                        ],
                      }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      Marvel is better. Take Notes
                    </motion.span>
                    <motion.span
                      className="mt-3 inline-block text-xl font-black uppercase tracking-[0.18em] text-red-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-3xl"
                      animate={{ scale: [1, 1.045, 1], opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
                    >
                      LOL
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-[#0b0a08]",
          "h-9 w-9 ring-[#bfa578]/70 shadow-[0_0_22px_-8px_rgba(191,165,120,0.45)] transition hover:ring-[#d0a35d]/80 hover:shadow-[0_0_28px_-6px_rgba(201,164,92,0.38)] sm:h-10 sm:w-10",
          className,
        )}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="DC trap"
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-[#102f63] via-[#081322] to-[#0f1f3d]"
          aria-hidden
        />
        <span className="relative flex h-full w-full items-center justify-center font-black leading-none tracking-[-0.16em]">
          <span className="pr-[0.13em] text-[0.9rem] text-[#f7fbff] drop-shadow-[0_0_12px_rgba(125,180,255,0.45)] transition group-hover:text-white sm:text-[1rem]">
            DC
          </span>
        </span>
        <span className="pointer-events-none absolute inset-[4px] rounded-full border border-[#f7fbff]/70" aria-hidden />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" aria-hidden />
      </button>
      {modal}
    </>
  );
}
