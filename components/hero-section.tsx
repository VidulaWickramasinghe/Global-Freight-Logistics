import Link from "next/link";
import { company, heroStats } from "@/lib/content";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 px-6 py-12 text-white shadow-2xl md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                Sri Lanka Based • Global Freight Reach
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                  Move Cargo with <span className="text-sky-300">Confidence</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                  {company.name} provides professional air freight, ocean import & export, ground freight, customs
                  coordination, and end-to-end logistics services designed to move your cargo safely, efficiently, and on time.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Your Trusted Logistics Partner</p>
                <h2 className="mt-3 text-2xl font-bold">Professional cargo movement for modern business</h2>
                <div className="mt-6 space-y-3">
                  {[
                    "Professional freight coordination",
                    "Reliable cargo movement",
                    "Fast communication and shipment visibility",
                    "Flexible air, ocean, and ground solutions",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/6 px-4 py-3 text-sm text-slate-100">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.value} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">{item.value}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
