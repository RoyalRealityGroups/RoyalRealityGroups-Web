import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Royal Reality Groups" },
      { name: "description", content: "Privacy Policy for Royal Reality Groups website." },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Information We Collect</h2>
            <p>We collect personal information you provide to us, including name, phone number, email address, and property preferences when you fill out enquiry forms, book site visits, or contact us through our website.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">How We Use Your Information</h2>
            <p>Your information is used to respond to enquiries, schedule site visits, provide property recommendations, send updates about projects, and improve our services. We do not sell your personal information to third parties.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at info@royalrealitygroups.com or call +91 79939 99958.</p>
          </div>
        </div>
      </section>
    </>
  );
}
