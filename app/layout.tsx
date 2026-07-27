import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | Freight & Logistics`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Sri Lanka-based freight forwarding and logistics company offering air freight, ocean freight, ground transport, customs support, and end-to-end cargo solutions.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: company.shortName,
    title: `${company.shortName} | Freight & Logistics`,
    description: "Reliable air, ocean, ground, customs, and warehousing support from Sri Lanka to the world.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | Freight & Logistics`,
    description: "Reliable freight forwarding and logistics support from Sri Lanka to the world.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: siteUrl,
    email: company.email,
    address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
    areaServed: "Worldwide",
    serviceType: ["Air Freight", "Ocean Freight", "Ground Freight", "Customs Coordination", "Warehousing"],
  };

  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-slate-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
