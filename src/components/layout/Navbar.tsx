import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../../data/profile";
import { cn } from "../../lib/cn";
import { NavbarIronManPfp } from "./NavbarIronManPfp";

const NAV_LINKS: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
];

function navButtonClass(active: boolean) {
  return cn(
    "rounded-md px-3 py-2 text-[13px] font-medium tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a45c]/55",
    active
      ? "bg-[#2a2318]/80 text-[#fff4df] shadow-[inset_0_0_0_1px_rgba(201,164,92,0.18)]"
      : "text-[#b7aa94] hover:bg-[#211d15]/65 hover:text-[#f5ead8]",
  );
}

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const projectsActive = location.pathname === "/projects" || location.pathname.startsWith("/projects/");

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0e4cd]/[0.075] bg-[#0b0a08]/82 backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[#0b0a08]/70">
      <div className="relative mx-auto flex h-[60px] max-w-[1400px] items-center px-4 sm:h-[64px] sm:px-6 lg:px-10">
        <div className="relative z-10 flex shrink-0 items-center gap-3">
          <NavbarIronManPfp />
          <Link
            to="/"
            className="text-[17px] font-semibold tracking-tight text-[#f5ead8] transition hover:text-white sm:text-lg"
            onClick={(e) => {
              setMobileOpen(false);
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            {profile.name}
          </Link>
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:items-center lg:gap-0.5"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ to, label, end }) =>
            to === "/projects" ? (
              <NavLink
                key={to}
                to={to}
                className={() => navButtonClass(projectsActive)}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ) : (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => navButtonClass(isActive)} onClick={() => setMobileOpen(false)}>
                {label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={profile.contact.resumePdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#5a4a35]/65 bg-[#18150f]/70 px-3.5 py-2 text-[13px] font-medium text-[#e8dcc8] transition hover:border-[#c9a45c]/45 hover:bg-[#211d15]/75 hover:text-[#fff4df]"
            >
              <FileText className="h-4 w-4 opacity-80" aria-hidden />
              Resume
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "rounded-md px-4 py-2 text-[13px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/10 transition hover:ring-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400/60",
                  isActive
                    ? "bg-[#e8d5ad] text-[#17110a]"
                    : "bg-[#d8bc83] text-[#17110a] hover:bg-[#f0d8a8]",
                )
              }
            >
              Contact
            </NavLink>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#f0e4cd]/[0.09] bg-white/[0.04] text-[#e8dcc8] transition hover:bg-white/[0.08] lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#f0e4cd]/[0.07] bg-[#0b0a08]/94 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-8 px-4 py-6">
              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {NAV_LINKS.map(({ to, label, end }) =>
                  to === "/projects" ? (
                    <NavLink
                      key={to}
                      to={to}
                      className={() =>
                        cn(
                          "rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition",
                          projectsActive
                            ? "bg-[#2a2318]/80 text-[#fff4df] shadow-[inset_0_0_0_1px_rgba(201,164,92,0.18)]"
                            : "text-[#b7aa94] hover:bg-[#211d15]/65 hover:text-[#f5ead8]",
                        )
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ) : (
                    <NavLink
                      key={to}
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition",
                          isActive
                            ? "bg-[#2a2318]/80 text-[#fff4df] shadow-[inset_0_0_0_1px_rgba(201,164,92,0.18)]"
                            : "text-[#b7aa94] hover:bg-[#211d15]/65 hover:text-[#f5ead8]",
                        )
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ),
                )}
              </nav>

              <div className="h-px bg-white/[0.06]" />

              <div className="flex flex-col gap-2">
                <a
                  href={profile.contact.resumePdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#5a4a35]/65 bg-[#18150f]/70 py-3.5 text-[15px] font-medium text-[#e8dcc8]"
                >
                  <FileText className="h-4 w-4" aria-hidden />
                  Resume
                </a>
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg py-3.5 text-center text-[15px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/10",
                      isActive ? "bg-[#e8d5ad] text-[#17110a]" : "bg-[#d8bc83] text-[#17110a]",
                    )
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
