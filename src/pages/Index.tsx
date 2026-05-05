import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { Treatments } from "@/components/site/Treatments";
import { Reviews } from "@/components/site/Reviews";
import { Visit } from "@/components/site/Visit";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Arany Spa Vienna — Luxury Day Spa at Park Hyatt";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); return m;
    })();
    meta.setAttribute('content', "Arany Spa at Park Hyatt Vienna — gilded sanctuary in the old bank vault. Massages, aromatherapy, hot stones & rituals. Reserve online.");
  }, []);

  return (
    <main>
      <Nav />
      <Hero />
      <Philosophy />
      <Treatments />
      <Reviews />
      <Visit />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
