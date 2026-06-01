import biryani from "@/assets/dish-biryani.jpg";
import butter from "@/assets/dish-butter-chicken.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import gulab from "@/assets/dish-gulab.jpg";
import chai from "@/assets/dish-chai.jpg";
import { Flame } from "lucide-react";

const items = [
  { img: biryani, name: "Hyderabadi Dum Biryani", desc: "Fragrant basmati layered with spiced chicken & saffron.", price: "₹320", tag: "Bestseller" },
  { img: butter, name: "Butter Chicken", desc: "Tandoor-roasted chicken in creamy tomato-cashew gravy.", price: "₹340" },
  { img: dosa, name: "Masala Dosa", desc: "Crisp rice crepe stuffed with spiced potato masala.", price: "₹160", tag: "Veg" },
  { img: paneer, name: "Paneer Tikka", desc: "Charcoal-grilled cottage cheese with bell peppers.", price: "₹280", tag: "Veg" },
  { img: gulab, name: "Gulab Jamun", desc: "Warm milk dumplings soaked in rose-cardamom syrup.", price: "₹120" },
  { img: chai, name: "Masala Chai", desc: "Slow-brewed Assam tea with ginger and spices.", price: "₹60" },
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Menu</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Signature <span className="text-gradient-gold">Specialties</span>
          </h2>
          <p className="mt-4 text-foreground/70">
            Hand-picked favorites from our kitchen — crafted to perfection, served with pride.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <article
              key={it.name}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/60 hover:-translate-y-2 transition-all duration-300 shadow-card animate-fade-up"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {it.tag && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-card">
                    <Flame className="size-3" /> {it.tag}
                  </span>
                )}
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                    {it.name}
                  </h3>
                  <span className="font-display text-xl font-bold text-gold shrink-0">{it.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-gold/60 px-7 py-3 text-sm font-semibold text-foreground hover:bg-gold hover:text-gold-foreground transition-all"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
