import { MapPin, Clock, Phone, Mail } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address", value: "Am Hof 2, 1010 Vienna, Austria" },
  { icon: Clock, label: "Open Daily", value: "08:00 — 22:00" },
  { icon: Phone, label: "Reservations", value: "+43 1 22740 1236" },
  { icon: Mail, label: "Email", value: "spa.vienna@hyatt.com" },
];

export const Visit = () => (
  <section id="visit" className="py-32 bg-card/50">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="hairline text-xs text-gold mb-6">Visit</p>
        <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
          In the heart of <span className="italic text-gradient-gold">old Vienna</span>.
        </h2>
        <div className="divider-gold mb-10" />
        <ul className="space-y-7">
          {info.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex gap-5">
              <span className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                <Icon className="w-4 h-4" />
              </span>
              <div>
                <p className="hairline text-[10px] text-foreground/50">{label}</p>
                <p className="font-display text-lg mt-1">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="book" className="relative aspect-square w-full overflow-hidden border border-border/60 shadow-deep">
        <iframe
          title="Arany Spa location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5!2d16.3683895!3d48.2104775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07987715a5d9%3A0xeb7ca654b7e9c86e!2sArany%20Spa%20Vienna!5e0!3m2!1sen!2sat!4v1700000000000"
          className="w-full h-full grayscale-[60%] contrast-125 brightness-75"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);
