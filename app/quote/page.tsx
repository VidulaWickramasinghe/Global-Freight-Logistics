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
        title="Get a tailored logistics solution for your cargo"
        description="Share your cargo details, route requirements, and shipment priorities so our team can recommend the most suitable freight plan."
      />

      <section className="py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Why request a quote?</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 px-4 py-4">Tell us your origin, destination, and cargo type.</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">Choose the freight mode that best matches your urgency and budget.</div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">Receive a tailored response from our logistics specialists.</div>
              </div>
            </div>

            <div className="rounded-[2rem] border-t-4 border-orange-500 bg-white p-6 shadow-2xl md:p-8">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
