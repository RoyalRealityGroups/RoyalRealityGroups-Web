import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

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
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-md border border-border/60 bg-card p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="First Name" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <input required placeholder="Last Name" className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <input required type="email" placeholder="Your Email" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <textarea required rows={5} placeholder="Your Message" className="mt-4 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <button type="submit" className="mt-5 w-full rounded-sm bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
            Book Now
          </button>
          {submitted && (
            <p className="mt-4 text-center text-sm text-primary">Thank you! We'll be in touch shortly.</p>
          )}
        </form>
      </section>
    </>
  );
}
