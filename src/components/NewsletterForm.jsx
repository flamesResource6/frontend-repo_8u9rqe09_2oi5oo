import { useState } from "react";

export default function NewsletterForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-xl border border-slate-800 bg-[#0E1424] p-6">
        <h3 className="text-lg font-semibold text-white">Get the weekly drops</h3>
        <p className="mt-1 text-sm text-slate-300">
          One email, the 7 best things. No spam. Unsubscribe anytime.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <div className="mt-3 text-sm text-green-400" role="status" aria-live="polite">
            Thanks! Check your inbox for a confirmation.
          </div>
        )}
      </div>
    </section>
  );
}
