"use client";

import { useEffect, useState, type RefObject } from "react";
import type { ScenePhase } from "@/lib/scene-phase";
import { SCENE_ORDER } from "@/lib/scene-phase";

/**
 * Picks the section most visible in the viewport (for 3D scene switching).
 */
export function useActiveScene(scrollRootRef: RefObject<HTMLElement | null>): ScenePhase {
  const [phase, setPhase] = useState<ScenePhase>("hero");

  useEffect(() => {
    let obs: IntersectionObserver | null = null;
    let cancelled = false;

    let attempts = 0;
    const setup = () => {
      if (cancelled) return;
      attempts += 1;
      if (attempts > 120) return;
      const root = scrollRootRef.current;
      const nodes = root?.querySelectorAll<HTMLElement>("[data-scene]");
      if (!root || !nodes?.length) {
        requestAnimationFrame(setup);
        return;
      }

      const elementRatios = new Map<HTMLElement, number>();

      const updateFromEntries = (entries: IntersectionObserverEntry[]) => {
        for (const e of entries) {
          const el = e.target as HTMLElement;
          elementRatios.set(el, e.isIntersecting ? e.intersectionRatio : 0);
        }

        const ratios = new Map<ScenePhase, number>();
        SCENE_ORDER.forEach((k) => ratios.set(k, 0));
        elementRatios.forEach((r, el) => {
          const id = el.dataset.scene;
          if (!id) return;
          const key = id as ScenePhase;
          ratios.set(key, Math.max(ratios.get(key) ?? 0, r));
        });

        const laterBeatVisible =
          (ratios.get("phone") ?? 0) > 0.1 ||
          (ratios.get("directions") ?? 0) > 0.1 ||
          (ratios.get("portfolio") ?? 0) > 0.08 ||
          (ratios.get("services") ?? 0) > 0.08 ||
          (ratios.get("about") ?? 0) > 0.08 ||
          (ratios.get("contact") ?? 0) > 0.08;

        let best: ScenePhase = "hero";
        let max = -1;
        ratios.forEach((r, key) => {
          const adjusted =
            key === "search" && !laterBeatVisible ? r + 0.42 : r;
          if (adjusted > max) {
            max = adjusted;
            best = key;
          }
        });
        if (max > 0.06) setPhase(best);
      };

      obs = new IntersectionObserver(updateFromEntries, {
        root: null,
        rootMargin: "-8% 0px -22% 0px",
        threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1],
      });

      nodes.forEach((n) => obs!.observe(n));
    };

    setup();

    return () => {
      cancelled = true;
      obs?.disconnect();
    };
  }, [scrollRootRef]);

  return phase;
}
