import { motion } from "framer-motion";
import { Box, Database, LayoutGrid, Palette, Rocket, Server } from "lucide-react";
import type { SkillGroup } from "../../data/skills";
import { skillGroups } from "../../data/skills";
import { SkillCategoryCard } from "./SkillCategoryCard";

const icons: Record<SkillGroup["icon"], typeof LayoutGrid> = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  palette: Palette,
  box: Box,
  rocket: Rocket,
};

export function SkillsMatrix() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {skillGroups.map((g) => {
        const Icon = icons[g.icon];
        return <SkillCategoryCard key={g.id} title={g.title} icon={Icon} items={g.items} />;
      })}
    </motion.div>
  );
}
