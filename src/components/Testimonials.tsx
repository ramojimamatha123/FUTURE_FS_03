import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Food Blogger", text: "The biryani at Sri Sai is hands down the best in the city. Every spice sings — it's a memory in every bite.", rating: 5 },
  { name: "Rahul Verma", role: "Regular Guest", text: "We've been celebrating family birthdays here for 10 years. Warm hospitality and consistent flavors keep us coming back.", rating: 5 },
  { name: "Anita Reddy", role: "Event Planner", text: "Catered our 200-guest wedding flawlessly. The presentation and taste were world-class. Highly recommended!", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Words from our <span className="text-gradient-gold">Guests</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-gold/60 hover:-translate-y-1 transition-all shadow-card"
            >
              <Quote className="absolute top-6 right-6 size-10 text-gold/20" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
