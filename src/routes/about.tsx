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
    <div className="bg-white">
      <section className="relative w-full py-20 md:py-28 bg-[#0B1528] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('/photo-1545324418-cc1a3fa10c00.jpg')` }} />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/50 via-[#0B1528]/70 to-[#0B1528]" />
        {/* Subtle Warm Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/15 blur-[100px] rounded-full pointer-events-none" />
        {/* Banner Content */}
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-amber-400 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block drop-shadow">WHO WE ARE</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">About <span className="text-amber-500">Royal Reality Groups</span></h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl mx-auto mb-6">Crafting luxurious living spaces with excellence, innovation, and integrity since day one. Your trusted partner in premium real estate.</p>
          {/* Gold Diamond Accent Line */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-amber-500/70" />
            <div className="w-2 h-2 rotate-45 bg-amber-500" />
            <div className="h-[1px] w-12 bg-amber-500/70" />
          </div>
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
    </div>
  );
}
