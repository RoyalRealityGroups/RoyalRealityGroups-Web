import { useState } from "react";
import { createFileRoute, Link, Outlet, useMatch } from "@tanstack/react-router";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { properties, filterProperties } from "@/lib/properties";

// Map property IDs to imported images so Vite resolves them correctly
const imageMap: Record<string, string> = {
  "chitra-vilasa-garden-city": project1,
  "integral-sunrise-city": project2,
  "royal-luxury-residences": project3,
};

export const Route = createFileRoute("/projects")({
  component: ProjectsLayout,
  head: () => ({
    meta: [
      { title: "Projects | Royal Reality Groups" },
      { name: "description", content: "Explore Royal Reality Groups' exceptional residential and commercial projects — spacious layouts, modern amenities and thriving communities in Visakhapatnam." },
      { property: "og:title", content: "Projects | Royal Reality Groups" },
      { property: "og:description", content: "Exceptional residential and commercial projects that redefine luxury living." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsLayout() {
  try {
    const match = useMatch({ from: "/projects/$projectId", shouldThrow: false });
    if (match) {
      return <Outlet />;
    }
  } catch {
    // No child match
  }
  return <Projects />;
}
function Projects() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = filterProperties({
    type: typeFilter,
    status: statusFilter,
    location: locationFilter,
    search,
  });

  const locations = [...new Set(properties.map((p) => p.location))];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('/photo-1600585154340-be6161a56a0c.avif')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/50 via-[#0B1F3A]/70 to-[#0B1F3A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#D4AF37]/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-[#D4AF37] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block drop-shadow">OUR PORTFOLIO</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Our <span className="text-[#D4AF37]">Projects</span></h1>
          <p className="text-[#E5E7EB] text-base leading-relaxed max-w-xl mx-auto mb-6">Meticulously planned projects offering unmatched quality, spacious layouts, and modern amenities.</p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="border-b border-border/60 bg-card py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects by name, location, or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-sm border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="inline-flex items-center gap-2 rounded-sm border border-input px-4 py-2.5 text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option value="all">All Types</option>
                <option value="plot">Plots</option>
                <option value="villa">Villas</option>
                <option value="apartment">Apartments</option>
                <option value="commercial">Commercial</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="upcoming">Upcoming</option>
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Project Listings */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No projects match your search criteria.</p>
            <button
              onClick={() => { setSearch(""); setTypeFilter("all"); setStatusFilter("all"); setLocationFilter("all"); }}
              className="mt-4 text-sm text-primary underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-md border border-border/60 bg-card transition-colors hover:border-primary/40">
                <div className="relative overflow-hidden">
                  <img src={imageMap[p.id] || project1} alt={p.title} width={600} height={400} loading="lazy" className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.shortDesc}</p>

                  <div className="mt-4 flex items-center justify-end">
                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: p.id }}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-[#0B1F3A]">Can't find what you're looking for?</h2>
          <p className="mt-3 text-[#6B7280]">Tell us your requirements and we'll help you find the perfect property.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#0B1F3A] hover:bg-[#C79A1B]">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
