import Link from "next/link";
import { company, navigation } from "@/lib/content";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Global Freight</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">{company.shortName}</h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {company.name} is a Sri Lanka-based freight forwarding and logistics company specializing in air freight,
              ocean import and export, ground transport, customs coordination, and integrated cargo support.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-4 py-2">{company.phone}</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">{company.email}</span>
              <span className="rounded-full bg-slate-100 px-4 py-2">{company.location}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Quick Links</h4>
            <div className="mt-4 grid gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">Tagline</h4>
            <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white shadow-xl">
              <p className="text-lg font-semibold">Reliable Freight. Global Reach.</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                No matter the size or destination of your shipment, we deliver with professionalism and accountability.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © 2026 {company.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
