import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
  { img: "/iconic.jpg", title: "Iconica Capitol & Crown", id: "iconica-capitol-and-crown", desc: "Ultra-luxury residences with private gardens, smart home features, and world-class amenities in a premium gated community.", location: "Visakhapatnam" },
  { img: "/integral-project.jpg", title: "Integral's Sunrise City", id: "integrals-sunrise-city", desc: "Premium gated community villas with lush green surroundings, modern amenities, and excellent connectivity near Anandapuram.", location: "Visakhapatnam" },
  { img: "/blue arena.jpg", title: "Siri Nirman – Blue Arena", id: "siri-nirman-blue-arena", desc: "A landmark project offering spacious homes with contemporary design, premium finishes, and prime location advantage.", location: "Visakhapatnam" },
];

const testimonials = [
  {
    name: "Anil Kumar Reddy",
    role: "Apartment Owner, Iconica",
    location: "Madhurawada, Visakhapatnam",
    text: "Royal Reality Groups helped us find the perfect apartment at Iconica. The team was transparent throughout, from documentation to possession. The quality of construction and amenities exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Lakshmi Prasanna",
    role: "Flat Owner, Integral",
    location: "Kommadi, Visakhapatnam",
    text: "We were first-time buyers and had many questions. The Royal Reality team patiently guided us through every step — loan processing, registration, and even Vastu consultation. Truly a one-stop solution.",
    rating: 5,
  },
  {
    name: "Srinivas Rao K.",
    role: "Investor, Blue Arena",
    location: "Gajuwaka, Visakhapatnam",
    text: "I invested in Siri Nirman Blue Arena based on Royal Reality's recommendation. Within 2 years, the property value has appreciated significantly. Their market knowledge is exceptional.",
    rating: 5,
  },
  {
    name: "Divya Teja",
    role: "Villa Owner",
    location: "Rushikonda, Visakhapatnam",
    text: "The professionalism and integrity of Royal Reality Groups is unmatched. They helped us find a sea-view villa that checked all our boxes. The after-sales support has been equally impressive.",
    rating: 5,
  },
  {
    name: "Mohammed Irfan",
    role: "Plot Owner, Bhogapuram",
    location: "Bhogapuram, Visakhapatnam",
    text: "Bought a VMRDA-approved plot near the upcoming airport. Royal Reality provided complete legal verification, site visits, and even connected us with architects. Highly recommend their services.",
    rating: 5,
  },
];

function Index() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[85vh] md:h-screen overflow-hidden">
        {/* Background */}
        {/* Background - mobile */}
        <img src="/family 4.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center sm:hidden" loading="eager" fetchPriority="high" />
        {/* Background - desktop */}
        <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center brightness-110 hidden sm:block" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14345A]/60 via-black/15 to-transparent" />
        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end pb-4 sm:items-center sm:pb-0 px-4 sm:px-6">
          <div className="max-w-[550px]">
            <h1 className="text-[18px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-serif italic text-white leading-tight">
              Trusted Across Generations.<br />
              <span className="text-yellow-400">Built for Yours.</span>
            </h1>
            <p className="mt-1 sm:mt-4 md:mt-6 text-[9px] sm:text-[14px] md:text-[18px] text-white/90 leading-snug sm:leading-relaxed">
              Your Gateway to <strong className="text-white">Premium Living.</strong>
            </p>
            <div className="mt-2 sm:mt-6 md:mt-8 flex gap-2 sm:gap-4">
              <Link to="/projects" className="flex items-center gap-1 sm:gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-semibold px-2 sm:px-5 md:px-6 py-1 sm:py-3 rounded-lg transition-all text-[8px] sm:text-[14px] tracking-wider">
                Explore Projects <ArrowRight className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
              </Link>
              <Link to="/contact" className="border border-white text-white font-medium px-2 sm:px-5 md:px-6 py-1 sm:py-3 rounded-lg transition-all hover:bg-white/10 text-[8px] sm:text-[14px] tracking-wider">
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Strip */}
      <div className="w-full bg-[#14345A]">
        <div className="mx-auto grid grid-cols-2 gap-3 max-w-7xl px-4 py-3 sm:px-6 sm:py-4 md:px-12 sm:grid-cols-3 md:grid-cols-6">
          {[
            { icon: HomeIcon, label: "Premium", sub: "Villas" },
            { icon: Building2, label: "Modern", sub: "Apartments" },
            { icon: MapPin, label: "Gated Community", sub: "Plots" },
            { icon: Landmark, label: "Commercial", sub: "Spaces" },
            { icon: Store, label: "Retail", sub: "Shops" },
            { icon: Leaf, label: "Green &", sub: "Sustainable" },
          ].map((item) => (
            <div key={item.sub} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs font-medium text-white/90 leading-tight">{item.label}</p>
                <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Royal Reality Groups</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#14345A] md:text-5xl">Your Trusted Real Estate Partner</h2>
        <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg italic text-[#6B7280]">
          "A house is built with bricks and mortar, but a home is built with love and care."
        </p>
        <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-[#4B5563]">
          With years of experience and a deep understanding of the local market, we offer residential
          sales, commercial leasing, property management and more. Our commitment to excellence,
          combined with a personalized approach, ensures outstanding results for every client.
        </p>
      </section>

      {/* Why Choose Royal Reality Groups */}
      <section className="bg-[#14345A]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Why Us</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-white md:text-5xl">Why Choose Royal Reality Groups</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
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
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">What We Offer</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#14345A] md:text-5xl">Features & Benefits</h2>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:border-[#D4AF37] hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14345A]">
                <f.icon className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[#14345A]">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Our Work</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#14345A] md:text-5xl">Featured Projects</h2>
            <div className="mx-auto mt-3 h-[2px] w-16 bg-[#D4AF37]" />
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-md">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#14345A]">{p.title}</h3>
                  <p className="mt-2 flex items-center gap-1 text-xs text-[#D4AF37] font-medium"><MapPin className="h-3.5 w-3.5" />{p.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{p.desc}</p>
                  <div className="mt-4 flex gap-2">
                    <Link to="/contact" className="flex-1 rounded-lg bg-[#D4AF37] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B] transition-colors">
                      Enquire Now
                    </Link>
                    <Link to={`/projects/${p.id}`} className="flex-1 rounded-lg border border-[#14345A] px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#14345A] hover:text-white transition-colors">
                      Know More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg border-2 border-[#14345A] px-7 py-3 text-sm font-bold uppercase tracking-wider text-[#14345A] transition-colors hover:bg-[#14345A] hover:text-white">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture / Book Site Visit */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Ready to Visit?</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#14345A] md:text-5xl">Book a Free Site Visit</h2>
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
                <h3 className="mt-4 font-serif text-2xl text-[#14345A]">Thank You!</h3>
                <p className="mt-2 text-sm text-[#6B7280]">We'll call you shortly to confirm your visit.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}>
                <h3 className="mb-4 font-serif text-xl text-[#14345A]">Book Site Visit</h3>
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
                    <button type="submit" className="flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B]">
                      <Calendar className="h-4 w-4" /> Book Visit
                    </button>
                    <a href="tel:+917993999958" className="flex items-center justify-center gap-2 rounded-lg border border-[#14345A] px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#14345A] hover:text-white">
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
      <section className="relative overflow-hidden py-16 sm:py-28">
        <img src={heroImg} alt="" aria-hidden width={1920} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85))" }} />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white md:text-5xl">Let's Build Your Dream Home</h2>
          <p className="mt-5 text-lg text-[#E5E7EB]">
            Ready to embark on your real estate journey? Schedule a consultation today.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#14345A] transition-all hover:bg-[#C79A1B] hover:shadow-lg">
            Book Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 sm:mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">What Our Clients Say</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#14345A] md:text-5xl">Customer Testimonials</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Quote className="h-8 w-8 text-[#D4AF37]/30" />
                <p className="mt-4 text-sm leading-relaxed text-[#6B7280] italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14345A]/10 font-serif text-lg text-[#14345A]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#14345A]">{t.name}</p>
                    <p className="text-xs text-[#6B7280]">{t.role}</p>
                    <p className="text-xs text-[#9CA3AF]">{t.location}</p>
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
