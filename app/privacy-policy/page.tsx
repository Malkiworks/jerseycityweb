import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Joshua Malki's affordable web design service. Learn how we handle your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-foreground/80">
        <section>
          <h2 className="text-xl font-bold text-foreground">Who We Are</h2>
          <p className="mt-2">
            This website is operated by {SITE.owner} trading as {SITE.name}, a web design and development service
            based in {SITE.location}. You can reach us at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">What Information We Collect</h2>
          <p className="mt-2">
            When you contact us via email or the contact form, we collect the name, email address, and any
            information you voluntarily provide. We do not collect sensitive personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">How We Use Your Information</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>To respond to your enquiry or project request.</li>
            <li>To send a project proposal or invoice when agreed.</li>
            <li>We do not sell, share, or rent your data to third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Analytics and Tracking</h2>
          <p className="mt-2">
            This site uses Google Analytics 4 to track anonymised page views, session data, and traffic sources.
            No personally identifiable information is sent to Google Analytics. We also use Google Search Console
            to monitor search performance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Cookies</h2>
          <p className="mt-2">
            We use essential cookies required for site functionality and analytics cookies via Google Analytics.
            You can read our full{" "}
            <a href="/cookie-policy" className="underline">Cookie Policy</a> for details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Your Rights</h2>
          <p className="mt-2">
            You have the right to request access to, correction of, or deletion of any personal data we hold about
            you. To make a request, email us at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Data Retention</h2>
          <p className="mt-2">
            We retain contact enquiry data only as long as necessary to fulfil the service or respond to your
            request. We do not store payment details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. The latest version will always be available on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Contact</h2>
          <p className="mt-2">
            For any privacy-related questions, email{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
