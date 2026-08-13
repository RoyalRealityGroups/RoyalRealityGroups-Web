import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Download, Calendar, Lock, Image, Loader2 } from "lucide-react";
import { getPropertyById, properties } from "@/lib/properties";
import { submitLead } from "@/lib/api";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const imageMap: Record<string, string> = {
  "ak-chitra-vilasa-garden-city": "/AK.jpg",
  "anand-vihar": project1,
  "city-of-gold-by-iconica": "/IMG_20260724_125441.jpg",
  "cmr-karlan-grand": "/CMR.jpg",
  "cmr-karlan-one": project2,
  "cmr-karlan-residency": "/Reidency.jpg",
  "cmr-karlan-square": "/Square.jpg",
  "iconica-capitol-and-crown": "/iconic.jpg",
  "integrals-sunrise-city": "/integral-project.jpg",
  "irise-prime": project3,
  "lorven-heights": "/Lorvens Heights Elevation.jpeg",
  "navayuga-plotting": "/plotting.jpg",
  "northstar-golden-valley": "/NORTH.jpg",
  "prasanthi-nilayam": "/PRASANTI.jpg",
  "rudra-seniors": "/rudra.jpg",
  "siri-nirman-blue-arena": "/blue arena.jpg",
  "sss-dream-homes": project3,
  "sss-grand-homes": project3,
  "sss-sunrise": project1,
  "yaksha-abode": "/yaksha abode.jpg",
  "yaksha-pride": project2,
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
  const [locationUnlocked, setLocationUnlocked] = useState(false);
  const [locationForm, setLocationForm] = useState({ name: '', mobile: '', email: '' });
  const [contentUnlocked, setContentUnlocked] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', mobile: '', email: '' });
  const [showLeadGate, setShowLeadGate] = useState(false);
  const [pendingAction, setPendingAction] = useState<string | null>(null);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState('');

  if (!property) {
    throw notFound();
  }

  const handleLockedAction = (action: string) => {
    if (contentUnlocked) {
      performAction(action);
    } else {
      setPendingAction(action);
      setShowLeadGate(true);
    }
  };

  const performAction = (action: string) => {
    if (action === 'brochure' && property.brochureUrl) {
      window.open(property.brochureUrl, '_blank');
    } else if (action === 'floorplan' && property.floorPlanUrl) {
      window.open(property.floorPlanUrl, '_blank');
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitting(true);
    setLeadError('');

    const result = await submitLead({
      name: leadForm.name,
      mobile: leadForm.mobile,
      email: leadForm.email || undefined,
      lead_source: "WEBSITE",
      property_requirement: property.title,
      remarks: `Requested ${pendingAction || 'download'} for ${property.title}`,
    });

    setLeadSubmitting(false);

    if (result.success) {
      setContentUnlocked(true);
      setShowLeadGate(false);
      if (pendingAction) {
        performAction(pendingAction);
        setPendingAction(null);
      }
    } else {
      setLeadError(result.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Back Button + Breadcrumb */}
      <section className="border-b border-border/60 bg-card pt-24 pb-4">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg border border-[#14345A] px-4 py-2 text-sm font-medium text-[#14345A] hover:bg-[#14345A] hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={imageMap[property.id] || project1} alt={property.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl">{property.title}</h1>
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
                {locationUnlocked ? (
                  <div className="mt-4 aspect-video overflow-hidden rounded-md border border-border/60">
                    <iframe
                      src={property.mapUrl}
                      title={`${property.title} Location`}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                ) : (
                  <div className="mt-4 relative rounded-md border border-border/60 bg-[#F8FAFC] p-8">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#F8FAFC]/0 to-[#F8FAFC] pointer-events-none" />
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">
                        <svg className="h-8 w-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h3 className="font-serif text-xl text-[#1F2937]">View Project Location</h3>
                      <p className="mt-2 text-sm text-[#6B7280]">Share your details to view the exact location on Google Maps.</p>
                      <form
                        onSubmit={(e) => { e.preventDefault(); setLocationUnlocked(true); }}
                        className="mt-6 mx-auto max-w-sm space-y-3"
                      >
                        <input
                          required
                          placeholder="Your Name"
                          value={locationForm.name}
                          onChange={(e) => setLocationForm({ ...locationForm, name: e.target.value })}
                          className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                        />
                        <input
                          required
                          type="tel"
                          placeholder="Mobile Number"
                          value={locationForm.mobile}
                          onChange={(e) => setLocationForm({ ...locationForm, mobile: e.target.value })}
                          className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                        />
                        <input
                          type="email"
                          placeholder="Email (optional)"
                          value={locationForm.email}
                          onChange={(e) => setLocationForm({ ...locationForm, email: e.target.value })}
                          className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
                        />
                        <button type="submit" className="w-full rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B] transition-colors">
                          View Location
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Downloads - Locked */}
            <div className="rounded-md border border-border/60 bg-card p-6">
              <h3 className="font-serif text-xl text-foreground">Downloads</h3>
              <div className="mt-4 space-y-3">
                {property.brochureUrl && (
                  <button
                    onClick={() => handleLockedAction('brochure')}
                    className="flex w-full items-center gap-3 rounded-sm border border-input px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {contentUnlocked ? <Download className="h-4 w-4" /> : <Lock className="h-4 w-4 text-[#D4AF37]" />}
                    Download Brochure
                  </button>
                )}
                {property.floorPlanUrl && (
                  <button
                    onClick={() => handleLockedAction('floorplan')}
                    className="flex w-full items-center gap-3 rounded-sm border border-input px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {contentUnlocked ? <Download className="h-4 w-4" /> : <Lock className="h-4 w-4 text-[#D4AF37]" />}
                    Download Floor Plan
                  </button>
                )}
                {property.images && property.images.length > 1 && (
                  <button
                    onClick={() => handleLockedAction('photos')}
                    className="flex w-full items-center gap-3 rounded-sm border border-input px-4 py-3 text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {contentUnlocked ? <Image className="h-4 w-4" /> : <Lock className="h-4 w-4 text-[#D4AF37]" />}
                    View More Photos
                  </button>
                )}
              </div>
              {!contentUnlocked && (
                <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                  <Lock className="h-3 w-3" /> Enter your details to unlock downloads
                </p>
              )}
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

      {/* Lead Gate Modal */}
      {showLeadGate && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4" onClick={() => setShowLeadGate(false)}>
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowLeadGate(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold">&times;</button>
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">
                <Lock className="h-7 w-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-xl text-[#14345A]">Unlock Project Details</h3>
              <p className="mt-2 text-sm text-[#6B7280]">Enter your details to access brochures, floor plans, and project photos.</p>
            </div>
            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <input
                required
                placeholder="Your Name"
                value={leadForm.name}
                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
              />
              <input
                required
                type="tel"
                placeholder="Mobile Number"
                value={leadForm.mobile}
                onChange={(e) => setLeadForm({ ...leadForm, mobile: e.target.value })}
                className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#D4AF37]"
              />
              {leadError && (
                <p className="text-sm text-red-600">{leadError}</p>
              )}
              <button
                type="submit"
                disabled={leadSubmitting}
                className="w-full rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {leadSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {leadSubmitting ? 'Submitting...' : 'Unlock Content'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
