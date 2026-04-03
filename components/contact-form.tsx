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

const initialState: ContactState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  shipmentType: "Air Freight",
  origin: "",
  destination: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Inquiry Received</p>
        <h3 className="mt-3 text-2xl font-bold text-slate-900">Thank you for reaching out.</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Our logistics team will contact you shortly with practical next steps and a tailored recommendation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <input
        required
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
        placeholder="Full Name"
      />
      <input
        value={form.company}
        onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
        placeholder="Company Name"
      />
      <input
        required
        type="email"
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
        placeholder="Email Address"
      />
      <input
        required
        value={form.phone}
        onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
        placeholder="Phone Number"
      />
      <select
        value={form.shipmentType}
        onChange={(event) => setForm((prev) => ({ ...prev, shipmentType: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
      >
        <option>Air Freight</option>
        <option>Ocean Freight</option>
        <option>Ground Freight</option>
        <option>Import & Export</option>
      </select>
      <input
        value={form.origin}
        onChange={(event) => setForm((prev) => ({ ...prev, origin: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500"
        placeholder="Origin"
      />
      <input
        value={form.destination}
        onChange={(event) => setForm((prev) => ({ ...prev, destination: event.target.value }))}
        className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-500 md:col-span-2"
        placeholder="Destination"
      />
      <textarea
        required
        value={form.message}
        onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        className="min-h-[150px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange-500 md:col-span-2"
        placeholder="Message"
      />
      <div className="md:col-span-2">
        <button type="submit" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
