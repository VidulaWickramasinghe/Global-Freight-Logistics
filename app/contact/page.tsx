import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch for air freight, ocean import/export support, inland transportation, customs coordination, and logistics planning.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s move your shipment forward"
        description="Whether you need air freight, ocean import and export support, inland transportation, customs coordination, or complete logistics management, our team is ready to help."
      />

      <section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <strong className="text-slate-900">Company:</strong> {company.name}
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <strong className="text-slate-900">Location:</strong> {company.location}
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <strong className="text-slate-900">Phone:</strong> {company.phone}
                </div>
                <div className="rounded-2xl bg-slate-50 px-4 py-4">
                  <strong className="text-slate-900">Email:</strong> {company.email}
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-4 leading-7">
                  Share your shipment requirements and we will respond with practical next steps and service options.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Send Us an Inquiry</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
