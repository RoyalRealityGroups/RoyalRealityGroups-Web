import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Building2, Trees, Handshake, Award, Headphones, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { icon: MapPin, title: "Prime Locations", desc: "Strategically located plots close to amenities, transport and natural surroundings." },
  { icon: Building2, title: "Modern Amenities", desc: "Clubhouses, swimming pools, parks and 24/7 security systems." },
  { icon: Trees, title: "Vast Land", desc: "Spacious plots offering ample room for dream homes and gardens." },
  { icon: Handshake, title: "Transparent Dealings", desc: "Ethical practices, clear pricing and hassle-free transactions." },
  { icon: Award, title: "Expert Guidance", desc: "Seasoned advisors guiding you through every step of the journey." },
  { icon: Headphones, title: "Customer Support", desc: "Dedicated after-sales service and support you can rely on." },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Projects Complete" },
  { value: "40+", label: "Team Members" },
  { value: "15+", label: "Awards Winning" },
];

const projects = [
  { img: project1, title: "Chitra Vilasa Garden City", desc: "Well planned, budget-friendly plots giving investors the freedom to choose." },
  { img: project2, title: "Integral Sunrise City", desc: "Modern villas with premium finishes designed for elevated living." },
  { img: project3, title: "Royal Luxury Residences", desc: "Exquisite interiors and unparalleled service for the discerning few." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Luxury home at dusk" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Vision · Quality · Pride</p>
          <h1 className="font-serif text-5xl leading-tight text-foreground sm:text-6xl md:text-7xl">
            Crafting Your <span className="text-gold-gradient">Royal Abode</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Royal Reality Groups specializes in luxurious living spaces — premium properties,
            expert guidance and personalized service to help you find your ideal home.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-sm border border-primary/60 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Royal Reality Groups</p>
        <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Your Trusted Real Estate Partner</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg italic text-muted-foreground">
          "A house is built with bricks and mortar, but a home is built with love and care."
        </p>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          With years of experience and a deep understanding of the local market, we offer residential
          sales, commercial leasing, property management and more. Our commitment to excellence,
          combined with a personalized approach, ensures outstanding results for every client.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl text-gold-gradient md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Why Choose Us</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Features & Benefits</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-md border border-border/60 bg-card p-8 transition-colors hover:border-primary/60">
              <f.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-5 font-serif text-2xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border/60 bg-card py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Our Work</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Featured Projects</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-md border border-border/60 bg-background">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-sm border border-primary/60 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <img src={heroImg} alt="" aria-hidden width={1920} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">Let's Build Your Dream Home</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Ready to embark on your real estate journey? Schedule a consultation today.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
