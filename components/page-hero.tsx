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
    <section className="py-8 md:py-10">
      <Container>
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
        </div>
      </Container>
    </section>
  );
}
