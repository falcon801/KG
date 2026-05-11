import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { cn } from "../../lib/cn";

const FOOTER_LINKS = [
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-10", className)}>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 text-sm text-[#8f816b] sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="text-xs transition hover:text-[#e8dcc8]">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8">
          <span className="font-mono text-xs">© {new Date().getFullYear()} {profile.name}</span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`mailto:${profile.contact.email}`}
              className="text-xs text-[#8f816b] transition hover:text-[#e8dcc8]"
            >
              {profile.contact.email}
            </a>
            <a
              href={`tel:${profile.contact.tel}`}
              className="text-xs text-[#8f816b] transition hover:text-[#e8dcc8]"
            >
              {profile.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
