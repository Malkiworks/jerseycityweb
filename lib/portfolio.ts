export type ProjectCategory = "Web App" | "Landing Page" | "E-commerce";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Harbor Analytics",
    category: "Web App",
    description:
      "Dashboard for local logistics with role-based access and real-time shipment tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Grove Street Coffee",
    category: "Landing Page",
    description:
      "Single-page brand site with menu highlights, hours, and map integration.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: "3",
    title: "Ironbound Goods",
    category: "E-commerce",
    description:
      "Small catalog storefront with Stripe checkout and lightweight CMS.",
    tags: ["Next.js", "Stripe", "Sanity"],
  },
  {
    id: "4",
    title: "Ward B Fitness",
    category: "Landing Page",
    description:
      "Membership funnel with class schedule and trainer bios for a Jersey City gym.",
    tags: ["React", "Tailwind", "Cal.com"],
  },
  {
    id: "5",
    title: "Liberty Legal Intake",
    category: "Web App",
    description:
      "Secure client intake portal with document uploads and encrypted messaging.",
    tags: ["Next.js", "Node", "AWS"],
  },
  {
    id: "6",
    title: "Exchange Place Market",
    category: "E-commerce",
    description:
      "Neighborhood market with pickup slots, inventory sync, and SMS alerts.",
    tags: ["Shopify", "Liquid", "API"],
  },
];
