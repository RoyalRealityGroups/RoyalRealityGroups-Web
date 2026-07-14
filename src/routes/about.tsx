import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ArrowRight } from "lucide-react";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Royal Reality Groups" },
      { name: "description", content: "Learn about Royal Reality Groups — a leading real estate firm crafting luxurious living spaces with excellence, innovation and integrity." },
      { property: "og:title", content: "About Us | Royal Reality Groups" },
      { property: "og:description", content: "Crafting luxurious living spaces, one property at a time." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Who We Are</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">About <span className="text-gold-gradient">Royal Reality Groups</span></h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <img src={project3} alt="Luxury interior" width={1200} height={900} loading="lazy" className="rounded-md border border-border/60 object-cover" />
        <div>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">Your Gateway to Opulent Living</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Royal Reality Groups is a leading real estate firm dedicated to exceptional service and
            helping clients find their dream homes. Every client deserves personalized attention — our
            dedicated team works closely with you to understand your unique needs and preferences.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From finding the perfect property to negotiating the best deal, our agents are committed to
            a seamless and stress-free experience, delivering competitive pricing without compromising
            on quality.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-md border border-border/60 bg-background p-8">
            <Target className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-serif text-2xl text-foreground">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To provide exceptional real estate services and help clients find their dream homes —
              crafting luxurious living spaces, one property at a time.
            </p>
          </div>
          <div className="rounded-md border border-border/60 bg-background p-8">
            <Eye className="h-10 w-10 text-primary" />
            <h3 className="mt-5 font-serif text-2xl text-foreground">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To be the leading real estate firm, renowned for excellence and innovation — redefining
              luxury living and creating lasting value for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">Ready to find your dream home?</h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
          Get In Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
