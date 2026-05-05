import hotel from "@/assets/hotel.jpg";

export const Philosophy = () => (
  <section id="experience" className="py-32 container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="relative">
        <img src={hotel} alt="Park Hyatt Vienna facade" loading="lazy" width={1600} height={1000} className="w-full shadow-deep" />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-gold/30 p-8 max-w-xs shadow-gold">
          <p className="font-display text-3xl text-gradient-gold">100+</p>
          <p className="hairline text-[10px] mt-2 text-foreground/60">Years of imperial heritage</p>
        </div>
      </div>
      <div>
        <p className="hairline text-xs text-gold mb-6">The Sanctuary</p>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
          A treasury of <span className="italic text-gradient-gold">calm</span><br/>
          beneath the city.
        </h2>
        <div className="divider-gold mb-8" />
        <div className="space-y-5 text-foreground/75 font-light leading-relaxed">
          <p>
            Once the marble vault of Vienna's most storied bank, Arany Spa now safeguards a different fortune — the rare luxury of time.
          </p>
          <p>
            Our 1,000 m² subterranean retreat houses a black-marble pool, gilded steam chambers, an indoor sauna, and seven treatment suites where therapists practise traditions drawn from Asia, Europe, and the Pacific.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/60">
          {[
            { n: "1000", l: "m² Spa" },
            { n: "7", l: "Suites" },
            { n: "15m", l: "Pool" },
          ].map(s => (
            <div key={s.l}>
              <p className="font-display text-3xl text-gold">{s.n}</p>
              <p className="hairline text-[10px] text-foreground/50 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
