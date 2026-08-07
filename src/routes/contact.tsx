import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Calendar, Clock, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | Royal Reality Groups" },
      { name: "description", content: "Get in touch with Royal Reality Groups. Call +91 79939 99958 or visit our office in Madhurawada, Visakhapatnam to start your real estate journey." },
      { property: "og:title", content: "Contact Us | Royal Reality Groups" },
      { property: "og:description", content: "Have questions or need assistance? Contact our team today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"enquiry" | "booking">("enquiry");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitLead({
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      mobile: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || undefined,
      lead_source: "WEBSITE",
      property_requirement: (formData.get("interest") as string) || "General Enquiry",
      remarks: `Contact page enquiry: ${formData.get("message") || ""}`,
    });

    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error || "Failed to submit");
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await submitLead({
      name: formData.get("bookingName") as string,
      mobile: formData.get("bookingPhone") as string,
      email: (formData.get("bookingEmail") as string) || undefined,
      lead_source: "WEBSITE",
      property_requirement: (formData.get("bookingProject") as string) || "Site Visit",
      remarks: `Site Visit Booking - Date: ${formData.get("bookingDate")}, Time: ${formData.get("bookingTime")}, Notes: ${formData.get("bookingNotes") || "None"}`,
    });

    setIsSubmitting(false);
    if (result.success) {
      setBookingSubmitted(true);
    } else {
      setSubmitError(result.error || "Failed to submit");
    }
  };

  return (
    <div className="bg-white">
      <section className="relative w-full py-20 md:py-28 bg-[#14345A] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('/photo-1423666639041-f56000c27a9a.avif')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14345A]/50 via-[#14345A]/70 to-[#14345A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#D4AF37]/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-[#D4AF37] font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block drop-shadow">GET IN TOUCH</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Contact <span className="text-[#D4AF37]">Us</span></h1>
          <p className="text-[#E5E7EB] text-base leading-relaxed max-w-xl mx-auto mb-6">Have questions or need assistance? Contact us today and let our team help you find your dream property.</p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-12 bg-[#D4AF37]/70" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#D4AF37] p-3 text-[#14345A]"><Phone className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-[#14345A]">Contact Number</h3>
              <p className="mt-1 text-[#6B7280]">+91 79939 99958</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#D4AF37] p-3 text-[#14345A]"><Mail className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-[#14345A]">Email</h3>
              <p className="mt-1 text-[#6B7280]">info@royalrealitygroups.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#D4AF37] p-3 text-[#14345A]"><MapPin className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-[#14345A]">Office Address</h3>
              <p className="mt-1 leading-relaxed text-[#6B7280]">
                D.No: 10-8/5/25 Akella Elite, Flat No: 102, Ground Floor, Sairam Colony,
                Kommadi, Madhurawada, Visakhapatnam 530048
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-lg bg-[#D4AF37] p-3 text-[#14345A]"><Clock className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-[#14345A]">Office Hours</h3>
              <p className="mt-1 text-[#6B7280]">Open All Days: 9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          {/* Tabs */}
          <div className="flex border-b border-[#E5E7EB]">
            <button
              onClick={() => setActiveTab("enquiry")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "enquiry" ? "border-b-2 border-[#D4AF37] text-[#14345A]" : "text-[#6B7280] hover:text-[#1F2937]"}`}
            >
              General Enquiry
            </button>
            <button
              onClick={() => setActiveTab("booking")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "booking" ? "border-b-2 border-[#D4AF37] text-[#14345A]" : "text-[#6B7280] hover:text-[#1F2937]"}`}
            >
              Book Site Visit
            </button>
          </div>

          <div className="p-8">
            {activeTab === "enquiry" ? (
              <form onSubmit={handleEnquirySubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="firstName" required placeholder="First Name" className="rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                  <input name="lastName" required placeholder="Last Name" className="rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                </div>
                <input name="email" type="email" placeholder="Your Email (optional)" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                <input name="phone" type="tel" placeholder="Phone Number" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                <select name="interest" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]">
                  <option value="">Interested In...</option>
                  <option value="Plots">Plots</option>
                  <option value="Villas">Villas</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Other">Other</option>
                </select>
                <textarea name="message" required rows={4} placeholder="Your Message" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                {submitError && <p className="mt-2 text-sm text-red-500">{submitError}</p>}
                <button type="submit" disabled={isSubmitting} className="mt-5 w-full rounded-lg bg-[#14345A] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#D4AF37] hover:text-[#14345A] transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</> : "Send Enquiry"}
                </button>
                {submitted && (
                  <p className="mt-4 text-center text-2xl font-semibold text-[#D4AF37]">Thank you! We'll be in touch shortly.</p>
                )}
              </form>
            ) : (
              <form onSubmit={handleBookingSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="bookingName" required placeholder="Your Name" className="rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                  <input name="bookingPhone" required type="tel" placeholder="Phone Number" className="rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                </div>
                <input name="bookingEmail" type="email" placeholder="Email (optional)" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                <select name="bookingProject" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]">
                  <option value="">Select Project</option>
                  <option value="Chitra Vilasa Garden City">Chitra Vilasa Garden City</option>
                  <option value="Integral Sunrise City">Integral Sunrise City</option>
                  <option value="Royal Luxury Residences">Royal Luxury Residences</option>
                </select>
                <input name="bookingDate" required type="date" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]" />
                <select name="bookingTime" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#D4AF37]">
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                  <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                </select>
                <textarea name="bookingNotes" rows={3} placeholder="Any specific requirements or questions?" className="mt-4 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none focus:border-[#D4AF37]" />
                {submitError && <p className="mt-2 text-sm text-red-500">{submitError}</p>}
                <button type="submit" disabled={isSubmitting} className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#14345A] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#D4AF37] hover:text-[#14345A] transition-colors disabled:opacity-60">
                  {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</> : <><Calendar className="h-4 w-4" /> Book Site Visit</>}
                </button>
                {bookingSubmitted && (
                  <p className="mt-4 text-center text-sm text-[#D4AF37]">Site visit booked! Our team will confirm shortly.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="mb-6 text-center font-serif text-3xl text-foreground">Find Us On Map</h2>
          <div className="aspect-[2/1] overflow-hidden rounded-md border border-border/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4!2d83.3801!3d17.7801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530048!5e0!3m2!1sen!2sin!4v1"
              title="Royal Reality Groups Office Location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
