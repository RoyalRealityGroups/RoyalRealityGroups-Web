export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
}

export interface Service {
  id: string;
  title: string;
  description: string; // 20-150 characters
  icon: string; // icon identifier
}

export interface Testimonial {
  id: string;
  clientName: string; // max 50 characters
  reviewText: string; // max 300 characters
  rating: number; // 1-5
  image?: string; // optional client image
}

export interface ContactFormData {
  fullName: string; // max 100 characters
  email: string; // max 254 characters
  phone: string; // max 15 digits
  message: string; // max 1000 characters
}

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

export interface CompanyInfo {
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    whatsapp: string;
  };
}
