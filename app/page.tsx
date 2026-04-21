import { FooterSectionBlock } from "@/components/ui/footer-section";
import { GLSLHeader } from "@/components/ui/glsl-header";
import { LogosSlider } from "@/components/ui/logos-slider";
import { PricingSection } from "@/components/ui/pricing";
import { Contact2 } from "@/components/ui/contact-2";
import { HomepageSchema } from "@/components/ui/schema";
import { AboutSection } from "@/components/ui/about-section";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Cheap Website Builder & Affordable Web Designer | Jersey City",
  description:
    "Joshua Malki builds cheap, professional websites for Jersey City and NYC-area businesses. Starting at $150. Includes SEO, Google Analytics, and Search Console setup.",
  path: "/",
});

const plans = [
  {
    name: "Starter Site",
    onceOffFee: 150,
    monthlyRetainer: 30,
    features: [
      "One high-converting homepage",
      "Basic on-page SEO setup",
      "Google Search Console integration",
      "Google Analytics 4 tracking",
    ],
    description: "Best for solo businesses launching fast on a tight budget.",
    buttonText: "Email to Start",
    href: `mailto:${SITE.email}?subject=Starter%20Website%20Package`,
  },
  {
    name: "Growth Website",
    onceOffFee: 450,
    monthlyRetainer: 75,
    features: [
      "Multi-page professional website",
      "Local SEO content architecture",
      "Schema markup and indexing support",
      "Monthly performance reporting",
    ],
    description: "Most popular package for local service businesses.",
    buttonText: "Claim Discount",
    href: `mailto:${SITE.email}?subject=Growth%20Website%20Discount`,
    isPopular: true,
  },
  {
    name: "Authority Build",
    onceOffFee: 900,
    monthlyRetainer: 150,
    features: [
      "Advanced conversion-focused design",
      "AEO-ready content sections",
      "Search Console + Analytics dashboard",
      "Priority support and iteration",
    ],
    description: "For teams that want aggressive growth and stronger authority.",
    buttonText: "Book by Email",
    href: `mailto:${SITE.email}?subject=Authority%20Website%20Build`,
  },
];

export default function HomePage() {
  return (
    <main>
      <HomepageSchema />
      <GLSLHeader />

      {/* Services overview — AEO entity signals */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16" aria-label="Services">
        <h2 className="text-3xl font-bold tracking-tight">What I Build for You</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          I design and develop affordable websites for small businesses, freelancers, and local services. Every project includes full technical SEO, GA4, and Search Console setup.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { heading: "Cheap Website Design", body: "Professional design starting at $150. Clean layout, strong headings, and conversion-focused structure." },
            { heading: "Technical SEO Setup", body: "Schema markup, sitemap, canonical tags, metadata, and Search Console verification on every build." },
            { heading: "Google Analytics & Search Console", body: "GA4 event tracking and Search Console indexing so you can measure impressions, clicks, and leads from day one." },
          ].map((s) => (
            <article key={s.heading} className="rounded-xl border p-5">
              <h3 className="font-semibold">{s.heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <p className="mb-4 text-sm font-medium text-muted-foreground">Built with the tools that matter</p>
          <LogosSlider />
        </div>
      </section>
      <AboutSection />

      <PricingSection
        plans={plans}
        title="Discounted Website Packages"
        description="Every plan includes a once-off build fee and a monthly retainer for updates, SEO, and support."
      />

      <Contact2
        title="Work With an Affordable Web Designer"
        description="Tell me your business type, city, and goals. I will recommend a focused website and SEO plan."
        phone="(551) 406-7451"
        email={SITE.email}
        web={{ label: SITE.url, url: SITE.url }}
      />
      <FooterSectionBlock />
    </main>
  );
}
