import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Building2, Trees, Handshake, Award, Headphones, ArrowRight, Star, Quote, ShieldCheck, BadgeCheck, Landmark, UserCheck, PhoneCall, Calendar, Home as HomeIcon, Store, Leaf } from "lucide-react";
const heroImg = "/family.png";
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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        {/* Background */}
        <img src={heroImg} alt="Hero" className="absolute inset-0 h-full w-full object-cover object-center" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl sm:text-6xl font-serif text-white leading-tight">
              Your Gateway to<br />
              <span className="italic text-yellow-400">Premium Living</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-white">
              Discover luxurious plots and homes in prime locations of<strong> Visakhapatnam.</strong>
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/projects" className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-semibold px-6 py-3 rounded transition-all text-sm tracking-wider">
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="border border-white text-white font-medium px-6 py-3 rounded transition-all hover:bg-white/10 text-sm tracking-wider">
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Strip */}
      <div className="w-full bg-[#0B1F3A]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-12">
          {[
            { icon: HomeIcon, label: "Premium", sub: "Villas" },
            { icon: Building2, label: "Modern", sub: "Apartments" },
            { icon: MapPin, label: "Gated Community", sub: "Plots" },
            { icon: Landmark, label: "Commercial", sub: "Spaces" },
            { icon: Store, label: "Retail", sub: "Shops" },
            { icon: Leaf, label: "Green &", sub: "Sustainable" },
          ].map((item) => (
            <div key={item.sub} className="flex items-center gap-2">
              <item.icon className="h-5 w-5 text-[#D4AF37]" />
              <div>
                <p className="text-xs font-medium text-white/90">{item.label}</p>
                <p className="text-xs font-bold text-white">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Royal Reality Groups</p>
        <h2 className="mt-4 font-serif text-4xl text-[#0B1F3A] md:text-5xl">Your Trusted Real Estate Partner</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg italic text-[#6B7280]">
          "A house is built with bricks and mortar, but a home is built with love and care."
        </p>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-[#4B5563]">
          With years of experience and a deep understanding of the local market, we offer residential
          sales, commercial leasing, property management and more. Our commitment to excellence,
          combined with a personalized approach, ensures outstanding results for every client.
        </p>
      </section>

      {/* Why Choose Royal Reality Groups */}
      <section className="bg-[#0B1F3A]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Why Us</p>
            <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">Why Choose Royal Reality Groups</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {whyChooseUs.map((item) => (
              <div key={item.label} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <item.icon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <p className="mt-3 font-serif text-2xl font-bold text-[#D4AF37]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#E5E7EB]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">What We Offer</p>
          <h2 className="mt-4 font-serif text-4xl text-[#0B1F3A] md:text-5xl">Features & Benefits</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:border-[#D4AF37] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F3A]">
                <f.icon className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[#0B1F3A]">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Our Work</p>
            <h2 className="mt-4 font-serif text-4xl text-[#0B1F3A] md:text-5xl">Featured Projects</h2>
            <div className="mx-auto mt-3 h-[2px] w-16 bg-[#D4AF37]" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-md">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#0B1F3A]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0B1F3A] px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture / Book Site Visit */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Ready to Visit?</p>
            <h2 className="mt-4 font-serif text-4xl text-[#0B1F3A] md:text-5xl">Book a Free Site Visit</h2>
            <p className="mt-5 leading-relaxed text-[#6B7280]">
              See our projects in person. Our team will arrange a guided tour at your convenience.
              No obligation — just explore and decide.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#6B7280]">
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#D4AF37]" /> Free pickup & drop available</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#D4AF37]" /> Expert guidance on site</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#D4AF37]" /> No booking charges</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-[#D4AF37]" /> Flexible timing as per your schedule</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
            {bookingSubmitted ? (
              <div className="py-10 text-center">
                <BadgeCheck className="mx-auto h-12 w-12 text-[#16A34A]" />
                <h3 className="mt-4 font-serif text-2xl text-[#0B1F3A]">Thank You!</h3>
                <p className="mt-2 text-sm text-[#6B7280]">We'll call you shortly to confirm your visit.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}>
                <h3 className="mb-4 font-serif text-xl text-[#0B1F3A]">Book Site Visit</h3>
                <div className="space-y-4">
                  <input required placeholder="Your Name" className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                  <select className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]">
                    <option value="">Property Interested In</option>
                    <option value="plots">Plots</option>
                    <option value="villas">Villas</option>
                    <option value="apartments">Apartments</option>
                    <option value="commercial">Commercial</option>
                  </select>
                  <input type="date" placeholder="Preferred Visit Date" className="w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]" />
                  <div className="grid grid-cols-2 gap-3">
                    <button type="submit" className="flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#0B1F3A] hover:bg-[#C79A1B]">
                      <Calendar className="h-4 w-4" /> Book Visit
                    </button>
                    <a href="tel:+917993999958" className="flex items-center justify-center gap-2 rounded-lg border border-[#0B1F3A] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white">
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85))" }} />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl text-white md:text-5xl">Let's Build Your Dream Home</h2>
          <p className="mt-5 text-lg text-[#E5E7EB]">
            Ready to embark on your real estate journey? Schedule a consultation today.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0B1F3A] transition-all hover:bg-[#C79A1B] hover:shadow-lg">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">What Our Clients Say</p>
            <h2 className="mt-4 font-serif text-4xl text-[#0B1F3A] md:text-5xl">Customer Testimonials</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Quote className="h-8 w-8 text-[#D4AF37]/30" />
                <p className="mt-4 text-sm leading-relaxed text-[#6B7280] italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A]/10 font-serif text-lg text-[#0B1F3A]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0B1F3A]">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#F4B400] text-[#F4B400]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
