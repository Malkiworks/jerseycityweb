import { SITE } from "@/lib/site";

/** Renders a JSON-LD <script> block. Accepts any schema.org object. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LocalBusiness + Person + WebSite combined schema for the homepage. */
export function HomepageSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description:
      "Affordable website builder and cheap web designer serving Jersey City, NJ and nearby areas. Specialising in conversion-focused websites, technical SEO, Google Analytics, and Search Console setup.",
    url: SITE.url,
    telephone: `+1-${SITE.phone}`,
    email: SITE.email,
    founder: { "@type": "Person", name: SITE.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jersey City",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Jersey City" },
      { "@type": "City", name: "New York City" },
      { "@type": "State", name: "New Jersey" },
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Website",
            description: "One-page website with SEO, GA4, and Search Console setup. From $150 once-off + $30/month.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Website",
            description: "Multi-page professional website with local SEO architecture. From $450 once-off + $75/month.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Authority Build",
            description: "Full conversion-focused website with AEO content and advanced analytics. From $900 once-off + $150/month.",
          },
        },
      ],
    },
    sameAs: [SITE.url],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.owner,
    jobTitle: "Web Designer and Developer",
    worksFor: { "@id": `${SITE.url}/#business` },
    email: SITE.email,
    telephone: `+1-${SITE.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jersey City",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    url: SITE.url,
    knowsAbout: [
      "Web Design",
      "Web Development",
      "Search Engine Optimisation",
      "Google Analytics",
      "Google Search Console",
      "Answer Engine Optimisation",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.tagline,
    publisher: { "@id": `${SITE.url}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/affordable-website-faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={localBusiness} />
      <JsonLd data={person} />
      <JsonLd data={website} />
    </>
  );
}

/** Breadcrumb schema for inner pages. */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

/** Service schema for service-specific pages. */
export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
    },
    areaServed: { "@type": "City", name: "Jersey City" },
    url: `${SITE.url}${url}`,
  };
  return <JsonLd data={data} />;
}
