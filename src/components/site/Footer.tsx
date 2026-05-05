export const Footer = () => (
  <footer className="border-t border-border/60 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-foreground/50">
      <p className="font-display text-lg">
        <span className="text-gradient-gold">Arany</span> Spa
      </p>
      <p className="hairline text-[10px]">© {new Date().getFullYear()} Park Hyatt Vienna · All rights reserved</p>
      <div className="flex gap-6 hairline text-[10px]">
        <a href="#" className="hover:text-gold">Privacy</a>
        <a href="#" className="hover:text-gold">Terms</a>
        <a href="#" className="hover:text-gold">Imprint</a>
      </div>
    </div>
  </footer>
);
