// Centralized property data used across the site
export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  type: "plot" | "villa" | "apartment" | "commercial";
  status: "ongoing" | "completed" | "upcoming";
  price: string;
  priceValue: number; // for filtering
  area: string;
  areaValue: number; // in sq.ft for filtering
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  shortDesc: string;
  image: string;
  images: string[];
  amenities: string[];
  floorPlanUrl?: string;
  brochureUrl?: string;
  videoUrl?: string;
  mapUrl?: string;
  highlights: string[];
}

export const properties: Property[] = [
  {
    id: "chitra-vilasa-garden-city",
    title: "Chitra Vilasa Garden City",
    location: "Madhurawada",
    city: "Visakhapatnam",
    type: "plot",
    status: "ongoing",
    price: "₹25 Lakhs onwards",
    priceValue: 2500000,
    area: "150 - 300 sq.yds",
    areaValue: 1350,
    description:
      "Well planned and budget-friendly plot variations, giving investors the independent decision to select the ideal parcel for their dream home. Located in the rapidly developing Madhurawada area with excellent connectivity to IT hubs, schools, hospitals and the beach.",
    shortDesc: "Well planned, budget-friendly plots giving investors the freedom to choose.",
    image: "/assets/project-1.jpg",
    images: ["/assets/project-1.jpg", "/assets/hero-home.jpg"],
    amenities: [
      "Gated Community",
      "24/7 Security",
      "Children's Play Area",
      "Landscaped Gardens",
      "Wide Internal Roads",
      "Underground Drainage",
      "Overhead Water Tank",
      "Community Hall",
    ],
    floorPlanUrl: "#",
    brochureUrl: "#",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.38!3d17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ2JzQ4LjAiTiA4M8KwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1",
    highlights: [
      "VMRDA Approved Layout",
      "Clear Title & Documentation",
      "Close to IT Hub",
      "5 mins from NH-16",
      "Near International Schools",
      "Bank Loan Available",
    ],
  },
  {
    id: "integral-sunrise-city",
    title: "Integral Sunrise City",
    location: "Anandapuram",
    city: "Visakhapatnam",
    type: "villa",
    status: "ongoing",
    price: "₹85 Lakhs onwards",
    priceValue: 8500000,
    area: "1800 - 3200 sq.ft",
    areaValue: 1800,
    bedrooms: 3,
    bathrooms: 3,
    description:
      "Modern villas and premium residential plots with contemporary architecture, gated security and lush green landscaping. A perfect blend of luxury and nature, offering families a serene environment to grow and thrive.",
    shortDesc: "Modern villas with premium finishes designed for elevated living.",
    image: "/assets/project-2.jpg",
    images: ["/assets/project-2.jpg", "/assets/hero-home.jpg"],
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Jogging Track",
      "Children's Play Area",
      "24/7 CCTV Surveillance",
      "Power Backup",
      "Rainwater Harvesting",
      "Indoor Games",
      "Meditation Hall",
    ],
    floorPlanUrl: "#",
    brochureUrl: "#",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.38!3d17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ2JzQ4LjAiTiA4M8KwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1",
    highlights: [
      "GVMC Approved",
      "Premium Gated Community",
      "Vastu Compliant",
      "East Facing Villas",
      "Surrounded by Greenery",
      "Home Loan from Top Banks",
    ],
  },
  {
    id: "royal-luxury-residences",
    title: "Royal Luxury Residences",
    location: "MVP Colony",
    city: "Visakhapatnam",
    type: "apartment",
    status: "completed",
    price: "₹1.2 Cr onwards",
    priceValue: 12000000,
    area: "2200 - 4000 sq.ft",
    areaValue: 2200,
    bedrooms: 4,
    bathrooms: 4,
    description:
      "Exquisite interiors, high-end finishes and unparalleled service for those who demand the very finest in real estate. Located in the heart of the city with easy access to shopping, dining, entertainment and business districts.",
    shortDesc: "Exquisite interiors and unparalleled service for the discerning few.",
    image: "/assets/project-3.jpg",
    images: ["/assets/project-3.jpg", "/assets/hero-home.jpg"],
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Private Theater",
      "Concierge Service",
      "Valet Parking",
      "Smart Home Automation",
      "EV Charging Stations",
      "Rooftop Garden",
      "Spa & Sauna",
      "Business Center",
    ],
    floorPlanUrl: "#",
    brochureUrl: "#",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2!2d83.38!3d17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ2JzQ4LjAiTiA4M8KwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1",
    highlights: [
      "Premium City Center Location",
      "RERA Registered",
      "Italian Marble Flooring",
      "Modular Kitchen",
      "Panoramic City Views",
      "Ready to Move In",
    ],
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function filterProperties(filters: {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  search?: string;
}): Property[] {
  return properties.filter((p) => {
    if (filters.type && filters.type !== "all" && p.type !== filters.type) return false;
    if (filters.status && filters.status !== "all" && p.status !== filters.status) return false;
    if (filters.minPrice && p.priceValue < filters.minPrice) return false;
    if (filters.maxPrice && p.priceValue > filters.maxPrice) return false;
    if (filters.location && filters.location !== "all" && p.location !== filters.location) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)
      );
    }
    return true;
  });
}
