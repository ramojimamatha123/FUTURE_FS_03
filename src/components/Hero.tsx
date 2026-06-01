import heroImg from "@/assets/hero.jpg";
import { Phone, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Sri Sai Family Restaurant elegant dining interior"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-gold mb-4">
            <span className="h-px w-8 bg-gold" />
            Since 1998
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05]">
            A Taste of <span className="text-gradient-gold">Tradition</span>,
            <br /> Served with Love.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground/80 max-w-xl leading-relaxed">
            Authentic Indian flavors crafted by master chefs. Join us for an unforgettable
            family dining experience in the heart of the city.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105 transition-transform"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold/60 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-gold hover:text-gold-foreground transition-all"
            >
              Explore Menu
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Call</p>
                <p className="text-sm font-semibold text-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Open</p>
                <p className="text-sm font-semibold text-foreground">11AM – 11PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
