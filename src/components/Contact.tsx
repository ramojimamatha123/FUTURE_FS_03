import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Reserve Your <span className="text-gradient-gold">Table</span>
          </h2>
          <p className="mt-4 text-foreground/70">
            We'd love to host you. Send us a message or call directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "12, MG Road, Jayanagar 4th Block, Bengaluru, KA 560011" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210" },
              { icon: Mail, title: "Email", text: "hello@srisaifamily.com" },
              { icon: Clock, title: "Opening Hours", text: "Mon – Sun: 11:00 AM – 11:00 PM" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-gold/60 transition-colors">
                <div className="size-11 rounded-xl bg-gradient-gold grid place-items-center shrink-0 shadow-gold">
                  <c.icon className="size-5 text-gold-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{c.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-video">
              <iframe
                title="Sri Sai Family Restaurant location"
                src="https://www.google.com/maps?q=Jayanagar+4th+Block,+Bengaluru&output=embed"
                className="size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Phone" name="phone" placeholder="+91 ..." required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Date" name="date" type="date" required />
              <Field label="Guests" name="guests" type="number" placeholder="2" required />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Any special requests…"
                className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
            >
              <Send className="size-4" /> {sent ? "Reservation Sent!" : "Send Reservation"}
            </button>
            {sent && (
              <p className="text-center text-sm text-gold animate-fade-in">
                Thank you! We'll confirm your booking shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg bg-input border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors"
      />
    </div>
  );
}
