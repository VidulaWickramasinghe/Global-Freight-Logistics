import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Submit your shipment details and receive a tailored freight and logistics solution.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your shipment"
        description="Every shipment is different. Share your cargo details, route requirements, and timeline so our team can provide a tailored freight solution."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
