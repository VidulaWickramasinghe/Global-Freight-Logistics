import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our Sri Lankan freight forwarding company, our market focus, promise, and business mission.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Sri Lanka-based logistics company built on reliability and service discipline"
        description="Global Freight Weight Transportation (Pvt) Ltd. provides dependable cargo solutions across domestic and international markets through practical planning, responsive coordination, and professional freight support."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <SectionHeading
                eyebrow="Who We Are"
                title="More than a transport provider"
                description="We are a logistics partner that understands the importance of timing, cargo safety, documentation accuracy, and supply chain visibility."
              />
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  We specialize in air freight, ocean freight import and export, ground transportation, customs coordination,
                  warehousing support, and end-to-end logistics planning for local and international clients.
                </p>
                <p>
                  We serve businesses of all sizes, including importers, exporters, manufacturers, wholesalers, retailers,
                  e-commerce sellers, and project-based clients who require dependable freight and logistics support.
                </p>
                <p>
                  From Sri Lanka to the world, and from the world to Sri Lanka, we coordinate cargo flows across air, sea,
                  and land to help businesses move goods with confidence.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">Our Strength</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Our strength lies in combining local Sri Lankan market understanding with international freight capability.
                  We focus on clear communication, efficient coordination, and dependable execution.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">Our Core Values</h3>
                <div className="mt-5 space-y-3">
                  {values.map((value) => (
                    <div key={value} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      ✓ {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-4 md:py-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                To provide reliable, efficient, and customer-focused freight forwarding and logistics solutions that enable
                businesses in Sri Lanka and beyond to move cargo confidently across air, sea, and land.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                To become a trusted logistics and freight forwarding brand in Sri Lanka, recognized for dependable service,
                operational excellence, and strong global cargo connectivity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Partner with a logistics team you can trust"
        description="Whether you need routine freight support or a tailored logistics solution for a specific shipment, our team is ready to help."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="Request a Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
