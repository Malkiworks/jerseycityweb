import Link from "next/link";
import { AFFORDABLE_WEBSITE_FAQS } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16" id="faq">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Affordable Website Questions Answered</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          These are the exact questions people search before hiring a cheap website builder or affordable web designer.
          We answer them directly so your site can match search intent and rank for long-tail queries.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {AFFORDABLE_WEBSITE_FAQS.slice(0, 10).map((item) => (
          <article key={item.question} className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/affordable-website-faq"
          className="inline-flex rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background"
        >
          Read All FAQ Answers
        </Link>
      </div>
    </section>
  );
}
