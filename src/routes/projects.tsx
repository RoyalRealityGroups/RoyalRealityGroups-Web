import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects | Royal Reality Groups" },
      { name: "description", content: "Explore Royal Reality Groups' exceptional residential and commercial projects — spacious layouts, modern amenities and thriving communities." },
      { property: "og:title", content: "Projects | Royal Reality Groups" },
      { property: "og:description", content: "Exceptional residential and commercial projects that redefine luxury living." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  { img: project1, title: "Chitra Vilasa Garden City", location: "Madhurawada, Visakhapatnam", desc: "Well planned and budget-friendly plot variations, giving investors the independent decision to select the ideal parcel for their dream home." },
  { img: project2, title: "Integral Sunrise City", location: "Visakhapatnam Outskirts", desc: "Modern villas and premium residential plots with contemporary architecture, gated security and lush green landscaping." },
  { img: project3, title: "Royal Luxury Residences", location: "Prime City Center", desc: "Exquisite interiors, high-end finishes and unparalleled service for those who demand the very finest in real estate." },
];

function Projects() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-center">
        <img src={heroImg} alt="" aria-hidden width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Our Portfolio</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Our <span className="text-gold-gradient">Projects</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Meticulously planned projects offering unmatched quality, spacious layouts and modern
            amenities — thriving communities for discerning tastes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-16 px-6 py-24">
        {projects.map((p, i) => (
          <article key={p.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>img]:order-2" : ""}`}>
            <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="rounded-md border border-border/60 object-cover" />
            <div>
              <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-primary"><MapPin className="h-4 w-4" /> {p.location}</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">{p.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm border border-primary/60 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
