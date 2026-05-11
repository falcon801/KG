import { Hero } from "../components/sections/Hero";
import { FeaturedProjectsPreview } from "../components/home/FeaturedProjectsPreview";
import { HomeClosingCTA } from "../components/home/HomeClosingCTA";
import { AboutMeSection } from "../components/home/AboutMeSection";
import { StackPreview } from "../components/home/StackPreview";
import { WhatIBuild } from "../components/home/WhatIBuild";

export function HomePage() {
  return (
    <main className="flex w-full min-w-0 flex-1 flex-col">
      <Hero />
      <WhatIBuild />
      <AboutMeSection />
      <FeaturedProjectsPreview />
      <StackPreview />
      <HomeClosingCTA />
    </main>
  );
}
