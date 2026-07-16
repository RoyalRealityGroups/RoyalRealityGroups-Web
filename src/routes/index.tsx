import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Building2, Trees, Handshake, Award, Headphones, ArrowRight, Star, Quote, ShieldCheck, BadgeCheck, Landmark, UserCheck, PhoneCall, Calendar } from "lucide-react";
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

const whyChooseUs = [
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: UserCheck, value: "500+", label: "Happy Customers" },
  { icon: ShieldCheck, value: "100%", label: "Verified Properties" },
  { icon: Landmark, value: "Free", label: "Loan Assistance" },
  { icon: BadgeCheck, value: "Full", label: "Registration Support" },
  { icon: PhoneCall, value: "24/7", label: "End-to-End Service" },
];

const projects = [
  { img: project1, title: "Chitra Vilasa Garden City", desc: "Well planned, budget-friendly plots giving investors the freedom to choose." },
  { img: project2, title: "Integral Sunrise City", desc: "Modern villas with premium finishes designed for elevated living." },
  { img: project3, title: "Royal Luxury Residences", desc: "Exquisite interiors and unparalleled service for the discerning few." },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Plot Owner, Chitra Vilasa",
    text: "Royal Reality Groups made my dream of owning a plot a reality. Their transparent dealings and professional approach gave me complete confidence. The documentation process was smooth and hassle-free.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Villa Owner, Integral Sunrise City",
    text: "From the first site visit to possession, the team was incredibly supportive. The villa quality exceeded our expectations. Best investment decision we've made for our family.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    role: "Investor",
    text: "I've invested in two projects with Royal Reality Groups. Both have given excellent returns. Their market knowledge and honest guidance set them apart from other developers.",
    rating: 5,
  },
  {
    name: "Sravani Devi",
    role: "Apartment Owner, Royal Luxury Residences",
    text: "The amenities, location, and build quality are top-notch. The team helped us with home loan processing and made the entire buying experience stress-free.",
    rating: 5,
  },
  {
    name: "Murali Krishna",
    role: "Plot Owner, Madhurawada",
    text: "Excellent service from start to finish. The team guided me through VMRDA approvals, documentation, and even helped with bank loan coordination. Highly recommend to anyone looking for property in Vizag.",
    rating: 5,
  },
];

function Index() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

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
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-primary/60 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10">
              Book Site Visit
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

      {/* Why Choose Royal Reality Groups */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Why Us</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Why Choose Royal Reality Groups</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {whyChooseUs.map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 font-serif text-2xl text-gold-gradient">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">What We Offer</p>
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

      {/* Lead Capture / Book Site Visit */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Ready to Visit?</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Book a Free Site Visit</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              See our projects in person. Our team will arrange a guided tour at your convenience.
              No obligation — just explore and decide.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Free pickup & drop available</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Expert guidance on site</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> No booking charges</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-primary" /> Flexible timing as per your schedule</li>
            </ul>
          </div>
          <div className="rounded-md border border-border/60 bg-card p-8">
            {bookingSubmitted ? (
              <div className="py-10 text-center">
                <BadgeCheck className="mx-auto h-12 w-12 text-green-500" />
                <h3 className="mt-4 font-serif text-2xl text-foreground">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">We'll call you shortly to confirm your visit.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}>
                <h3 className="mb-4 font-serif text-xl text-foreground">Book Site Visit</h3>
                <div className="space-y-4">
                  <input required placeholder="Your Name" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <select className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    <option value="">Property Interested In</option>
                    <option value="plots">Plots</option>
                    <option value="villas">Villas</option>
                    <option value="apartments">Apartments</option>
                    <option value="commercial">Commercial</option>
                  </select>
                  <input type="date" placeholder="Preferred Visit Date" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <div className="grid grid-cols-2 gap-3">
                    <button type="submit" className="flex items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                      <Calendar className="h-4 w-4" /> Book Visit
                    </button>
                    <a href="tel:+917993999958" className="flex items-center justify-center gap-2 rounded-sm border border-primary/60 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10">
                      <PhoneCall className="h-4 w-4" /> Callback
                    </a>
                  </div>
                </div>
              </form>
            )}
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

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">What Our Clients Say</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">Customer Testimonials</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-md border border-border/60 bg-card p-8">
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-serif text-lg text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
