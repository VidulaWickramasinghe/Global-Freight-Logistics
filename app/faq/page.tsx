import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our freight, shipping, and logistics services.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Clear answers to common freight, shipping, and logistics questions."
      />

      <section className="py-10 md:py-14">
        <Container>
          <FaqAccordion items={faqs} />
        </Container>
      </section>

      <CtaBanner
        title="Still have questions about your shipment?"
        description="Share your route, cargo details, and timeline and our team will provide practical guidance quickly."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Request a Quote"
        secondaryHref="/quote"
      />
    </>
  );
}
