import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#treatments", label: "Treatments" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <a href="#" className="font-display text-xl tracking-wider">
          <span className="text-gradient-gold">Arany</span>
          <span className="text-foreground/80"> Spa</span>
        </a>
        <ul className="hidden md:flex items-center gap-10 text-xs hairline text-foreground/70">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#book" className="hidden md:inline-flex items-center text-xs hairline border border-gold/60 px-5 py-3 text-gold hover:bg-gold hover:text-primary-foreground transition-all">
          Reserve
        </a>
        <button className="md:hidden text-gold" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <ul className="container mx-auto py-6 space-y-4 text-sm hairline">
            {links.map(l => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-2">{l.label}</a></li>
            ))}
            <li><a href="#book" onClick={() => setOpen(false)} className="block text-gold">Reserve</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};
