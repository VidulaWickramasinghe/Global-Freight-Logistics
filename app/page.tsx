import Link from "next/link";
import { Container } from "@/components/container";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { IndustryCard } from "@/components/industry-card";
import { CtaBanner } from "@/components/cta-banner";
import { industries, processSteps, services } from "@/lib/content";

const proofs = [
  ["Shipment Visibility", "Milestone updates and direct communication from planning through delivery."],
  ["Risk-Aware Planning", "Mode and route recommendations based on urgency, cargo profile, and trade constraints."],
  ["Execution Discipline", "Structured coordination to reduce delays, rework, and avoidable shipment disruptions."],
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Your Trusted Partner"
                title="We support businesses that need dependable cargo movement across local and international markets"
                description="From time-sensitive air shipments to large-scale sea freight, we simplify logistics through practical planning and responsive coordination."
              />
              <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Our team helps importers, exporters, and growing businesses move shipments with clarity, professionalism,
                and confidence.
              </p>
              <div className="border-l-4 border-orange-500 pl-4 text-slate-700 italic">
                “Logistics is about protecting timelines and supporting business growth.”
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                alt="Logistics operations"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Core Services"
              title="Freight and logistics solutions built around your cargo"
              description="Fast, flexible, and coordinated support for urgent deliveries, container freight, domestic transport, documentation, and storage planning."
            />
            <div className="grid-auto-fit">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
            <div>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-orange-500 bg-white px-5 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="How We Work"
                title="A clear process that keeps your shipment moving"
                description="We combine planning, documentation support, and practical coordination to reduce delays and keep every movement organized."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "End-to-end freight solutions",
                  "Multi-modal expertise",
                  "Fast communication",
                  "Flexible service options",
                  "Local Sri Lankan expertise",
                  "Global freight reach",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-slate-50 p-6">
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 font-bold text-orange-600">
                      {step.step}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {proofs.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Industries"
              title="Supporting multiple industries with practical freight coordination"
              description="We serve businesses across a wide range of sectors, helping them move cargo efficiently and professionally."
            />
            <div className="grid-auto-fit">
              {industries.map((industry) => (
                <IndustryCard key={industry.title} industry={industry} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Let’s move your cargo the right way"
        description="Looking for a trusted freight forwarding and logistics company in Sri Lanka? Talk to our team today for tailored shipping, transport, and supply chain solutions."
        primaryLabel="Get a Free Quote"
        primaryHref="/quote"
        secondaryLabel="Speak to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
