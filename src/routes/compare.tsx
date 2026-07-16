import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Plus } from "lucide-react";
import { properties, Property } from "@/lib/properties";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const imageMap: Record<string, string> = {
  "chitra-vilasa-garden-city": project1,
  "integral-sunrise-city": project2,
  "royal-luxury-residences": project3,
};

export const Route = createFileRoute("/compare")({
  component: Compare,
  head: () => ({
    meta: [
      { title: "Compare Properties | Royal Reality Groups" },
      { name: "description", content: "Compare properties side by side — pricing, amenities, location and features at a glance." },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
});

function Compare() {
  const [selected, setSelected] = useState<string[]>([]);

  const addProperty = (id: string) => {
    if (selected.length < 3 && !selected.includes(id)) {
      setSelected([...selected, id]);
    }
  };

  const removeProperty = (id: string) => {
    setSelected(selected.filter((s) => s !== id));
  };

  const selectedProperties = selected.map((id) => properties.find((p) => p.id === id)).filter(Boolean) as Property[];

  // Get all unique amenities from selected properties
  const allAmenities = [...new Set(selectedProperties.flatMap((p) => p.amenities))].sort();

  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Make Informed Decisions</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Compare <span className="text-gold-gradient">Properties</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">Select up to 3 properties to compare them side by side.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Property Selector */}
        <div className="mb-10">
          <h2 className="mb-4 font-serif text-2xl text-foreground">Select Properties to Compare</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => {
              const isSelected = selected.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => isSelected ? removeProperty(p.id) : addProperty(p.id)}
                  disabled={!isSelected && selected.length >= 3}
                  className={`flex items-center gap-3 rounded-md border p-4 text-left transition-colors ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : selected.length >= 3
                      ? "cursor-not-allowed border-border/60 opacity-50"
                      : "border-border/60 hover:border-primary/60"
                  }`}
                >
                  <img src={imageMap[p.id] || project1} alt={p.title} className="h-12 w-12 rounded-sm object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.location}</p>
                  </div>
                  {isSelected ? (
                    <X className="h-5 w-5 text-red-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedProperties.length >= 2 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">Feature</th>
                  {selectedProperties.map((p) => (
                    <th key={p.id} className="min-w-[200px] p-4 text-center">
                      <img src={imageMap[p.id] || project1} alt={p.title} className="mx-auto mb-2 h-24 w-full rounded-sm object-cover" />
                      <p className="font-serif text-lg text-foreground">{p.title}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60 bg-card/50">
                  <td className="p-4 text-sm font-medium text-foreground">Price</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm font-semibold text-primary">{p.price}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60">
                  <td className="p-4 text-sm font-medium text-foreground">Location</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm text-muted-foreground">{p.location}, {p.city}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60 bg-card/50">
                  <td className="p-4 text-sm font-medium text-foreground">Type</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm capitalize text-muted-foreground">{p.type}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60">
                  <td className="p-4 text-sm font-medium text-foreground">Area</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm text-muted-foreground">{p.area}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60 bg-card/50">
                  <td className="p-4 text-sm font-medium text-foreground">Status</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm capitalize text-muted-foreground">{p.status}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60">
                  <td className="p-4 text-sm font-medium text-foreground">Bedrooms</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm text-muted-foreground">{p.bedrooms ? `${p.bedrooms} BHK` : "N/A"}</td>
                  ))}
                </tr>
                <tr className="border-b border-border/60 bg-card/50">
                  <td className="p-4 text-sm font-medium text-foreground">Bathrooms</td>
                  {selectedProperties.map((p) => (
                    <td key={p.id} className="p-4 text-center text-sm text-muted-foreground">{p.bathrooms || "N/A"}</td>
                  ))}
                </tr>
                {/* Amenities Comparison */}
                <tr className="border-b border-border/60">
                  <td colSpan={selectedProperties.length + 1} className="bg-primary/5 p-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    Amenities
                  </td>
                </tr>
                {allAmenities.map((amenity, i) => (
                  <tr key={amenity} className={`border-b border-border/60 ${i % 2 === 0 ? "bg-card/50" : ""}`}>
                    <td className="p-3 text-sm text-foreground">{amenity}</td>
                    {selectedProperties.map((p) => (
                      <td key={p.id} className="p-3 text-center">
                        {p.amenities.includes(amenity) ? (
                          <Check className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-red-400" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedProperties.length < 2 && (
          <div className="rounded-md border border-dashed border-border/60 py-16 text-center">
            <p className="text-muted-foreground">Select at least 2 properties above to see the comparison table.</p>
          </div>
        )}
      </section>
    </>
  );
}
