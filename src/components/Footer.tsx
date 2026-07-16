import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/company logo.jpg" alt="Royal Reality Groups" className="mb-4 h-16 w-16 rounded-full object-cover" width={64} height={64} loading="lazy" />
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
            <li><Link to="/calculators" className="hover:text-primary">EMI Calculator</Link></li>
            <li><Link to="/home-loans" className="hover:text-primary">Loan Assistance</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/knowledge-center" className="hover:text-primary">Knowledge Center</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
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
        <div className="mb-3 flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://x.com/royalrealitygrp" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        <div className="mb-2 flex items-center justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-primary">Terms & Conditions</Link>
        </div>
        © {new Date().getFullYear()} Royal Reality Groups. Key to your dream home.
      </div>
    </footer>
  );
}
