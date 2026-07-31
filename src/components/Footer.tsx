import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#14345A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src="/company logo.jpg" alt="Royal Reality Groups" className="mb-4 h-16 w-16 rounded-full object-cover" width={128} height={128} loading="lazy" />
          <p className="text-sm leading-relaxed text-white/70">
            Transforming dreams into reality with precision and integrity. Your key to a dream home.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-[#D4AF37]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37]">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-[#D4AF37]">Projects</Link></li>
            <li><Link to="/calculators" className="hover:text-[#D4AF37]">Investment Tools</Link></li>
            <li><Link to="/home-loans" className="hover:text-[#D4AF37]">Loan Assistance</Link></li>
            <li><Link to="/blog" className="hover:text-[#D4AF37]">Insights</Link></li>
            <li><Link to="/knowledge-center" className="hover:text-[#D4AF37]">Knowledge Center</Link></li>
            <li><Link to="/property-basics" className="hover:text-[#D4AF37]">Know Your Property</Link></li>
            <li><Link to="/buying-guides" className="hover:text-[#D4AF37]">Buying Guides</Link></li>
            <li><Link to="/faq" className="hover:text-[#D4AF37]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-[#D4AF37]">Contact Info</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#D4AF37]" /> info@royalrealitygroups.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[#D4AF37]" /> +91 79939 99958</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#D4AF37]" /> Akella Elite, Sairam Colony, Kommadi, Madhurawada, Visakhapatnam 530048</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-lg text-[#D4AF37]">Ready to Begin?</h4>
          <p className="mb-4 text-sm text-white/70">Schedule a consultation and let's turn your dream home into reality.</p>
          <Link to="/contact" className="inline-block rounded-sm bg-[#D4AF37] px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#E8C84B]">
            Book Now
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        <div className="mb-3 flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/vizagpropertyadda?igsh=ZXZ3bW04emkydWk%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-[#D4AF37]">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/share/1BcXQwzFpm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-[#D4AF37]">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://wa.me/917993999958" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/50 hover:text-[#25D366]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <div className="mb-2 flex items-center justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-[#D4AF37]">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-[#D4AF37]">Terms & Conditions</Link>
        </div>
        © {new Date().getFullYear()} Royal Reality Groups. Key to your dream home.
      </div>
    </footer>
  );
}
