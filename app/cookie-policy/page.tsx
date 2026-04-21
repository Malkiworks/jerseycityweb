import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "Cookie policy for Joshua Malki's affordable web design service. Learn how we use cookies and analytics.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Cookie Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-foreground/80">
        <section>
          <h2 className="text-xl font-bold text-foreground">What Are Cookies?</h2>
          <p className="mt-2">
            Cookies are small text files stored on your device when you visit a website. They help the site
            remember your preferences and provide analytics data about how visitors use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Cookies We Use</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-xs">
              <thead className="border-b bg-muted/40">
                <tr>
                  <th className="px-4 py-3 font-semibold">Cookie</th>
                  <th className="px-4 py-3 font-semibold">Provider</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">_ga</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Distinguishes unique users</td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">_ga_*</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Maintains session state</td>
                  <td className="px-4 py-3">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">_gid</td>
                  <td className="px-4 py-3">Google Analytics</td>
                  <td className="px-4 py-3">Distinguishes users within 24 hrs</td>
                  <td className="px-4 py-3">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Essential Cookies</h2>
          <p className="mt-2">
            Some cookies are strictly necessary for the site to function. These cannot be disabled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Analytics Cookies</h2>
          <p className="mt-2">
            We use Google Analytics 4 to understand how visitors interact with the site. All data is anonymised
            and no personally identifiable information is shared with Google. You can opt out by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">How to Control Cookies</h2>
          <p className="mt-2">
            You can manage or delete cookies through your browser settings. Note that disabling cookies may
            affect how parts of the site function.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noreferrer" className="underline">Firefox</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noreferrer" className="underline">Microsoft Edge</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">Contact</h2>
          <p className="mt-2">
            For any questions about cookies, email{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
