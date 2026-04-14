"use client";

type HeroSketchfabEmbedProps = {
  className?: string;
};

export function HeroSketchfabEmbed({ className = "" }: HeroSketchfabEmbedProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-white ${className}`}>
      <iframe
        title="Peapods Diorama"
        src="https://sketchfab.com/models/76ff3dee4b1047cd9c1532d8de379a6b/embed?autostart=1&autospin=0.2&preload=1&transparent=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_hint=0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        className="h-full w-full scale-[1.2] border-0"
      />
      <div className="absolute inset-0 bg-white/68 sm:bg-white/40" />
    </div>
  );
}
