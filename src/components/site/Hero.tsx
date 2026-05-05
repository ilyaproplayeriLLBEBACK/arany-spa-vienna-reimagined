import hero from "@/assets/hero-spa.jpg";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={hero} alt="Arany Spa pool with golden ceiling" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
    <div className="absolute inset-0" style={{ background: 'var(--gradient-radial)' }} />

    <div className="relative container mx-auto text-center px-6 animate-float-up">
      <p className="hairline text-xs text-gold mb-8 animate-shimmer">Park Hyatt Vienna · Am Hof 2</p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight">
        Where stillness<br/>
        <span className="italic text-gradient-gold">is gilded</span> in gold.
      </h1>
      <div className="divider-gold mx-auto my-10" />
      <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/75 font-light leading-relaxed">
        A sanctuary born inside Vienna's former imperial bank vault. Treatments shaped by ancient ritual, performed in candlelight beneath gilded ceilings.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#book" className="inline-flex items-center justify-center text-xs hairline bg-gradient-gold text-primary-foreground px-10 py-4 shadow-gold hover:opacity-90 transition-opacity">
          Reserve a Treatment
        </a>
        <a href="#treatments" className="inline-flex items-center justify-center text-xs hairline border border-foreground/20 px-10 py-4 text-foreground/80 hover:border-gold hover:text-gold transition-colors">
          Explore the Menu
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs hairline text-foreground/40">
      Scroll
    </div>
  </section>
);
