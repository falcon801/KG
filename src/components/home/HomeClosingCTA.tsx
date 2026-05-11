import { Link } from "react-router-dom";



export function HomeClosingCTA() {

  return (

    <section className="py-16 md:py-24">

      <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-10">

        <h2 className="text-balance text-2xl font-bold tracking-tight text-[#f5ead8] md:text-3xl">

          Let’s talk if this lines up with what you need.

        </h2>

        <p className="mx-auto mt-4 max-w-xl text-[#b7aa94]">

          I’m open to full-time roles, contract work, and practical conversations about reporting, internal tools, and workflow software.

        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

          <Link to="/contact" className="btn-portfolio-primary px-8 py-3 text-sm font-semibold">

            Contact

          </Link>

          <Link

            to="/projects"

            className="btn-portfolio-outline px-8 py-3 text-sm font-semibold"

          >

            Browse projects

          </Link>

        </div>

      </div>

    </section>

  );

}

