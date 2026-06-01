import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="size-9 rounded-full bg-gradient-gold grid place-items-center shadow-gold">
            <UtensilsCrossed className="size-4 text-gold-foreground" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-gold transition-colors">
              Sri Sai
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Family Restaurant</p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105 transition-transform"
        >
          Reserve a Table
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <ul className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block px-3 py-3 rounded-lg text-foreground/90 hover:bg-secondary hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="block text-center rounded-full bg-gradient-gold px-5 py-3 font-semibold text-gold-foreground shadow-gold"
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
