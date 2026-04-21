"use client";

import { SITE } from "@/lib/site";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

export function HomeHero() {
  return (
    <MinimalistHero
      logoText="Cheap Web Designer"
      navLinks={[
        { label: "HOME", href: "/" },
        { label: "WEB DESIGN", href: "/web-design-jersey-city" },
        { label: "SEO", href: "/seo-jersey-city" },
        { label: "CONTACT", href: "/contact" },
      ]}
      mainText="Affordable website builder and cheap web designer for Jersey City, NYC, and nearby businesses. Strong SEO headings, AEO structure, and conversion-first layout."
      readMoreLink="/web-design-jersey-city"
      imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
      imageAlt="Team discussing website strategy"
      overlayText={{ part1: "cheap", part2: "and pro." }}
      socialLinks={[
        { icon: Mail, href: `mailto:${SITE.email}` },
        { icon: Phone, href: `tel:${SITE.phone}` },
        { icon: Globe, href: SITE.url },
        { icon: MapPin, href: "#" },
      ]}
      locationText="Jersey City, NYC, and nearby"
    />
  );
}
