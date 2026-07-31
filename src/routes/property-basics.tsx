import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Ruler, Building2, Layers, LandPlot, Percent } from "lucide-react";

export const Route = createFileRoute("/property-basics")({
  component: PropertyBasics,
  head: () => ({
    meta: [
      { title: "Know Your Property | Royal Reality Groups" },
      { name: "description", content: "Learn property fundamentals — Carpet Area, Built-up Area, Super Built-up Area, UDS, and Loading Percentage explained with definitions, advantages, and comparisons." },
    ],
    links: [{ rel: "canonical", href: "/property-basics" }],
  }),
});

const topics = [
  {
    id: "carpet-area",
    icon: Ruler,
    title: "Carpet Area",
    definition: "Carpet Area is the actual usable floor area of an apartment — the area you can lay a carpet on. It includes the area within the walls but excludes the thickness of inner walls, balcony, and common areas like corridors, lobbies, and staircases.",
    advantages: [
      "Most accurate measure of usable space",
      "RERA mandates pricing based on carpet area",
      "Easier to compare apartments fairly",
      "What you actually live in and use daily",
    ],
    disadvantages: [
      "Appears smaller compared to super built-up area",
      "Does not include balcony or utility areas",
      "Can vary slightly based on measurement standards",
    ],
    formula: "Carpet Area = Total area within walls – Wall thickness – Balcony – Common areas",
  },
  {
    id: "built-up-area",
    icon: Building2,
    title: "Built-up Area",
    definition: "Built-up Area includes the carpet area PLUS the area covered by walls (inner and outer) and the balcony. It's essentially the total area of your flat including wall thickness.",
    advantages: [
      "Gives a better picture of the actual apartment footprint",
      "Includes balcony which is part of your exclusive use",
      "Useful for understanding the actual construction area",
    ],
    disadvantages: [
      "10-15% larger than carpet area (wall thickness)",
      "Not standardized across builders",
      "Can be misleading if compared with carpet area listings",
    ],
    formula: "Built-up Area = Carpet Area + Wall Area + Balcony Area (typically 10-15% more than carpet area)",
  },
  {
    id: "super-built-up-area",
    icon: Layers,
    title: "Super Built-up Area",
    definition: "Super Built-up Area (also called Saleable Area) includes the built-up area PLUS a proportionate share of common areas like corridors, staircases, lobby, gym, swimming pool area, security room, etc.",
    advantages: [
      "Includes your share of common amenities",
      "Reflects the total area allocated to you in the project",
      "Standard measure used by most builders for pricing",
    ],
    disadvantages: [
      "25-40% more than carpet area — can be misleading",
      "Higher loading = less usable area per rupee spent",
      "Common area calculation not always transparent",
      "RERA now requires carpet area disclosure",
    ],
    formula: "Super Built-up Area = Built-up Area + Proportionate Common Area (typically 25-40% more than carpet area)",
  },
  {
    id: "uds",
    icon: LandPlot,
    title: "UDS (Undivided Share of Land)",
    definition: "UDS is the share of land that belongs to you as a flat owner in an apartment complex. Even though you own a flat on a specific floor, you also own a portion of the total land on which the building stands. This share is 'undivided' — meaning you can't point to a specific plot, but you own a percentage.",
    advantages: [
      "You own a share of the land — the most valuable asset",
      "Land appreciates over time, even if building depreciates",
      "Essential for future redevelopment or reconstruction",
      "Required for property tax assessment and bank loans",
      "Higher UDS = Higher property value",
    ],
    disadvantages: [
      "Cannot be physically identified or separated",
      "Lower UDS in high-rise buildings with many units",
      "Some builders retain part of UDS — verify before buying",
    ],
    formula: "Your UDS = (Your Flat's Super Built-up Area ÷ Total Super Built-up Area of All Flats) × Total Land Area",
  },
  {
    id: "loading-percentage",
    icon: Percent,
    title: "Loading Percentage",
    definition: "Loading Percentage is the difference between the Super Built-up Area and the Carpet Area, expressed as a percentage. It represents how much of the area you're paying for is NOT your actual usable space (i.e., walls + common areas).",
    advantages: [
      "Helps compare value across different projects",
      "Lower loading = more usable area per rupee",
      "Transparency metric for buyers",
      "Standard loading is 25-30% for apartments",
    ],
    disadvantages: [
      "High loading (35%+) means you pay more for less usable space",
      "Luxury projects often have higher loading due to more amenities",
      "Not always disclosed upfront by builders",
    ],
    formula: "Loading % = ((Super Built-up Area – Carpet Area) ÷ Carpet Area) × 100",
  },
];

const comparisonData = [
  { metric: "Carpet Area (1000 sq ft)", value1: "1,000 sq ft", value2: "1,000 sq ft", value3: "1,000 sq ft" },
  { metric: "Wall Area (~10%)", value1: "100 sq ft", value2: "100 sq ft", value3: "100 sq ft" },
  { metric: "Balcony", value1: "50 sq ft", value2: "50 sq ft", value3: "50 sq ft" },
  { metric: "Built-up Area", value1: "1,150 sq ft", value2: "1,150 sq ft", value3: "1,150 sq ft" },
  { metric: "Common Area Share", value1: "250 sq ft (25%)", value2: "350 sq ft (35%)", value3: "450 sq ft (45%)" },
  { metric: "Super Built-up Area", value1: "1,400 sq ft", value2: "1,500 sq ft", value3: "1,600 sq ft" },
  { metric: "Loading %", value1: "40%", value2: "50%", value3: "60%" },
  { metric: "Price @ ₹5000/sq ft (SBA)", value1: "₹70 Lakhs", value2: "₹75 Lakhs", value3: "₹80 Lakhs" },
  { metric: "Effective Price/sq ft (Carpet)", value1: "₹7,000", value2: "₹7,500", value3: "₹8,000" },
];

function PropertyBasics() {
  const [openItems, setOpenItems] = useState<string[]>(["carpet-area"]);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url('/photo-1600585154340-be6161a56a0c.avif')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/50 via-[#1A1A2E]/70 to-[#1A1A2E]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-[#D4AF37] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block">LEARN BEFORE YOU BUY</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">Know Your <span className="text-[#D4AF37]">Property</span></h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl mx-auto mb-6">Understand the key real estate terms every buyer must know before investing in property.</p>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-4">
          {topics.map((topic) => {
            const isOpen = openItems.includes(topic.id);
            return (
              <div key={topic.id} className="rounded-2xl border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(topic.id)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A1A2E]">
                    <topic.icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="flex-1 font-serif text-xl text-[#1F2937]">{topic.title}</span>
                  <ChevronDown className={`h-5 w-5 text-[#6B7280] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] px-6 py-6 space-y-6">
                    {/* Definition */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-2">Definition</h4>
                      <p className="text-sm leading-relaxed text-[#4B5563]">{topic.definition}</p>
                    </div>

                    {/* Formula */}
                    <div className="rounded-lg bg-[#F3F4F6] p-4">
                      <p className="text-sm font-mono text-[#1F2937]">{topic.formula}</p>
                    </div>

                    {/* Advantages & Disadvantages */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-green-600 mb-3">Advantages</h4>
                        <ul className="space-y-2">
                          {topic.advantages.map((adv) => (
                            <li key={adv} className="flex items-start gap-2 text-sm text-[#4B5563]">
                              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                              {adv}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-red-500 mb-3">Disadvantages</h4>
                        <ul className="space-y-2">
                          {topic.disadvantages.map((dis) => (
                            <li key={dis} className="flex items-start gap-2 text-sm text-[#4B5563]">
                              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                              {dis}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center font-serif text-3xl text-[#1A1A2E]">Area Comparison Example</h2>
          <p className="mb-6 text-center text-sm text-[#6B7280]">How the same 1,000 sq ft carpet area apartment looks with different loading percentages:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#1A1A2E] text-white">
                  <th className="p-4 text-left text-sm font-medium">Metric</th>
                  <th className="p-4 text-center text-sm font-medium">Low Loading (25%)</th>
                  <th className="p-4 text-center text-sm font-medium">Medium Loading (35%)</th>
                  <th className="p-4 text-center text-sm font-medium">High Loading (45%)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.metric} className={`border-b border-[#E5E7EB] ${i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}>
                    <td className="p-4 text-sm font-medium text-[#1F2937]">{row.metric}</td>
                    <td className="p-4 text-center text-sm text-[#4B5563]">{row.value1}</td>
                    <td className="p-4 text-center text-sm text-[#4B5563]">{row.value2}</td>
                    <td className="p-4 text-center text-sm text-[#4B5563]">{row.value3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[#9CA3AF] text-center">* This is for illustration purposes. Always ask the builder for exact carpet area and loading percentage.</p>
        </div>
      </section>
    </div>
  );
}
