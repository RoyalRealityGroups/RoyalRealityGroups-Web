import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Home, Users, Building2, Calculator, BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "About Us", to: "/about", icon: Users },
  { label: "Projects", to: "/projects", icon: Building2 },
  { label: "Investment Tools", to: "/calculators", icon: Calculator },
  { label: "Insights", to: "/blog", icon: BookOpen },
  { label: "Contact", to: "/contact", icon: Phone },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-[#0B1F3A] border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a href="tel:+917993999958" className="flex items-center gap-1.5 hover:text-[#D4AF37]">
              <Phone className="h-3 w-3" /> +91 79939 99958
            </a>
            <a href="mailto:info@royalrealitygroups.com" className="flex items-center gap-1.5 hover:text-[#D4AF37]">
              <Mail className="h-3 w-3" /> info@royalrealitygroups.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> Visakhapatnam, India
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="mr-2 text-white/50">Follow Us:</span>
            <a href="https://www.facebook.com/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1 hover:text-[#D4AF37]"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="https://www.instagram.com/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1 hover:text-[#D4AF37]"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="https://www.linkedin.com/company/royalrealitygroups/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1 hover:text-[#D4AF37]"><Linkedin className="h-3.5 w-3.5" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-1 hover:text-[#D4AF37]"><Youtube className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-[#0B1F3A] shadow-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/company logo.jpg" alt="Royal Reality Groups" className="h-12 w-12 rounded-full object-cover" width={96} height={96} />
            <div className="hidden sm:block">
              <span className="block font-serif text-lg font-bold tracking-wide text-[#D4AF37]">
                ROYAL REALITY GROUPS
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-white/60">
                Building Trust. Creating Value.
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group flex flex-col items-center gap-1 text-white/80 transition-colors hover:text-[#D4AF37]"
                activeProps={{ className: "text-[#D4AF37]" }}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-widest">{item.label}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden rounded bg-[#D4AF37] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] transition-all hover:bg-[#E8C84B] hover:shadow-lg lg:inline-block"
          >
            Schedule Site Visit
          </Link>

          <button
            className="text-[#D4AF37] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-[#0B1F3A] lg:hidden">
            <div className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.to + item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 text-sm font-medium text-white/80 hover:text-[#D4AF37]"
                  activeProps={{ className: "text-[#D4AF37]" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded bg-[#D4AF37] px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0B1F3A]"
              >
                Schedule Site Visit
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
