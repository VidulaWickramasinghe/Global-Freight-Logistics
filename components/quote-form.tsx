export function QuoteForm() {
  return (
    <form className="grid gap-4 md:grid-cols-2">
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Full Name" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Company Name" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Email Address" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Phone Number" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Shipment Type" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Cargo Description" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Estimated Weight / Volume" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Preferred Mode (Air / Ocean / Ground)" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Origin" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4" placeholder="Destination" />
      <input className="h-12 rounded-2xl border border-slate-200 bg-white px-4 md:col-span-2" placeholder="Required Delivery Timeline" />
      <textarea className="min-h-[150px] rounded-2xl border border-slate-200 bg-white px-4 py-3 md:col-span-2" placeholder="Additional Notes" />
      <div className="md:col-span-2">
        <button type="submit" className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700">
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
