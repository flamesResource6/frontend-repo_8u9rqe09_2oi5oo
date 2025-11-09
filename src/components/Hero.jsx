import { ArrowRight, Sparkles, Rocket } from "lucide-react";

export default function Hero({ onViewEvents, onSubmitEvent }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0F1A] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Curated weekly for Munich
          </div>
          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            Munich Now — What’s Actually Worth Doing.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Skip the noise. We hand‑pick the 7 best things to do in Munich each
            week — nightlife, food, culture, and perfect last‑minute plans.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onViewEvents}
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0F1A]"
              aria-label="View this week's best events"
            >
              View Top 7
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onSubmitEvent}
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0F1A]"
              aria-label="Submit your event for review"
            >
              <Rocket className="mr-2 h-4 w-4 text-blue-400" />
              Submit an Event
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-64 bg-gradient-to-b from-blue-500/20 to-transparent" />
    </section>
  );
}
