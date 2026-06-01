import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Sai Family Restaurant — Authentic Indian Cuisine in Bengaluru" },
      { name: "description", content: "Sri Sai Family Restaurant serves authentic South and North Indian cuisine. Dine-in, takeaway, catering & delivery. Reserve your table today." },
      { property: "og:title", content: "Sri Sai Family Restaurant" },
      { property: "og:description", content: "Authentic Indian flavors, 25 years of tradition. Reserve your table." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
