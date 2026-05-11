import { Link } from "react-router-dom";

import { PageHeader } from "../components/layout/PageHeader";

import { ContactPanel } from "../components/contact/ContactPanel";

import { portfolioCardClass, portfolioCardGlowClass } from "../lib/portfolioCard";

import { cn } from "../lib/cn";



export function ContactPage() {

  return (

    <main className="flex w-full min-w-0 flex-1 flex-col pb-24 pt-24 sm:pt-28">

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

        <PageHeader

          eyebrow="Contact"

          title="Open to opportunities involving internal tools, reporting systems, operational software, frontend/backend development, and workflow-focused applications."

          subtitle="Available for full-time roles, contract work, or technical collaboration involving dashboards, reporting, automation, data workflows, and practical business tooling."

        />



        <ContactPanel />



        <div className={cn(portfolioCardClass({ hover: false }), "mt-12 p-8 text-center backdrop-blur-sm")}>

          <div className={portfolioCardGlowClass} aria-hidden />

          <p className="relative z-[1] text-pretty text-base text-slate-400">

            Prefer browsing first?{" "}

            <Link to="/projects" className="font-semibold text-slate-200 underline-offset-4 hover:text-white hover:underline">

              Explore projects

            </Link>{" "}

            or{" "}

            <Link to="/" className="font-semibold text-slate-200 underline-offset-4 hover:text-white hover:underline">

              head home

            </Link>

            .

          </p>

        </div>

      </div>

    </main>

  );

}

