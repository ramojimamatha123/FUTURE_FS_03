import biryani from "@/assets/dish-biryani.jpg";
import butter from "@/assets/dish-butter-chicken.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import gulab from "@/assets/dish-gulab.jpg";
import chai from "@/assets/dish-chai.jpg";

const imgs = [
  { src: biryani, span: "lg:col-span-2 lg:row-span-2" },
  { src: butter, span: "" },
  { src: dosa, span: "" },
  { src: paneer, span: "lg:col-span-2" },
  { src: gulab, span: "" },
  { src: chai, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Gallery</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            A Feast for the <span className="text-gradient-gold">Eyes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {imgs.map((im, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl group shadow-card ${im.span}`}
            >
              <img
                src={im.src}
                alt={`Dish ${i + 1}`}
                loading="lazy"
                className="size-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  Chef's Pick
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
