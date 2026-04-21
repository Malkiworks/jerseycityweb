import { PricingSection } from "@/components/ui/pricing";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createMetadata({
  title: "Website Pricing Jersey City",
  description:
    "Discounted website packages for Jersey City businesses, including SEO setup, Google Analytics, and Search Console support.",
  path: "/pricing",
});

const plans = [
  {
    name: "Starter Site",
    onceOffFee: 150,
    monthlyRetainer: 30,
    features: ["One-page conversion site", "Technical SEO baseline", "GA4 and Search Console", "1 revision cycle"],
    description: "Great for launching quickly.",
    buttonText: "Email for Starter",
    href: `mailto:${SITE.email}?subject=Starter%20Pricing`,
  },
  {
    name: "Growth Website",
    onceOffFee: 450,
    monthlyRetainer: 75,
    features: ["5+ pages", "Local SEO architecture", "Schema + on-page optimization", "Monthly insight call"],
    description: "Best value for local businesses.",
    buttonText: "Get Discount by Email",
    href: `mailto:${SITE.email}?subject=Growth%20Pricing%20Discount`,
    isPopular: true,
  },
  {
    name: "Authority Build",
    onceOffFee: 900,
    monthlyRetainer: 150,
    features: ["Full content system", "AEO-focused page templates", "Advanced analytics", "Priority support"],
    description: "For faster market authority.",
    buttonText: "Email for Authority",
    href: `mailto:${SITE.email}?subject=Authority%20Pricing`,
  },
];

export default function PricingPage() {
  return <PricingSection plans={plans} title="Affordable Website Pricing" description="One-time project fee plus monthly support retainer." />;
}
