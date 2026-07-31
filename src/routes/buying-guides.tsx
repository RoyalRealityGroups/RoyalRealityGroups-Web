import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, Building2, LandPlot, Home, TrendingUp, CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/buying-guides")({
  component: BuyingGuides,
  head: () => ({
    meta: [
      { title: "Buying Guides | Royal Reality Groups" },
      { name: "description", content: "Interactive buying guides — Apartment vs Plot, Villa vs Apartment, Ready-to-Move vs Under Construction, and Investment vs Self-Use comparisons." },
    ],
    links: [{ rel: "canonical", href: "/buying-guides" }],
  }),
});

const guides = [
  {
    id: "why-apartment",
    icon: Building2,
    question: "Why Buy an Apartment?",
    answer: "Apartments offer immediate habitation, shared amenities like gym, pool, and security, and are ideal for urban professionals. They require lower maintenance effort and provide a community living experience.",
    pros: ["Ready-to-move or quick possession", "Shared maintenance & security", "Amenities like gym, pool, clubhouse", "Easier bank loan approval", "Rental income from Day 1"],
    cons: ["Limited customization", "Monthly maintenance charges", "Depreciation of building over time", "Less land value appreciation", "Dependent on builder quality"],
  },
  {
    id: "why-plot",
    icon: LandPlot,
    question: "Why Buy a Plot?",
    answer: "Plots offer higher appreciation potential, full construction freedom, and ownership of land — the most valuable asset. Ideal for long-term investors and those who want to build their dream home.",
    pros: ["Higher appreciation (land value)", "Complete design freedom", "No maintenance charges", "No depreciation — land always appreciates", "Can build as per Vastu preferences"],
    cons: ["No immediate rental income", "Security concerns for vacant plots", "Additional construction cost", "Longer process to move in", "Requires more involvement"],
  },
  {
    id: "apartment-vs-plot",
    icon: Home,
    question: "Apartment vs Plot — Which is Better?",
    answer: "The choice depends on your goals. For immediate living and rental income, apartments win. For long-term wealth creation and flexibility, plots are better. Consider your budget, timeline, and purpose.",
    comparison: [
      { factor: "Appreciation", apartment: "8-12% annually", plot: "15-25% annually" },
      { factor: "Rental Income", apartment: "Immediate (2-4% yield)", plot: "Only after construction" },
      { factor: "Customization", apartment: "Limited", plot: "Complete freedom" },
      { factor: "Maintenance", apartment: "Shared (monthly charges)", plot: "Minimal (if vacant)" },
      { factor: "Loan Availability", apartment: "Easy (80-90%)", plot: "Moderate (70-80%)" },
      { factor: "Liquidity", apartment: "High (easy to sell)", plot: "Moderate" },
      { factor: "Investment Horizon", apartment: "Short to Medium term", plot: "Long term (5+ years)" },
    ],
  },
  {
    id: "villa-vs-apartment",
    icon: Home,
    question: "Villa vs Apartment — Which Suits You?",
    answer: "Villas offer privacy, larger space, and independent living. Apartments offer convenience, community, and lower maintenance. Your lifestyle and budget determine the best choice.",
    comparison: [
      { factor: "Privacy", apartment: "Shared walls & spaces", plot: "Complete privacy" },
      { factor: "Space", apartment: "Compact (800-2000 sq ft)", plot: "Spacious (1500-5000 sq ft)" },
      { factor: "Cost", apartment: "Lower (₹40L-1.5Cr)", plot: "Higher (₹80L-5Cr+)" },
      { factor: "Maintenance", apartment: "Managed by society", plot: "Self-managed (higher cost)" },
      { factor: "Parking", apartment: "Limited (1-2 slots)", plot: "Ample (personal garage)" },
      { factor: "Garden/Outdoor", apartment: "Shared or balcony only", plot: "Private garden" },
      { factor: "Resale", apartment: "Easier", plot: "Niche market" },
    ],
  },
  {
    id: "ready-vs-construction",
    icon: Building2,
    question: "Ready-to-Move vs Under Construction",
    answer: "Ready-to-move eliminates waiting and risk of delay. Under-construction offers lower prices and payment flexibility. Weigh the price advantage against the delivery risk.",
    comparison: [
      { factor: "Price", apartment: "10-20% premium", plot: "10-20% cheaper" },
      { factor: "GST", apartment: "No GST applicable", plot: "5% GST (affordable) / 12% (luxury)" },
      { factor: "Risk", apartment: "What you see is what you get", plot: "Delay / quality risk" },
      { factor: "Possession", apartment: "Immediate", plot: "1-4 years" },
      { factor: "Loan Disbursement", apartment: "Full amount at once", plot: "Stage-wise linked to construction" },
      { factor: "Verification", apartment: "Physical inspection possible", plot: "Based on plans & model" },
      { factor: "Payment Flexibility", apartment: "Full payment needed", plot: "Construction-linked plans" },
    ],
  },
  {
    id: "investment-vs-self-use",
    icon: TrendingUp,
    question: "Investment vs Self-Use — How to Decide?",
    answer: "For investment, focus on location growth, rental yield, and appreciation. For self-use, focus on convenience, amenities, and family needs. Some properties serve both purposes well.",
    comparison: [
      { factor: "Priority", apartment: "Comfort, Vastu, family needs", plot: "Returns, location, demand" },
      { factor: "Location Choice", apartment: "Near workplace/school", plot: "Developing areas for growth" },
      { factor: "Budget Allocation", apartment: "Can stretch for quality of life", plot: "Strict ROI-focused" },
      { factor: "Timeline", apartment: "Match family's needs", plot: "5-10 year horizon" },
      { factor: "Property Type", apartment: "Apartment/Villa in prime area", plot: "Plot in growth corridor" },
      { factor: "Tax Benefit", apartment: "Section 24 (self-occupied)", plot: "Multiple deductions on rental" },
    ],
  },
];

function BuyingGuides() {
  const [openItems, setOpenItems] = useState<string[]>(["why-apartment"]);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url('/photo-1545324418-cc1a3fa10c00.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/50 via-[#1A1A2E]/70 to-[#1A1A2E]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-[#D4AF37] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block">MAKE INFORMED DECISIONS</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">Buying <span className="text-[#D4AF37]">Guides</span></h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl mx-auto">Interactive Q&A to help you decide the best property type for your needs and budget.</p>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-4">
          {guides.map((guide) => {
            const isOpen = openItems.includes(guide.id);
            return (
              <div key={guide.id} className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(guide.id)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A2E]">
                    <guide.icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="flex-1 font-serif text-lg sm:text-xl text-[#1F2937]">{guide.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#6B7280] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] px-6 py-6 space-y-6">
                    <p className="text-sm leading-relaxed text-[#4B5563]">{guide.answer}</p>

                    {/* Pros and Cons */}
                    {guide.pros && guide.cons && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-green-50 p-4">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-green-700 mb-3">
                            <CheckCircle2 className="h-4 w-4" /> Advantages
                          </h4>
                          <ul className="space-y-2">
                            {guide.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-sm text-green-800">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl bg-red-50 p-4">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-red-700 mb-3">
                            <XCircle className="h-4 w-4" /> Disadvantages
                          </h4>
                          <ul className="space-y-2">
                            {guide.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-sm text-red-800">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Comparison Table */}
                    {guide.comparison && (
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-xl overflow-hidden">
                          <thead>
                            <tr className="bg-[#1A1A2E] text-white">
                              <th className="p-3 text-left text-xs font-medium">Factor</th>
                              <th className="p-3 text-center text-xs font-medium">{guide.id.includes("villa") ? "Apartment" : guide.id.includes("ready") ? "Ready-to-Move" : guide.id.includes("investment") ? "Self-Use" : "Apartment"}</th>
                              <th className="p-3 text-center text-xs font-medium">{guide.id.includes("villa") ? "Villa" : guide.id.includes("ready") ? "Under Construction" : guide.id.includes("investment") ? "Investment" : "Plot"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {guide.comparison.map((row, i) => (
                              <tr key={row.factor} className={`border-b border-[#E5E7EB] ${i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}>
                                <td className="p-3 text-sm font-medium text-[#1F2937]">{row.factor}</td>
                                <td className="p-3 text-center text-sm text-[#4B5563]">{row.apartment}</td>
                                <td className="p-3 text-center text-sm text-[#4B5563]">{row.plot}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8FAFC] py-12 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-[#1A1A2E]">Still Confused? Let Us Help</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Our experts can provide personalized advice based on your budget, goals, and preferences.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A2E] hover:bg-[#C79A1B]">
            Get Expert Advice <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
