import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/royal-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo.url} alt="Royal Reality Groups" className="mb-4 h-16 w-16 rounded-full object-cover" width={64} height={64} loading="lazy" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Transforming dreams into reality with precision and integrity. Your key to a dream home.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-primary">Contact Info</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> info@royalrealitygroups.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 79939 99958</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Akella Elite, Sairam Colony, Kommadi, Madhurawada, Visakhapatnam 530048</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-primary">Ready to Begin?</h4>
          <p className="mb-4 text-sm text-muted-foreground">Schedule a consultation and let's turn your dream home into reality.</p>
          <Link to="/contact" className="inline-block rounded-sm bg-gold-gradient px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
            Book Now
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Royal Reality Groups. Key to your dream home.
      </div>
    </footer>
  );
}
