import { Utensils, ShoppingBag, PartyPopper, Bike } from "lucide-react";

const services = [
  { icon: Utensils, title: "Dine-In", desc: "Enjoy a warm ambience, attentive service and a full traditional menu." },
  { icon: ShoppingBag, title: "Takeaway", desc: "Order ahead and pick up your favorite dishes, hot and ready to go." },
  { icon: PartyPopper, title: "Catering", desc: "From intimate gatherings to grand weddings — we cater every occasion." },
  { icon: Bike, title: "Online Delivery", desc: "Available on Zomato, Swiggy & our own delivery network." },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-gold/60 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-32 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative size-14 rounded-xl bg-gradient-gold grid place-items-center shadow-gold mb-5">
                <s.icon className="size-6 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
