"use client";

import { useState } from "react";

const shipmentOptions = ["Air Freight", "Ocean Freight", "Ground Transport", "Import & Export", "Warehousing"];
const serviceLevels = ["Standard", "Priority", "Express"];
const fieldClass = "h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mode: shipmentOptions[0], serviceLevel: serviceLevels[0], origin: "", destination: "", weight: "", deliveryDate: "", description: "" });
  const update = (key: keyof typeof form, value: string) => setForm((previous) => ({ ...previous, [key]: value }));

  if (submitted) return <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm" role="status"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">✓</div><h3 className="mt-4 text-2xl font-bold text-slate-900">Request sent</h3><p className="mt-2 text-slate-600">Our specialists will contact you shortly with the next steps for your shipment.</p></div>;

  return <form className="space-y-6" onSubmit={async (event) => {
    event.preventDefault();
    setError("");
    setPending(true);
    const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, type: "quote" }) });
    const result = await response.json().catch(() => null);
    setPending(false);
    if (!response.ok) { setError(result?.error ?? "We could not send your request. Please try again."); return; }
    setSubmitted(true);
  }}>
    <div className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-1 text-sm font-medium text-slate-700">Full Name<input name="name" required value={form.name} onChange={(event) => update("name", event.target.value)} className={fieldClass} placeholder="Full Name" autoComplete="name" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Email Address<input name="email" required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass} placeholder="Email Address" autoComplete="email" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Shipment Type<select name="mode" value={form.mode} onChange={(event) => update("mode", event.target.value)} className={fieldClass}>{shipmentOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Service Level<select name="serviceLevel" value={form.serviceLevel} onChange={(event) => update("serviceLevel", event.target.value)} className={fieldClass}>{serviceLevels.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Origin City<input name="origin" value={form.origin} onChange={(event) => update("origin", event.target.value)} className={fieldClass} placeholder="Origin City" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Destination City<input name="destination" value={form.destination} onChange={(event) => update("destination", event.target.value)} className={fieldClass} placeholder="Destination City" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Weight (kg)<input name="weight" type="number" min={0} value={form.weight} onChange={(event) => update("weight", event.target.value)} className={fieldClass} placeholder="Weight (kg)" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Requested Delivery Date<input name="deliveryDate" type="date" value={form.deliveryDate} onChange={(event) => update("deliveryDate", event.target.value)} className={fieldClass} /></label>
    </div>
    <label className="grid gap-1 text-sm font-medium text-slate-700">Cargo Description & Special Instructions<textarea name="description" value={form.description} onChange={(event) => update("description", event.target.value)} className="min-h-[150px] w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="Cargo description, dimensions, Incoterms, or special handling needs" /></label>
    <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
    {error ? <p role="alert" className="text-sm text-red-600">{error}</p> : null}
    <button disabled={pending} type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Sending…" : "Submit Request"}</button>
  </form>;
}
