import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/cta-banner";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our air freight, ocean freight, ground transport, customs support, warehousing, and door-to-door logistics services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end freight and logistics solutions across air, sea, and land"
        description="Our services are designed to reduce logistics complexity, improve shipment coordination, and support confident cargo movement for local and international clients."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid-auto-fit">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Service planning snapshot</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Best for urgency</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Air Freight + Express handling</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Best for cost efficiency</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Ocean Freight + Consolidation</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Best for domestic flow</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">Ground Freight + Warehousing</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Need the right freight solution for your cargo?"
        description="Tell us about your shipment and our team will help identify the most suitable service option based on cargo type, urgency, and destination."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
