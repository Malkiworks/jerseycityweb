import type { JSX } from "react";

export type Service = {
  title: string;
  description: string;
  price: string;
  icon: "design" | "code" | "seo" | "maint";
};

export const SERVICES: Service[] = [
  {
    title: "Web Design",
    description:
      "Wireframes, visual direction, and responsive layouts that match your brand without clutter.",
    price: "From $1,500",
    icon: "design",
  },
  {
    title: "Web Development",
    description:
      "Next.js and React builds with clean components, accessible markup, and performance in mind.",
    price: "From $3,500",
    icon: "code",
  },
  {
    title: "SEO Setup",
    description:
      "Metadata, structured data, sitemaps, and Core Web Vitals tuning so search engines understand you.",
    price: "From $800",
    icon: "seo",
  },
  {
    title: "Maintenance",
    description:
      "Updates, hosting coordination, analytics checks, and small fixes on a predictable cadence.",
    price: "From $150 / mo",
    icon: "maint",
  },
];

export function ServiceIcon({ name }: { name: Service["icon"] }): JSX.Element | null {
  const common = "h-10 w-10 text-accent";
  switch (name) {
    case "design":
      return (
        <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 16h28M14 8v24" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "code":
      return (
        <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
          <path
            d="M12 14l-6 6 6 6M28 14l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "seo":
      return (
        <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="18" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M25 25l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "maint":
      return (
        <svg className={common} viewBox="0 0 40 40" fill="none" aria-hidden>
          <path
            d="M20 8v6M20 26v6M11.8 11.8l4.2 4.2M24 24l4.2 4.2M8 20h6M26 20h6M11.8 28.2l4.2-4.2M24 16l4.2-4.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
