import { Container } from "@/components/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-18 text-white md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
      <Container>
        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
          <div className="mt-5 h-1 w-20 rounded-full bg-orange-500" />
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200 md:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
