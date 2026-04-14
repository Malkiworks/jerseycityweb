export function SectionBreak() {
  return (
    <div
      className="pointer-events-none relative z-10 flex min-h-[12vh] items-center justify-center py-8"
      aria-hidden
    >
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
    </div>
  );
}
