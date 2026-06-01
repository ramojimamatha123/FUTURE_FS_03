import { Award, Users, Soup } from "lucide-react";
import dish from "@/assets/dish-butter-chicken.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years of Service" },
  { icon: Users, value: "50K+", label: "Happy Guests" },
  { icon: Soup, value: "120+", label: "Signature Dishes" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 size-32 border-2 border-gold/40 rounded-2xl hidden sm:block" />
          <div className="absolute -bottom-6 -right-6 size-32 bg-primary/20 rounded-2xl hidden sm:block" />
          <img
            src={dish}
            alt="Signature butter chicken"
            loading="lazy"
            width={800}
            height={800}
            className="relative rounded-2xl shadow-card w-full aspect-square object-cover"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">About Us</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground leading-tight">
            Where every meal is a <span className="text-gradient-gold">celebration</span>.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            For over two decades, Sri Sai Family Restaurant has been a beloved destination for
            authentic South and North Indian cuisine. Our recipes have been passed down through
            generations, and our chefs prepare each dish with the freshest local ingredients
            and time-honored techniques.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            From sizzling tandoori specialties to comforting family thalis, every plate tells a
            story of heritage, warmth, and devotion to flavor.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-4 sm:p-5 text-center hover:border-gold/60 hover:-translate-y-1 transition-all"
              >
                <s.icon className="size-6 text-gold mx-auto mb-2" />
                <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
