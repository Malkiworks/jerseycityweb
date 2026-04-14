import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold tracking-tight">{SITE.name}</p>
          <p className="mt-1 text-sm font-light text-muted">
            {SITE.location} · {SITE.owner}
          </p>
          <a
            href={`tel:${SITE.phone}`}
            className="mt-3 block text-sm font-light text-accent hover:underline"
          >
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 inline-block text-sm font-light text-accent hover:underline"
          >
            {SITE.email}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-light text-neutral-600 transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-neutral-100 py-6 text-center">
        <p className="text-xs font-light text-neutral-400">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
