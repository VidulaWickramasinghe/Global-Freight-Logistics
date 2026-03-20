export function ContactForm() {
  return (
    <form className="grid gap-4 md:grid-cols-2">
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Full Name" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Company Name" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Email Address" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Phone Number" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Shipment Type" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0" placeholder="Origin" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 outline-none ring-0 md:col-span-2" placeholder="Destination" />
      <textarea
        className="min-h-[150px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 md:col-span-2"
        placeholder="Message"
      />
      <div className="md:col-span-2">
        <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700">
          Send Inquiry
        </button>
      </div>
    </form>
  );
}
