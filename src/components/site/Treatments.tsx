import massage from "@/assets/massage.jpg";
import stones from "@/assets/stones.jpg";
import foot from "@/assets/foot.jpg";
import aroma from "@/assets/aroma.jpg";

const treatments = [
  {
    img: massage,
    name: "Deep Tissue Massage",
    desc: "Warming essences applied by skilled hands ease low-lying tensions and dissolve hardened muscles. The perfect remedy after exertion or travel.",
    options: [
      { d: "45 min", p: "€145" },
      { d: "60 min", p: "€160" },
      { d: "90 min", p: "€240" },
    ],
  },
  {
    img: aroma,
    name: "Serenity Aromatherapy",
    desc: "Aromatic essences with a positive effect on well-being. Physical and emotional blockages are released as the skin is nourished with precious oils.",
    options: [
      { d: "45 min", p: "€145" },
      { d: "60 min", p: "€160" },
      { d: "90 min", p: "€240" },
    ],
  },
  {
    img: stones,
    name: "Tiger Hot Stone Massage",
    desc: "An ancient Australian healing stone combined with warm aromatic essences. Soothing heat penetrates deep into muscles, relieving tension and restoring inner harmony.",
    options: [
      { d: "90 min", p: "€280" },
    ],
  },
  {
    img: foot,
    name: "Radiant Foot Therapy",
    desc: "Foot reflexology with a positive effect on the entire body — promoting self-healing while quietly soothing the nervous system.",
    options: [
      { d: "30 min", p: "€95" },
      { d: "45 min", p: "€125" },
    ],
  },
];

export const Treatments = () => (
  <section id="treatments" className="py-32 bg-card/50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="hairline text-xs text-gold mb-6">The Menu</p>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
          Treatments shaped by <span className="italic text-gradient-gold">ritual</span>.
        </h2>
        <div className="divider-gold mx-auto my-8" />
        <p className="text-foreground/70 font-light">
          Every journey begins with a personal consultation. Each treatment is tailored to the rhythm of your day.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {treatments.map((t) => (
          <article key={t.name} className="group bg-background border border-border/60 hover:border-gold/40 transition-all duration-700">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl md:text-3xl mb-4">{t.name}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed font-light mb-8">{t.desc}</p>
              <ul className="space-y-3 pt-6 border-t border-border/60">
                {t.options.map(o => (
                  <li key={o.d} className="flex items-baseline justify-between">
                    <span className="hairline text-xs text-foreground/60">{o.d}</span>
                    <span className="flex-1 mx-4 border-b border-dotted border-border/60" />
                    <span className="font-display text-xl text-gold">{o.p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center mt-16 text-xs hairline text-foreground/50">
        Full ritual menu also includes facials, body wraps, couples' suites & day passes — request on booking.
      </p>
    </div>
  </section>
);
