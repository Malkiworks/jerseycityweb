import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { BreadcrumbSchema, ServiceSchema } from "@/components/ui/schema";

export const metadata = createMetadata({
  title: "SEO Setup Jersey City — Search Console, GA4 & Schema",
  description:
    "I set up technical SEO, Google Search Console, GA4 tracking, and schema markup for Jersey City businesses. Rank faster and measure what matters.",
  path: "/seo-jersey-city",
});

export default function SeoJerseyCityPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "SEO Jersey City", href: "/seo-jersey-city" },
        ]}
      />
      <ServiceSchema
        name="SEO Setup Jersey City"
        description="Technical SEO, Google Search Console setup, GA4 tracking, schema markup, and AEO content structure for Jersey City businesses."
        url="/seo-jersey-city"
      />

      <h1 className="text-5xl font-extrabold tracking-tight">
        SEO &amp; AEO Setup for Jersey City Businesses
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Your website should rank on Google, answer questions in AI search results, and generate real leads. I
        build pages with the technical structure, schema, and content depth to make that happen.
      </p>

      <h2 className="mt-12 text-3xl font-bold">What SEO Setup Includes</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[
          { heading: "Google Search Console", body: "Domain verification, sitemap submission, indexing request, and crawl error monitoring." },
          { heading: "Google Analytics 4", body: "GA4 install with event tracking, scroll depth, and contact form conversions so you see what drives leads." },
          { heading: "Schema Markup", body: "LocalBusiness, Service, BreadcrumbList, FAQPage, and Person schema so Google understands your entity." },
          { heading: "AEO Content Structure", body: "FAQ sections, direct-answer headings, and entity-rich copy so AI engines surface your answers." },
          { heading: "Technical SEO Baseline", body: "Canonical tags, robots.txt, sitemap.xml, metadata per page, and mobile performance." },
          { heading: "Ongoing Monitoring", body: "Monthly check on impressions, click-through rates, and ranking position changes in Search Console." },
        ].map((s) => (
          <article key={s.heading} className="rounded-xl border p-5">
            <h3 className="font-semibold">{s.heading}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-12 text-3xl font-bold">What Is AEO and Why Does It Matter?</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        AEO — Answer Engine Optimisation — is structuring your content so AI tools like Google SGE, ChatGPT,
        and Perplexity can pull your answers directly. I write FAQ blocks, add schema, and build
        entity-rich pages that appear in AI-generated results, not just traditional search listings.
      </p>

      <a
        href={`mailto:${SITE.email}?subject=SEO%20Setup%20Jersey%20City`}
        className="mt-10 inline-flex rounded-md bg-foreground px-6 py-3 font-semibold text-background transition-opacity hover:opacity-80"
      >
        Email for SEO Setup
      </a>
    </main>
  );
}
