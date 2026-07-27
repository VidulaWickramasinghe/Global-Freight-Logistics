"use client";

import { useState } from "react";

type ContactState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  shipmentType: string;
  origin: string;
  destination: string;
  message: string;
};

const initialState: ContactState = { name: "", company: "", email: "", phone: "", shipmentType: "Air Freight", origin: "", destination: "", message: "" };
const fieldClass = "h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

export function ContactForm() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  if (submitted) {
    return <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 text-center" role="status"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Inquiry Received</p><h3 className="mt-3 text-2xl font-bold text-slate-900">Thank you for reaching out.</h3><p className="mt-2 text-sm leading-7 text-slate-600">Our logistics team will contact you shortly with practical next steps and a tailored recommendation.</p></div>;
  }

  const update = (key: keyof ContactState, value: string) => setForm((previous) => ({ ...previous, [key]: value }));

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={async (event) => {
      event.preventDefault();
      setError("");
      setPending(true);
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, type: "contact" }) });
      const result = await response.json().catch(() => null);
      setPending(false);
      if (!response.ok) { setError(result?.error ?? "We could not send your inquiry. Please try again."); return; }
      setSubmitted(true);
    }}>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Full Name<input name="name" required value={form.name} onChange={(event) => update("name", event.target.value)} className={fieldClass} placeholder="Full Name" autoComplete="name" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Company Name<input name="company" value={form.company} onChange={(event) => update("company", event.target.value)} className={fieldClass} placeholder="Company Name" autoComplete="organization" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Email Address<input name="email" required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass} placeholder="Email Address" autoComplete="email" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Phone Number<input name="phone" required type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={fieldClass} placeholder="Phone Number" autoComplete="tel" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Shipment Type<select name="shipmentType" value={form.shipmentType} onChange={(event) => update("shipmentType", event.target.value)} className={fieldClass}><option>Air Freight</option><option>Ocean Freight</option><option>Ground Freight</option><option>Import & Export</option></select></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700">Origin<input name="origin" value={form.origin} onChange={(event) => update("origin", event.target.value)} className={fieldClass} placeholder="Origin" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700 md:col-span-2">Destination<input name="destination" value={form.destination} onChange={(event) => update("destination", event.target.value)} className={fieldClass} placeholder="Destination" /></label>
      <label className="grid gap-1 text-sm font-medium text-slate-700 md:col-span-2">Message<textarea name="message" required value={form.message} onChange={(event) => update("message", event.target.value)} className="min-h-[150px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" placeholder="Tell us about your shipment" /></label>
      <div className="md:col-span-2"><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />{error ? <p role="alert" className="mb-3 text-sm text-red-600">{error}</p> : null}<button disabled={pending} type="submit" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60">{pending ? "Sending…" : "Send Inquiry"}</button></div>
    </form>
  );
}
