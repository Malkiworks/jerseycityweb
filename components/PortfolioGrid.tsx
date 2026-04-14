"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { TiltCard } from "@/components/TiltCard";
import { projectPlaceholderImage } from "@/lib/placeholders";
import { PROJECTS, type Project, type ProjectCategory } from "@/lib/portfolio";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Web App",
  "Landing Page",
  "E-commerce",
];

export function PortfolioGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-neutral-200 pb-6"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((f) => {
          const selected = active === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-light transition-colors ${
                selected
                  ? "bg-accent text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="relative mb-6 h-36 overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-neutral-200/80">
          <Image
            src={projectPlaceholderImage(project.id, 640, 240)}
            alt=""
            width={640}
            height={240}
            sizes="(max-width: 640px) 100vw, 33vw"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {project.category}
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight">{project.title}</h2>
        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-light text-neutral-600"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </TiltCard>
  );
}
