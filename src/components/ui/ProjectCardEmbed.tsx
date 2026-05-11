import { useLayoutEffect, useRef, useState } from "react";
import { publicUrl } from "../../lib/publicUrl";
import type { ProjectMeta } from "../../data/projects";

const SNAP_W = 1200;
const SNAP_H = 760;

export function projectCardEmbedHref(project: ProjectMeta): string {
  const entry = project.embedEntry?.replace(/^\/+/, "") ?? `projects/${project.slug}/index.html`;
  return publicUrl(entry);
}

export function ProjectCardEmbed({ project }: { project: ProjectMeta }) {
  const imageSrc = project.cardImage ? publicUrl(project.cardImage) : null;

  if (imageSrc) {
    return (
      <div className="relative min-h-0 min-w-0 shrink-0">
        <div className="relative aspect-[5/3] min-h-[11rem] w-full max-h-[15rem] overflow-hidden rounded-t-lg bg-[#100c07] sm:min-h-[12.5rem] sm:max-h-[16rem] [transform:translateZ(0)]">
          <img
            src={imageSrc}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover object-top [filter:sepia(0.22)_saturate(0.62)_brightness(0.72)_contrast(0.98)]"
            loading="lazy"
            decoding="async"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 bg-[#3a2b18]/30 mix-blend-color"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#c9a45c]/12 via-transparent to-[#080706]/30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#080706]/95 via-[#080706]/32 to-transparent"
          />
        </div>
      </div>
    );
  }

  return <ProjectCardIframeHero project={project} />;
}

function ProjectCardIframeHero({ project }: { project: ProjectMeta }) {
  const src = projectCardEmbedHref(project);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [coverScale, setCoverScale] = useState(0.35);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width < 8 || height < 8) return;
      const s = Math.max(width / SNAP_W, height / SNAP_H) * 1.06;
      setCoverScale(Math.min(Math.max(s, 0.18), 0.95));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative min-h-0 min-w-0 shrink-0">
      <div
        ref={viewportRef}
        className="relative aspect-[5/3] min-h-[11rem] w-full max-h-[15rem] overflow-hidden rounded-t-lg bg-[#100c07] sm:min-h-[12.5rem] sm:max-h-[16rem] [transform:translateZ(0)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#080706]/92 via-[#080706]/18 to-[#120f0a]/40"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#3a2b18]/34 mix-blend-color" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#c9a45c]/12 via-transparent to-[#080706]/25" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#080706]/52 to-transparent" />
        <iframe
          src={src}
          title={project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="border-0 bg-[#080706] [filter:sepia(0.2)_saturate(0.58)_brightness(0.66)_contrast(0.96)]"
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: SNAP_W,
            height: SNAP_H,
            transform: `translate(-50%, -50%) scale(${coverScale})`,
            transformOrigin: "center center",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

export function ProjectDetailEmbed({ project }: { project: ProjectMeta }) {
  const src = projectCardEmbedHref(project);
  return (
    <div className="overflow-hidden rounded-lg border border-[#c9a45c]/22 bg-[#100c07] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)]">
      <div className="relative h-[min(76vh,920px)] min-h-[min(480px,58vh)] w-full overflow-hidden sm:h-[min(78vh,960px)]">
        <iframe
          src={src}
          title={project.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full border-0 bg-[#080706]"
        />
      </div>
    </div>
  );
}
