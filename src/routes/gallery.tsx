import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery | Royal Reality Groups" },
      { name: "description", content: "Browse the Royal Reality Groups gallery — luxury homes, premium residential communities and elegant interiors." },
      { property: "og:title", content: "Gallery | Royal Reality Groups" },
      { property: "og:description", content: "A glimpse into our world of luxury living." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const images = [
  { src: heroImg, alt: "Luxury mansion at dusk", span: "md:col-span-2 md:row-span-2" },
  { src: project2, alt: "Modern villa exterior", span: "" },
  { src: project3, alt: "Elegant living room interior", span: "" },
  { src: project1, alt: "Aerial view of residential community", span: "md:col-span-2" },
];

function Gallery() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Recent Work</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Our <span className="text-gold-gradient">Gallery</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">A glimpse into our world of luxury living and exceptional craftsmanship.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.alt} className={`group overflow-hidden rounded-md border border-border/60 ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
