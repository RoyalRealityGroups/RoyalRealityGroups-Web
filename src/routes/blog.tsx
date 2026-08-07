import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Newspaper, FileCheck, ShoppingBag, TrendingUp, Building2, BookOpen, Ruler, Layers, LandPlot, Percent, Home, CheckCircle2, XCircle } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Insights | Royal Reality Groups" },
      { name: "description", content: "Real estate insights — market news, government notifications, property approvals, buying guides, and investment tips for Visakhapatnam." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const insightCategories = [
  {
    id: "real-estate-updates",
    title: "Latest Real Estate Updates",
    icon: Newspaper,
    articles: [
      { id: "market-news-vizag-2026", title: "Visakhapatnam Real Estate Market News 2026", excerpt: "IT corridor expansion, proposed executive capital, and infrastructure developments driving growth.", category: "Market News", date: "July 2026", readTime: "5 min", image: "/insights.png" },
      { id: "govt-notifications-ap", title: "Government Notifications for AP Real Estate", excerpt: "Latest state government orders on stamp duty, registration charges, and RERA updates.", category: "Govt Notifications", date: "July 2026", readTime: "4 min", image: "/Notification.jpg" },
      { id: "infrastructure-developments", title: "Infrastructure Developments in Vizag", excerpt: "Bhogapuram Airport, Metro Rail, Beach Corridor, and IT parks transforming the city.", category: "Infrastructure", date: "June 2026", readTime: "6 min", image: "/infracture.jpg" },
    ]
  },
  {
    id: "property-approvals",
    title: "Property Approvals",
    icon: FileCheck,
    articles: [
      { id: "gvmc-vs-vmrda", title: "GVMC vs VMRDA: Which Approval Matters?", excerpt: "Understanding the difference between GVMC and VMRDA approvals before investing.", category: "GVMC", date: "July 2026", readTime: "5 min", image: "/approval.jpg" },
      { id: "dtcp-approval-guide", title: "DTCP Approval – Complete Guide", excerpt: "Everything you need to know about Directorate of Town & Country Planning approvals.", category: "DTCP", date: "June 2026", readTime: "7 min", image: "/DTPC-optimized.jpg" },
      { id: "rera-registration", title: "RERA Registration: Why It Matters", excerpt: "How RERA protects buyers and what to check before buying a RERA-registered project.", category: "RERA", date: "June 2026", readTime: "5 min", image: "/RERA.png" },
    ]
  },
  {
    id: "documents-required",
    title: "Documents Required Before Buying Property",
    icon: BookOpen,
    articles: [
      { id: "sale-deed-guide", title: "Sale Deed: Everything You Need to Know", excerpt: "What is a sale deed, how to verify it, and why it's the most important property document.", category: "Documents", date: "June 2026", readTime: "5 min", image: "/Sale.png" },
      { id: "encumbrance-certificate", title: "Encumbrance Certificate (EC) Explained", excerpt: "How to obtain EC, its validity, and why it's essential for property transactions.", category: "Documents", date: "June 2026", readTime: "4 min", image: "/Embrance.png" },
      { id: "property-tax-oc-guide", title: "Property Tax, OC & Building Approvals", excerpt: "Understanding occupancy certificate, property tax receipts, and building plan approvals.", category: "Documents", date: "May 2026", readTime: "6 min", image: "/property.png" },
    ]
  },
  {
    id: "flat-buying-process",
    title: "Flat Buying Process",
    icon: ShoppingBag,
    articles: [
      { id: "step-by-step-buying", title: "Step-by-Step Guide: From Selection to Registration", excerpt: "Complete walkthrough from shortlisting properties to final registration and possession.", category: "Process", date: "July 2026", readTime: "8 min", image: "/step.png" },
      { id: "home-loan-tips-first-time", title: "Home Loan Tips for First-Time Buyers", excerpt: "Proven tips to improve eligibility, reduce interest, and speed up approval.", category: "Finance", date: "June 2026", readTime: "5 min", image: "/home-loan.jpg" },
      { id: "property-registration-guide-ap", title: "Property Registration Guide for AP", excerpt: "Documents needed, stamp duty calculation, and how to avoid common mistakes.", category: "Legal Guide", date: "June 2026", readTime: "8 min", image: "/AP.png" },
    ]
  },
];

function Blog() {
  return (
    <div className="bg-white">
      <section className="relative w-full py-20 md:py-28 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('/photo-1499750310107-5fef28a66643.avif')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/50 via-[#1A1A2E]/70 to-[#1A1A2E]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#D4AF37]/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-[#D4AF37] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block drop-shadow">INSIGHTS & UPDATES</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Real Estate <span className="text-[#D4AF37]">Insights</span></h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl mx-auto mb-6">Market news, property approvals, buying guides, and everything you need to know before investing in Visakhapatnam real estate.</p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-30 border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-3 flex gap-4 overflow-x-auto">
          {insightCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1A2E] transition-colors">
              <cat.icon className="h-4 w-4 text-[#D4AF37]" />
              {cat.title}
            </a>
          ))}
          <a href="#property-basics" className="flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1A2E] transition-colors">
            <Ruler className="h-4 w-4 text-[#D4AF37]" />
            Know Your Property
          </a>
          <a href="#buying-guides" className="flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#1A1A2E] transition-colors">
            <Home className="h-4 w-4 text-[#D4AF37]" />
            Buying Guides
          </a>
        </div>
      </section>

      {/* Category Sections */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {insightCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-16 scroll-mt-32">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A2E]">
                <category.icon className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A2E]">{category.title}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.articles.map((post) => (
                <article key={post.id} className="group overflow-hidden rounded-xl border border-[#E5E7EB] bg-white transition-all hover:border-[#D4AF37]/40 hover:shadow-md">
                  <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} loading="lazy" className="h-48 w-full object-cover rounded-t-xl" style={{ imageRendering: "auto" }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                      <span className="rounded-md bg-[#1A1A2E]/10 px-2 py-0.5 text-[#1A1A2E] font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-lg text-[#1F2937] group-hover:text-[#1A1A2E] line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-sm text-[#6B7280] line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-[#9CA3AF]">{post.date}</span>
                      <Link
                        to="/knowledge-center"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#D4AF37] hover:text-[#C79A1B]"
                      >
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Property Buying Basics Section */}
      <section id="property-basics" className="scroll-mt-32 bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A2E]">
              <Ruler className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A2E]">Know Your Property</h2>
          </div>
          <p className="mb-8 text-sm text-[#6B7280] max-w-2xl">Understand the key real estate terms every buyer must know before investing. Learn about area measurements, loading, and land share.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Ruler, title: "Carpet Area", desc: "The actual usable floor area you can lay a carpet on." },
              { icon: Building2, title: "Built-up Area", desc: "Carpet area + wall thickness + balcony area." },
              { icon: Layers, title: "Super Built-up Area", desc: "Built-up area + share of common areas (corridors, lobby, etc.)." },
              { icon: LandPlot, title: "UDS", desc: "Undivided Share of Land — your ownership share of the total land." },
              { icon: Percent, title: "Loading %", desc: "The % difference between super built-up and carpet area." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#E5E7EB] bg-white p-5 hover:border-[#D4AF37]/40 transition-colors">
                <item.icon className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="font-serif text-base font-bold text-[#1F2937]">{item.title}</h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/property-basics" className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2A2A4E]">
              Learn More with Examples & Comparisons <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Buying Guides Section */}
      <section id="buying-guides" className="scroll-mt-32 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A2E]">
              <Home className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A2E]">Buying Guides</h2>
          </div>
          <p className="mb-8 text-sm text-[#6B7280] max-w-2xl">Interactive Q&A to help you decide the best property type for your needs, budget, and investment goals.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Why Buy an Apartment?", desc: "Amenities, community living, rental income, and low maintenance." },
              { title: "Why Buy a Plot?", desc: "Higher appreciation, construction freedom, and land ownership." },
              { title: "Apartment vs Plot", desc: "Side-by-side comparison to help you pick the right option." },
              { title: "Villa vs Apartment", desc: "Privacy vs convenience — which lifestyle suits you?" },
              { title: "Ready-to-Move vs Under Construction", desc: "Price advantage vs delivery risk — weigh your options." },
              { title: "Investment vs Self-Use", desc: "Different priorities, different property choices." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[#E5E7EB] bg-white p-5 hover:border-[#D4AF37]/40 transition-colors">
                <h3 className="font-serif text-base font-bold text-[#1F2937]">{item.title}</h3>
                <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/buying-guides" className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2A2A4E]">
              Explore Interactive Buying Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E5E7EB] bg-[#F8FAFC] py-12 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-[#1A1A2E]">Have Questions About Buying Property?</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Explore our Knowledge Center for in-depth guides or contact our team for personalized assistance.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/knowledge-center" className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2A2A4E]">
              Knowledge Center <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#1A1A2E] hover:bg-[#C79A1B]">
              Get Expert Advice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
