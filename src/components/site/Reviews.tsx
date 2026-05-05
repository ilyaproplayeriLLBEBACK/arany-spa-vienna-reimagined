import { Star } from "lucide-react";

const reviews = [
  {
    name: "Elena M.",
    origin: "Local Guide · Vienna",
    text: "The most beautiful spa I have ever set foot in. The pool beneath that gilded ceiling is something out of a dream — and the deep tissue massage was world-class.",
  },
  {
    name: "Thomas K.",
    origin: "Munich",
    text: "An oasis hidden inside the old bank vault. Impeccable therapists, immaculate facility, complete privacy. Worth every euro.",
  },
  {
    name: "Aiko S.",
    origin: "Tokyo",
    text: "I have visited spas across Asia and Europe — Arany stands apart for its atmosphere alone. The aromatherapy treatment was deeply restorative.",
  },
  {
    name: "Sophie L.",
    origin: "Paris",
    text: "Service as elegant as the architecture. Tea served before and after, robes warm, every detail considered. A true Park Hyatt experience.",
  },
];

export const Reviews = () => (
  <section id="reviews" className="py-32 container mx-auto px-6">
    <div className="text-center mb-20">
      <p className="hairline text-xs text-gold mb-6">In Their Words</p>
      <h2 className="font-display text-4xl md:text-5xl font-light">
        Rated <span className="text-gradient-gold">4.8</span> on Google
      </h2>
      <div className="flex justify-center gap-1 mt-6 text-gold">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {reviews.map((r, i) => (
        <figure key={i} className="bg-card/40 border border-border/60 p-10 relative">
          <span className="absolute -top-6 left-8 font-display text-7xl text-gold/30 leading-none">"</span>
          <blockquote className="font-display text-xl md:text-2xl font-light italic leading-snug text-foreground/85 mb-8">
            {r.text}
          </blockquote>
          <figcaption>
            <p className="hairline text-xs text-gold">{r.name}</p>
            <p className="text-xs text-foreground/50 mt-1">{r.origin}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
