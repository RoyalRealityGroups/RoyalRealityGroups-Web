import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";

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

  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Get In Touch</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Contact <span className="text-gold-gradient">Us</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">Have questions or need assistance? Contact us today and let our team help you.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <span className="rounded-sm bg-gold-gradient p-3 text-primary-foreground"><Phone className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-foreground">Contact Number</h3>
              <p className="mt-1 text-muted-foreground">+91 79939 99958</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-sm bg-gold-gradient p-3 text-primary-foreground"><Mail className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-foreground">Email</h3>
              <p className="mt-1 text-muted-foreground">info@royalrealitygroups.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-sm bg-gold-gradient p-3 text-primary-foreground"><MapPin className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-foreground">Office Address</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                D.No: 10-8/5/25 Akella Elite, Flat No: 102, Ground Floor, Sairam Colony,
                Kommadi, Madhurawada, Visakhapatnam 530048
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="rounded-sm bg-gold-gradient p-3 text-primary-foreground"><Clock className="h-5 w-5" /></span>
            <div>
              <h3 className="font-serif text-xl text-foreground">Office Hours</h3>
              <p className="mt-1 text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-muted-foreground">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-border/60 bg-card">
          {/* Tabs */}
          <div className="flex border-b border-border/60">
            <button
              onClick={() => setActiveTab("enquiry")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "enquiry" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              General Enquiry
            </button>
            <button
              onClick={() => setActiveTab("booking")}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "booking" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Book Site Visit
            </button>
          </div>

          <div className="p-8">
            {activeTab === "enquiry" ? (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="First Name" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <input required placeholder="Last Name" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                </div>
                <input required type="email" placeholder="Your Email" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone Number" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <select className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  <option value="">Interested In...</option>
                  <option value="plots">Plots</option>
                  <option value="villas">Villas</option>
                  <option value="apartments">Apartments</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
                <textarea required rows={4} placeholder="Your Message" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <button type="submit" className="mt-5 w-full rounded-sm bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                  Send Enquiry
                </button>
                {submitted && (
                  <p className="mt-4 text-center text-sm text-primary">Thank you! We'll be in touch shortly.</p>
                )}
              </form>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your Name" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <input required type="tel" placeholder="Phone Number" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                </div>
                <input type="email" placeholder="Email (optional)" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <select className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  <option value="">Select Project</option>
                  <option value="chitra-vilasa">Chitra Vilasa Garden City</option>
                  <option value="integral-sunrise">Integral Sunrise City</option>
                  <option value="royal-luxury">Royal Luxury Residences</option>
                </select>
                <input required type="date" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <select className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                </select>
                <textarea rows={3} placeholder="Any specific requirements or questions?" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
                  <Calendar className="h-4 w-4" /> Book Site Visit
                </button>
                {bookingSubmitted && (
                  <p className="mt-4 text-center text-sm text-primary">Site visit booked! Our team will confirm shortly.</p>
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
    </>
  );
}
