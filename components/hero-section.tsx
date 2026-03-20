import Link from "next/link";
import { company, heroStats } from "@/lib/content";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8ed74512c1?auto=format&fit=crop&q=80&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/65" />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Sri Lanka&apos;s Premier Logistics Partner
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Move Cargo with <span className="text-orange-500">Confidence</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                {company.name} delivers reliable freight forwarding and logistics solutions from Sri Lanka to the world
                with efficient planning, responsive coordination, and careful shipment handling.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
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

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Your Trusted Partner</p>
            <h2 className="mt-4 text-3xl font-bold">Dependable cargo movement across local and international markets.</h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              From time-sensitive air shipments to large-scale sea freight, we simplify logistics through practical
              planning and responsive coordination.
            </p>
            <div className="mt-6 border-l-4 border-orange-500 pl-4 text-sm italic text-slate-200">
              &quot;Logistics is about protecting timelines and supporting business growth.&quot;
            </div>
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          {heroStats.map((item) => (
            <div key={item.value} className="rounded-[1.5rem] border border-white/10 bg-white/95 p-6 text-slate-900 shadow-lg">
              <div className="text-lg font-bold md:text-xl">{item.value}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
