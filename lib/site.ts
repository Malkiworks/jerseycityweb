export const SITE = {
  name: "Jersey City Web",
  tagline: "Jersey City's Web Developer",
  owner: "Joshua Malki",
  /** Public path under `/public` (about section portrait). */
  ownerPhoto: "/joshua-malki.png",
  email: "joshuamalki05@icloud.com",
  phone: "5514067451",
  location: "Jersey City, NJ",
  url: "https://jerseycityweb.com",
} as const;

export const NAV_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
