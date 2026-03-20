import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <div className="mt-5 space-y-2">
        {service.bestFor.map((item) => (
          <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            ✓ {item}
          </div>
        ))}
      </div>
    </article>
  );
}
