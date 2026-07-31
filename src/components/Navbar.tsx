import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Home, Users, Building2, Calculator, BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Search } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#14345A] shadow-lg" : "bg-[#14345A]"}`}>
      {/* Top Bar */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between px-8 py-1.5 text-xs text-white/80">
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
          <div className="flex items-center gap-1.5">
            <span className="mr-2 text-white/60">Follow Us:</span>
            <a href="https://www.facebook.com/share/1BcXQwzFpm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-1 hover:text-[#D4AF37]"><Facebook className="h-3.5 w-3.5" /></a>
            <a href="https://www.instagram.com/vizagpropertyadda?igsh=ZXZ3bW04emkydWk%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1 hover:text-[#D4AF37]"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="https://www.youtube.com/@royalrealitygroups" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-1 hover:text-[#D4AF37]"><Youtube className="h-3.5 w-3.5" /></a>
            <a href="https://www.linkedin.com/company/royalrealitygroups" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1 hover:text-[#D4AF37]"><Linkedin className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-8 py-1.5">

        {/* Left: Logo + Company Name */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-black shadow-md overflow-hidden">
            <img
              src="/og.png"
              alt="Royal Reality Groups"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-11 w-11 object-contain select-none"
              style={{
                imageRendering: "auto",
              }}
            />
          </div>
          <div className="hidden sm:block">
            <span className="block font-serif text-lg font-bold tracking-wide text-[#D4AF37]">
              ROYAL REALITY GROUPS
            </span>
            <span className="block text-[9px] tracking-[0.2em] text-white/70">
              Building Trust. Creating Value.
            </span>
          </div>
        </Link>

        {/* Center: Nav Links - evenly spaced between logo and search */}
        <div className="hidden items-center justify-center gap-6 lg:flex flex-1 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group flex flex-col items-center gap-0.5 text-white transition-colors hover:text-[#D4AF37] shrink-0"
              activeProps={{ className: "text-[#D4AF37]" }}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-[9px] font-bold uppercase tracking-wider whitespace-nowrap">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Right: Search + CTA */}
        <div className="hidden items-center gap-3 lg:flex shrink-0 ml-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const query = formData.get("navSearch") as string;
              if (query.trim()) {
                window.location.href = `/projects?search=${encodeURIComponent(query.trim())}`;
              }
            }}
            className="flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1.5"
          >
            <Search className="h-3.5 w-3.5 text-white/60 shrink-0" />
            <input
              name="navSearch"
              type="text"
              placeholder="Search projects..."
              className="w-72 bg-transparent px-2 text-xs text-white placeholder-white/50 outline-none"
            />
          </form>
          <Link
            to="/contact"
            className="rounded bg-[#E85D2A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#D14E1F] hover:shadow-lg whitespace-nowrap"
          >
            Schedule Site Visit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-[#D4AF37] lg:hidden ml-auto"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#14345A] lg:hidden">
          <div className="flex flex-col px-8 py-6">
            {navItems.map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 py-3 text-sm font-medium text-white/90 hover:text-[#D4AF37]"
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
              className="mt-4 rounded bg-[#E85D2A] px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white"
            >
              Schedule Site Visit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
