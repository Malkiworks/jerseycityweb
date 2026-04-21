import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { BreadcrumbSchema, ServiceSchema } from "@/components/ui/schema";

export const metadata = createMetadata({
  title: "Web Design Jersey City — Affordable & Professional",
  description:
    "Joshua Malki builds affordable, conversion-focused websites for Jersey City businesses. Starting at $150 with SEO, GA4, and Search Console included.",
  path: "/web-design-jersey-city",
});

export default function WebDesignJerseyCityPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Web Design Jersey City", href: "/web-design-jersey-city" },
        ]}
      />
      <ServiceSchema
        name="Web Design Jersey City"
        description="Affordable, professional website design and development for Jersey City businesses, including technical SEO, GA4, and Search Console setup."
        url="/web-design-jersey-city"
      />

      <h1 className="text-5xl font-extrabold tracking-tight">
        Affordable Web Design in Jersey City That Converts
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        I am Joshua Malki — a Jersey City-based web designer and developer. I build professional websites for
        local businesses that need stronger trust, higher conversion rates, and clean technical SEO — all at
        an affordable price.
      </p>

      <h2 className="mt-12 text-3xl font-bold">What You Get With Every Build</h2>
      <ul className="mt-4 list-disc space-y-3 pl-6 text-muted-foreground">
        <li><strong>Fast multi-page architecture</strong> designed for local Jersey City search visibility.</li>
        <li><strong>Strong heading hierarchy</strong> and clear service messaging for users and search engines.</li>
        <li><strong>Google Analytics 4</strong> + Search Console set up and verified from launch day.</li>
        <li><strong>Schema markup</strong> so Google understands your business type, location, and services.</li>
        <li><strong>Clear email CTA flow</strong> so leads reach you directly without friction.</li>
      </ul>

      <h2 className="mt-12 text-3xl font-bold">Why Jersey City Businesses Choose Me</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {[
          { q: "Is it cheap?", a: "Yes. My starter build starts at $150 once-off — no inflated agency fees." },
          { q: "Do I get SEO included?", a: "Every build ships with technical SEO, meta titles, schema, and sitemap." },
          { q: "Will I rank on Google?", a: "I set up Search Console and GA4 so you can track exactly where your traffic comes from." },
          { q: "How do I contact you?", a: `Email ${SITE.email} and I reply within 24 hours with a project plan.` },
        ].map(({ q, a }) => (
          <article key={q} className="rounded-xl border p-5">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a}</p>
          </article>
        ))}
      </div>

      <a
        href={`mailto:${SITE.email}?subject=Web%20Design%20Jersey%20City`}
        className="mt-10 inline-flex rounded-md bg-foreground px-6 py-3 font-semibold text-background transition-opacity hover:opacity-80"
      >
        Email Joshua to Start
      </a>
    </main>
  );
}
