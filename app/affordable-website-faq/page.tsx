import { createMetadata } from "@/lib/metadata";
import { AFFORDABLE_WEBSITE_FAQS } from "@/lib/faq";
import { SITE } from "@/lib/site";
import { BreadcrumbSchema, JsonLd } from "@/components/ui/schema";

export const metadata = createMetadata({
  title: "Affordable Website FAQ — Cheap Web Designer Answers",
  description:
    "Joshua Malki answers the most searched questions about affordable website builders, cheap web design, SEO setup, Google ranking, and pricing.",
  path: "/affordable-website-faq",
});

export default function AffordableWebsiteFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AFFORDABLE_WEBSITE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Affordable Website FAQ", href: "/affordable-website-faq" },
        ]}
      />
      <JsonLd data={faqSchema} />

      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
        Affordable Website Questions — Answered by Joshua Malki
      </h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        These are the real questions people search before hiring a cheap web designer or affordable website
        builder. I answer every one directly. If you want to discuss your project, email{" "}
        <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <div className="mt-10 space-y-5">
        {AFFORDABLE_WEBSITE_FAQS.map((item) => (
          <article key={item.question} className="rounded-xl border p-6">
            <h2 className="text-xl font-bold">{item.question}</h2>
            <p className="mt-2 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border p-8">
        <h2 className="text-2xl font-bold">Ready to Start Your Affordable Website?</h2>
        <p className="mt-3 text-muted-foreground">
          Get a cheap, professional website with real SEO built in. Packages start at $150 once-off.
        </p>
        <a
          href={`mailto:${SITE.email}?subject=Affordable%20Website%20Enquiry`}
          className="mt-5 inline-flex rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
        >
          Email Joshua Now
        </a>
      </div>
    </main>
  );
}
