"use client";

type HeroSketchfabEmbedProps = {
  className?: string;
};

export function HeroSketchfabEmbed({ className = "" }: HeroSketchfabEmbedProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-white ${className}`}>
      <iframe
        title="Gisele, the giant bird !"
        src="https://sketchfab.com/models/efe66c0210774dd691f81b3fd0f510b1/embed?autostart=1&autospin=0.2&preload=1&transparent=1&ui_infos=0&ui_controls=1&ui_stop=1&ui_watermark=0&ui_hint=1"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        className="h-full w-full scale-[1.2] border-0"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-16 sm:h-24" />
      <div
        aria-hidden
        className="absolute left-0 top-16 h-[8.5rem] w-3 sm:top-24 sm:h-32 sm:w-[calc(100%-9.25rem)]"
      />
      <div aria-hidden className="absolute right-0 top-16 h-[8.5rem] w-3 sm:top-24 sm:h-32 sm:w-5" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 top-[12.5rem] sm:top-56" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-3 right-3 top-16 h-[8.5rem] rounded-xl border-2 border-accent/45 bg-white/12 sm:right-5 sm:top-24 sm:h-32 sm:w-32 sm:left-auto"
      >
        <div className="absolute inset-x-0 top-2 flex justify-center">
          <span className="rounded-full bg-white/85 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-accent">
          Rotate
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-white/68 sm:bg-transparent" />
    </div>
  );
}
