import { Facebook, Instagram, Twitter, Youtube, UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-full bg-gradient-gold grid place-items-center shadow-gold">
                <UtensilsCrossed className="size-4 text-gold-foreground" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold text-foreground">Sri Sai</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Family Restaurant</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              A 25-year-old family-run kitchen serving authentic Indian flavors with love,
              tradition, and the freshest ingredients.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="size-10 rounded-full border border-border grid place-items-center text-foreground/70 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all hover:-translate-y-1"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-bold text-foreground mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "About", "Menu", "Gallery", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display font-bold text-foreground mb-4">Visit Us</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>12, MG Road, Jayanagar</li>
              <li>Bengaluru, KA 560011</li>
              <li className="text-gold">+91 98765 43210</li>
              <li>Open 11AM – 11PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sri Sai Family Restaurant. All rights reserved.</p>
          <p>Crafted with <span className="text-primary">♥</span> for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}
