"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FULL_QUERY = "jersey city bakery open now";
const TYPING_MS = 70;

export function StoryTypingSearch() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? FULL_QUERY.length : 0);

  useEffect(() => {
    if (reduce) {
      setShown(FULL_QUERY.length);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= FULL_QUERY.length) window.clearInterval(id);
    }, TYPING_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const text = FULL_QUERY.slice(0, shown);

  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
        Someone in Hudson County opens search
      </p>
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/90 shadow-lg shadow-neutral-200/40 backdrop-blur-md">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
          <span className="ml-2 flex-1 truncate rounded-md bg-neutral-100 px-3 py-1 text-[11px] font-light text-muted">
            Search…
          </span>
        </div>
        <div className="flex items-center gap-3 px-4 py-4">
          <svg
            className="h-5 w-5 shrink-0 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-5.2-5.2M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
          <div className="min-h-[1.5rem] flex-1 font-light tracking-tight text-foreground">
            {text}
            <motion.span
              className="ml-0.5 inline-block h-5 w-px bg-accent"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.9,
                repeat: reduce ? 0 : Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
