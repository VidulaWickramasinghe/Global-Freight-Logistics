import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-lg font-bold text-orange-600">
        {service.title.charAt(0)}
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm font-medium text-slate-700">{service.short}</p>
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
