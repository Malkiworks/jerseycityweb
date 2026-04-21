import { Contact2 } from "@/components/ui/contact-2";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Jersey City Web Developer",
  description:
    "Contact Joshua Malki for professional website builds in Jersey City with SEO, analytics, and Search Console setup.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Contact2
      title="Contact Joshua Malki"
      description="For new websites, redesigns, local SEO, and performance upgrades in Jersey City."
      phone="(551) 406-7451"
      email={SITE.email}
      web={{ label: SITE.url, url: SITE.url }}
    />
  );
}
