export default function SponsorMarquee({ sponsor }) {
  if (!sponsor) return null;
  return (
    <section className="border-y border-slate-800 bg-[#0B0F1A]">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center gap-3 text-slate-300">
          <span className="text-xs uppercase tracking-widest text-slate-400">Brought to you by</span>
          <img
            src={sponsor.logo}
            alt={`${sponsor.brand} logo`}
            className="h-6 w-auto"
          />
          <a
            href={sponsor.link}
            className="text-sm text-blue-300 hover:text-blue-200"
            aria-label={`Visit ${sponsor.brand}`}
          >
            {sponsor.brand}
          </a>
          <span className="hidden text-sm text-slate-400 sm:inline">— {sponsor.blurb}</span>
        </div>
      </div>
    </section>
  );
}
