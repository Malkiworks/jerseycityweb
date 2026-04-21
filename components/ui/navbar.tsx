"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label={SITE.name}>
          <Image
            src="/Whisk_f2150f9c1ed6cbeb410412c7d4532126dr.jpeg"
            alt={SITE.name}
            width={36}
            height={36}
            className="rounded-sm object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/50",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={`mailto:${SITE.email}?subject=Website%20Build%20Enquiry`}
          className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-80 md:inline-flex"
        >
          Get a Quote
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-foreground/10 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/50",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${SITE.email}?subject=Website%20Build%20Enquiry`}
              className="mt-2 inline-flex rounded-md bg-foreground px-4 py-2 text-center text-sm font-semibold text-background"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
