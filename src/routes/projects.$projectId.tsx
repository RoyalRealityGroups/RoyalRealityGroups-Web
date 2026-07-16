import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Download, Calendar } from "lucide-react";
import { getPropertyById, properties } from "@/lib/properties";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const imageMap: Record<string, string> = {
  "chitra-vilasa-garden-city": project1,
  "integral-sunrise-city": project2,
  "royal-luxury-residences": project3,
};

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
  head: ({ params }) => {
    const property = getPropertyById(params.projectId);
    return {
      meta: [
        { title: `${property?.title || "Project"} | Royal Reality Groups` },
        { name: "description", content: property?.description || "" },
        { property: "og:title", content: `${property?.title || "Project"} | Royal Reality Groups` },
        { property: "og:description", content: property?.shortDesc || "" },
      ],
    };
  },
});

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const property = getPropertyById(projectId);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  if (!property) {
    throw notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-border/60 bg-card py-4">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-primary">Projects</Link>
          <span>/</span>
          <span className="text-foreground">{property.title}</span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={imageMap[property.id] || project1} alt={property.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="mx-auto max-w-6xl px-6">
            <span className={`inline-block rounded-sm px-3 py-1 text-xs font-semibold uppercase ${
              property.status === "completed" ? "bg-green-600 text-white" :
              property.status === "ongoing" ? "bg-primary text-primary-foreground" :
              "bg-amber-600 text-white"
            }`}>
              {property.status}
            </span>
            <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">{property.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl text-foreground">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{property.description}</p>

            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-serif text-3xl text-foreground">Highlights</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-serif text-3xl text-foreground">Amenities</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 rounded-md border border-border/60 px-4 py-3">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* Google Map */}
            {property.mapUrl && (
              <div>
                <h2 className="font-serif text-3xl text-foreground">Location Map</h2>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border border-border/60">
                  <iframe
                    src={property.mapUrl}
                    title={`${property.title} Location`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Downloads */}
            <div className="rounded-md border border-border/60 bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">Downloads</h3>
              <div className="mt-4 space-y-3">
                {property.brochureUrl && (
                  <a href={property.brochureUrl} className="flex items-center gap-3 rounded-sm border border-input px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary">
                    <Download className="h-4 w-4" /> Download Brochure
                  </a>
                )}
                {property.floorPlanUrl && (
                  <a href={property.floorPlanUrl} className="flex items-center gap-3 rounded-sm border border-input px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary">
                    <Download className="h-4 w-4" /> Download Floor Plan
                  </a>
                )}
              </div>
            </div>

            {/* Site Visit Booking */}
            <div className="rounded-md border border-border/60 bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">Book a Site Visit</h3>
              <p className="mt-2 text-sm text-muted-foreground">Schedule a free site visit with our team.</p>
              {bookingSubmitted ? (
                <p className="mt-4 text-sm text-green-600">Thank you! We'll confirm your visit shortly.</p>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}
                  className="mt-4 space-y-3"
                >
                  <input required placeholder="Your Name" className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                  <input required type="tel" placeholder="Phone Number" className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                  <input required type="date" className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary" />
                  <select className="w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary">
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (3 PM - 6 PM)</option>
                  </select>
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                    <Calendar className="h-4 w-4" /> Book Visit
                  </button>
                </form>
              )}
            </div>

            {/* Enquiry */}
            <div className="rounded-md border border-primary/30 bg-primary/5 p-6 text-center">
              <h3 className="font-serif text-xl text-foreground">Interested?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Get pricing details and availability.</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
