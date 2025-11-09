import { useMemo } from "react";
import Hero from "./components/Hero";
import TopSeven from "./components/TopSeven";
import SponsorMarquee from "./components/SponsorMarquee";
import NewsletterForm from "./components/NewsletterForm";

export default function App() {
  // Seed demo content for the preview. Backend/API will be wired next.
  const sponsor = useMemo(() => ({
    brand: "BlueBottle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Blue_Bottle_Coffee_logo.svg",
    blurb: "Fueling your weekend adventures.",
    link: "https://example.com"
  }), []);

  const topEvents = useMemo(() => [
    {
      id: 1,
      title: "Glockenbach Night Market",
      tagline: "Street food, vinyl DJs, indie makers.",
      date: "Fri • 20:00",
      price: "€",
      boosted: true,
      url: "#"
    },
    {
      id: 2,
      title: "Isar Sundowner Picnic",
      tagline: "Bring a blanket, we bring the beats.",
      date: "Sat • 18:30",
      price: "Free",
      boosted: false,
      url: "#"
    },
    {
      id: 3,
      title: "Hidden Bars Crawl",
      tagline: "Secret doors, stellar cocktails.",
      date: "Sat • 21:00",
      price: "€€",
      boosted: true,
      url: "#"
    },
    {
      id: 4,
      title: "Kunstareal Sunday",
      tagline: "Museums for €1 — culture binge.",
      date: "Sun • All day",
      price: "€",
      boosted: false,
      url: "#"
    },
    {
      id: 5,
      title: "Pop‑up Ramen Night",
      tagline: "Broth dreams from a Tokyo guest chef.",
      date: "Thu • 19:00",
      price: "€€",
      boosted: false,
      url: "#"
    },
    {
      id: 6,
      title: "Indie Cinema: Retro Noir",
      tagline: "One‑night screening + Q&A.",
      date: "Wed • 20:30",
      price: "€€",
      boosted: false,
      url: "#"
    },
    {
      id: 7,
      title: "Techno by the Tracks",
      tagline: "Warehouse vibes till sunrise.",
      date: "Sat • 23:00",
      price: "€€€",
      boosted: true,
      url: "#"
    }
  ], []);

  const scrollToEvents = () => {
    const el = document.getElementById("top-seven");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openSubmitForm = () => {
    alert("Submission form coming next — this is a visual preview.");
  };

  return (
    <div className="min-h-screen bg-[#0A0E18] text-slate-200">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-[#0A0E18]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0A0E18]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight text-white">
            Munich <span className="text-blue-400">Now</span>
          </a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#newsletter" className="hover:text-white">Newsletter</a>
            <a href="#blog" className="hover:text-white">Guides</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onViewEvents={scrollToEvents} onSubmitEvent={openSubmitForm} />
        <div id="events" />
        <div id="top-seven">
          <SponsorMarquee sponsor={sponsor} />
          <TopSeven events={topEvents} />
        </div>
        <div id="newsletter">
          <NewsletterForm onSubmit={() => new Promise((r)=> setTimeout(r, 500))} />
        </div>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h3 className="mb-4 text-lg font-semibold text-white">Free & Cheap</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Free Open‑Air Yoga", "Student Night at Haus der Kunst", "Isar Cleanup + Beers"].map((t, i) => (
              <div key={i} className="rounded-lg border border-slate-800 bg-[#0E1424] p-4 text-sm text-slate-300">
                {t}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 py-8 text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Munich Now. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-200">Privacy</a>
              <a href="#" className="hover:text-slate-200">Terms</a>
              <a href="#" className="hover:text-slate-200">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
