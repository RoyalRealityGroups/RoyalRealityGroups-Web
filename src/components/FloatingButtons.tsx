import { useState, useEffect } from "react";
import { Phone, X, Calendar, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // Scroll-based popup - show after 40% scroll
  useEffect(() => {
    let shown = false;
    const handleScroll = () => {
      if (shown) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) {
        shown = true;
        setShowEnquiry(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll-Based Enquiry Popup */}
      {showEnquiry && !enquirySubmitted && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center mb-4">
              <MessageCircle className="mx-auto h-10 w-10 text-[#D4AF37]" />
              <h3 className="mt-2 font-serif text-xl text-[#14345A]">Interested in Premium Properties?</h3>
              <p className="mt-1 text-sm text-gray-600">Get expert guidance & exclusive deals</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); setTimeout(() => setShowEnquiry(false), 2000); }}>
              <div className="space-y-3">
                <input required placeholder="Your Name" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37]" />
                <input required type="tel" placeholder="Mobile Number" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37]" />
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37]">
                  <option value="">I'm interested in...</option>
                  <option value="site-visit">Schedule a Site Visit</option>
                  <option value="expert">Talk to an Expert</option>
                  <option value="callback">Request a Callback</option>
                  <option value="project">Enquire about Projects</option>
                </select>
                <button type="submit" className="w-full rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B]">
                  Submit Enquiry
                </button>
              </div>
            </form>
            <p className="mt-3 text-center text-xs text-gray-400">We'll get back to you within 30 minutes</p>
          </div>
        </div>
      )}

      {/* Success message */}
      {showEnquiry && enquirySubmitted && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="font-serif text-xl text-[#14345A]">Thank You!</h3>
            <p className="mt-2 text-sm text-gray-600">Our team will contact you shortly.</p>
          </div>
        </div>
      )}

      {/* Floating buttons stacked on right side */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-center gap-2 sm:gap-3">
        {/* Instagram Floating Button */}
        <a
          href="https://www.instagram.com/vizagpropertyadda?igsh=ZXZ3bW04emkydWk%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 sm:h-7 sm:w-7">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917993999958?text=Hi%2C%20I%20am%20interested%20in%20Royal%20Reality%20Groups%20properties.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Call Now Button */}
        <a
          href="tel:+917993999958"
          aria-label="Call Now"
          className="flex items-center gap-2 rounded-full bg-[#14345A] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>
    </>
  );
}
