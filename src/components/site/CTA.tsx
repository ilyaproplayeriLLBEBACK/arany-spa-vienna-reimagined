export const CTA = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0" style={{ background: 'var(--gradient-radial)' }} />
    <div className="container mx-auto px-6 text-center relative">
      <p className="hairline text-xs text-gold mb-6">Reserve</p>
      <h2 className="font-display text-4xl md:text-6xl font-light leading-tight max-w-3xl mx-auto">
        Your hour of <span className="italic text-gradient-gold">gold</span><br/>awaits.
      </h2>
      <div className="divider-gold mx-auto my-10" />
      <p className="text-foreground/70 max-w-lg mx-auto mb-10 font-light">
        Treatments may be reserved online or by direct line. Gift certificates available.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://shop.tac.eu.com/hyatt_europe/12/shop/reservations/category/" target="_blank" rel="noopener" className="inline-flex items-center justify-center text-xs hairline bg-gradient-gold text-primary-foreground px-10 py-4 shadow-gold">
          Book Online
        </a>
        <a href="tel:+4312274001236" className="inline-flex items-center justify-center text-xs hairline border border-foreground/20 text-foreground/80 px-10 py-4 hover:border-gold hover:text-gold transition-colors">
          Call Concierge
        </a>
      </div>
    </div>
  </section>
);
