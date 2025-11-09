import { Star } from "lucide-react";

function EventCard({ event }) {
  return (
    <div className="group rounded-lg border border-slate-800 bg-[#0E1424] p-4 transition hover:border-blue-600/60 hover:shadow-[0_0_0_1px_rgba(37,99,235,.4)]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">{event.title}</h3>
        {event.boosted && (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-300">
            <Star className="h-3 w-3" /> Boosted
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-slate-300">{event.date} • {event.price}</p>
      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{event.tagline}</p>
      <a
        href={event.url}
        className="mt-3 inline-flex text-sm font-medium text-blue-300 hover:text-blue-200"
        aria-label={`View details for ${event.title}`}
      >
        View details →
      </a>
    </div>
  );
}

export default function TopSeven({ events }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          The Top 7 this week
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}
