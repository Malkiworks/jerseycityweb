"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Web Design", href: "/web-design-jersey-city" },
      { title: "SEO Setup", href: "/seo-jersey-city" },
      { title: "Pricing", href: "/pricing" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Cookie Policy", href: "/cookie-policy" },
      { title: "FAQ", href: "/affordable-website-faq" },
    ],
  },
  {
    label: "Contact",
    links: [
      { title: "joshuamalki05@icloud.com", href: "mailto:joshuamalki05@icloud.com", icon: Mail },
      { title: "(551) 406-7451", href: "tel:5514067451", icon: Phone },
      { title: "Jersey City, NJ", href: "#", icon: MapPin },
      { title: "jerseycityweb.com", href: "https://jerseycityweb.com", icon: Globe },
    ],
  },
];

export function FooterSectionBlock() {
  return (
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-t-3xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <Image
            src="/Whisk_f2150f9c1ed6cbeb410412c7d4532126dr.jpeg"
            alt="JC Web logo"
            width={48}
            height={48}
            className="rounded-sm object-contain"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jersey City Web. All rights reserved.
          </p>
        </AnimatedContainer>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div>
                <h3 className="text-xs">{section.label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a href={link.href} className="inline-flex items-center transition-all duration-300 hover:text-foreground">
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
