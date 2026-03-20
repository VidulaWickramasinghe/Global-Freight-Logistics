import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | Freight & Logistics`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Sri Lanka-based freight forwarding and logistics company offering air freight, ocean freight, ground transport, customs support, and end-to-end cargo solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-slate-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
