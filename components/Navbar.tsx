"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/site";

function navLinkActive(href: string, pathname: string, hash: string) {
  if (pathname !== "/") return false;
  const target = href.includes("#") ? href.split("#")[1] : "";
  const current = hash || "hero";
  return (target || "hero") === current;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash.slice(1) : "");
    const onHash = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {NAV_LINKS.map(({ href, label }) => {
            const active = navLinkActive(href, pathname, hash);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-light tracking-wide transition-colors ${
                  active
                    ? "text-accent font-normal"
                    : "text-neutral-600 hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-md border border-neutral-200 px-3 py-2 text-xs font-medium uppercase tracking-wider text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="overflow-hidden border-t border-neutral-200 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map(({ href, label }) => {
                const active = navLinkActive(href, pathname, hash);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-md px-3 py-2 text-sm font-light ${
                      active ? "bg-accent/10 text-accent" : "text-neutral-700"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
