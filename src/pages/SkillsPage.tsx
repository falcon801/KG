import { PageHeader } from "../components/layout/PageHeader";

import { SkillsMatrix } from "../components/skills/SkillsMatrix";



export function SkillsPage() {

  return (

    <main className="flex w-full min-w-0 flex-1 flex-col pb-24 pt-24 sm:pt-28">

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">

        <PageHeader

          eyebrow="Capabilities"

          title="What I work in"

          subtitle="BI metrics and SQL, Domo experience when it applies, Python services, and whatever frontend or hosting layer the problem needs when the answer is a whole app, not just a chart."

        />

        <SkillsMatrix />

      </div>

    </main>

  );

}

