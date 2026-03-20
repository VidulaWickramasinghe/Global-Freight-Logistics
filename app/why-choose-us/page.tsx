import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Why businesses trust our freight coordination, service commitment, and flexible logistics support.",
};

const points = [
  {
    title: "End-to-End Service",
    description: "We support the full freight process, from shipment planning and coordination to delivery follow-through.",
  },
  {
    title: "Multi-Modal Capability",
    description: "Our expertise across air, ocean, and ground freight allows us to recommend flexible transport solutions.",
  },
  {
    title: "Sri Lanka-Based Expertise",
    description: "We understand local cargo realities while supporting international freight routes and market connections.",
  },
  {
    title: "Customer-Focused Communication",
    description: "We prioritize practical updates, fast responses, and personalized customer support.",
  },
  {
    title: "Reliable Execution",
    description: "We focus on cargo care, timing, documentation accuracy, and disciplined operational coordination.",
  },
  {
    title: "Flexible Service Approach",
    description: "Every shipment is different, so we tailor our logistics support around the client’s actual requirements.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="A logistics partner focused on reliability, responsiveness, and operational confidence"
        description="We do not treat shipments as routine transactions. We treat them as important business commitments that affect timelines, customers, and operations."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {points.map((point) => (
              <article key={point.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">{point.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-900">We protect timelines, commitments, and trust</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Freight movement affects delivery schedules, customer confidence, production timelines, and operational continuity.
              Our goal is to reduce shipping stress while improving visibility and reliability at every stage of transport.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Let’s support your next shipment with confidence"
        description="Talk to our team about your cargo requirements and we will help shape the right logistics approach for your business."
        primaryLabel="Speak to Our Team"
        primaryHref="/contact"
        secondaryLabel="Get a Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
