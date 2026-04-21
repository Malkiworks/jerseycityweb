export const SITE = {
  name: "Affordable Web Builder",
  tagline: "Cheap Website Builder and Web Designer",
  owner: "Joshua Malki",
  /** Public path under `/public` (about section portrait). */
  ownerPhoto: "/joshua-malki.png",
  email: "joshuamalki05@icloud.com",
  phone: "5514067451",
  location: "Jersey City, NJ + NYC area",
  url: "https://jerseycityweb.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/web-design-jersey-city", label: "Web Design" },
  { href: "/seo-jersey-city", label: "SEO" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
