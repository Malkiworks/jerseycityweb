import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Joshua Malki — affordable web designer and developer in Jersey City, NJ. Cheap professional websites with SEO, Google Analytics, and Search Console included.",
  metadataBase: new URL(SITE.url),
  authors: [{ name: SITE.owner, url: SITE.url }],
  creator: SITE.owner,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  category: "Web Design",
  openGraph: {
    title: `${SITE.name} · ${SITE.tagline}`,
    description:
      "Solo web developer in Jersey City, NJ. Web design, development, SEO, and maintenance for local businesses.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description:
      "Solo web developer in Jersey City, NJ. Web design, development, SEO, and maintenance for local businesses.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/Whisk_f2150f9c1ed6cbeb410412c7d4532126dr.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/Whisk_f2150f9c1ed6cbeb410412c7d4532126dr.jpeg", type: "image/jpeg" }],
    shortcut: ["/Whisk_f2150f9c1ed6cbeb410412c7d4532126dr.jpeg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-0N819GMBNW";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans font-light antialiased">
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Navbar />
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}
