import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { IndustryCard } from "@/components/industry-card";
import { CtaBanner } from "@/components/cta-banner";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how our freight forwarding and logistics support helps manufacturing, retail, trading, construction, and other industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Flexible logistics support tailored to different sectors"
        description="Different industries face different freight demands. We provide practical logistics solutions that match the pace, complexity, and cargo needs of each business type."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid-auto-fit">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Recurring Shipments", "Weekly and monthly cargo movement plans for stable supply chains."],
              ["Project Cargo", "Milestone-driven support for one-off industrial and construction movements."],
              ["Seasonal Peaks", "Flexible capacity and route planning for promotional and seasonal demand spikes."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Logistics support designed around your industry"
        description="Tell us about your operations and cargo needs, and we will help shape a freight solution that fits your business."
        primaryLabel="Request a Consultation"
        primaryHref="/quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
