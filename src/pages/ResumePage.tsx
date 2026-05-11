import { useEffect } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function ResumePage() {
  const pdf = profile.contact.resumePdfHref;

  useEffect(() => {
    window.location.replace(pdf);
  }, [pdf]);

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4 pb-24 pt-28">
      <p className="text-center text-slate-400">Opening resume…</p>
      <a
        href={pdf}
        className="text-center text-sm font-semibold text-slate-200 underline underline-offset-4 hover:text-white"
      >
        If it did not open, tap here for the PDF
      </a>
      <Link to="/" className="text-sm text-slate-500 transition hover:text-slate-300">
        Back home
      </Link>
    </main>
  );
}
