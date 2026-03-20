import type { Industry } from "@/lib/content";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{industry.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
    </article>
  );
}
