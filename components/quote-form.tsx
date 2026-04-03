"use client";

import { useMemo, useState } from "react";

const shipmentOptions = ["Air Freight", "Ocean Freight", "Ground Transport", "Import & Export", "Warehousing"];
const serviceLevels = ["Standard", "Priority", "Express"];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState(shipmentOptions[0]);
  const [serviceLevel, setServiceLevel] = useState(serviceLevels[0]);
  const [weight, setWeight] = useState(0);

  const estimate = useMemo(() => {
    const modeMultiplier = mode === "Air Freight" ? 2.3 : mode === "Ocean Freight" ? 1 : 1.4;
    const urgencyMultiplier = serviceLevel === "Express" ? 1.6 : serviceLevel === "Priority" ? 1.25 : 1;
    const base = Math.max(weight, 50) * modeMultiplier * urgencyMultiplier;
    return Math.round(base);
  }, [mode, serviceLevel, weight]);

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">✓</div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">Request Sent!</h3>
        <p className="mt-2 text-slate-600">Our specialists will contact you shortly with the next steps for your shipment.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input required className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500" placeholder="Full Name" />
        <input required type="email" className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500" placeholder="Email Address" />
        <select value={mode} onChange={(event) => setMode(event.target.value)} className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500">
          {shipmentOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select value={serviceLevel} onChange={(event) => setServiceLevel(event.target.value)} className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500">
          {serviceLevels.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500" placeholder="Origin City" />
        <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500" placeholder="Destination City" />
        <input
          type="number"
          min={0}
          value={weight || ""}
          onChange={(event) => setWeight(Number(event.target.value))}
          className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
          placeholder="Weight (kg)"
        />
        <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500" placeholder="Requested Delivery Date" type="date" />
      </div>

      <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-800">
        Instant planning estimate: <span className="font-bold">USD {estimate.toLocaleString()}</span> (final quote after route and cargo review)
      </div>

      <textarea className="min-h-[150px] w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500" placeholder="Cargo Description & Special Instructions" />
      <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
        Submit Request
      </button>
    </form>
  );
}
