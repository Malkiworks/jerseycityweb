"use client";

import { GLSLHills } from "@/components/ui/glsl-hills";
import { SITE } from "@/lib/site";

export function GLSLHeader() {
  return (
    <header className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills height="92vh" />
      {/* Subtle fade at the very bottom only — keeps animation fully visible */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute z-20 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-sm md:text-7xl">
          Cheap Website Builder
          <br />
          Real SEO Results
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 md:text-lg">
          Affordable web design for Jersey City, NYC, and nearby businesses. Strong headings, technical SEO, Search Console,
          and analytics setup done right.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=Cheap%20Website%20Build`}
          className="mt-8 inline-flex rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
