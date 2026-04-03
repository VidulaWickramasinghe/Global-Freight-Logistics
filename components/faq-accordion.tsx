"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article key={item.question} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">{item.question}</h2>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">{open ? "−" : "+"}</span>
            </button>
            {open ? <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
