"use client";

import { motion, type MotionValue } from "framer-motion";

export type ViewportRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type HeroSketchfabEmbedProps = {
  className?: string;
  /** Hole in touch blockers so Sketchfab receives drag; aligns with rotate control. */
  interactionRect: ViewportRect | null;
  /** Fade iframe only — blockers must stay outside this opacity layer so `position:fixed` works on mobile. */
  heroOpacity: MotionValue<number>;
};

export function HeroSketchfabEmbed({
  className = "",
  interactionRect,
  heroOpacity,
}: HeroSketchfabEmbedProps) {
  const r = interactionRect;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-white ${className}`}>
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0">
        <iframe
          title="Gisele, the giant bird !"
          src="https://sketchfab.com/models/efe66c0210774dd691f81b3fd0f510b1/embed?autostart=1&autospin=0.2&preload=1&transparent=1&ui_infos=0&ui_controls=1&ui_stop=1&ui_watermark=0&ui_hint=1"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          className="h-full w-full scale-[1.2] border-0"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-white/68 sm:bg-transparent" />
      </motion.div>
      {r && r.width > 0 && r.height > 0 ? (
        <>
          <div
            aria-hidden
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: r.top,
              zIndex: 8,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "fixed",
              top: r.top,
              left: 0,
              width: r.left,
              height: r.height,
              zIndex: 8,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "fixed",
              top: r.top,
              left: r.left + r.width,
              right: 0,
              height: r.height,
              zIndex: 8,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "fixed",
              top: r.top + r.height,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 8,
            }}
          />
        </>
      ) : null}
    </div>
  );
}
