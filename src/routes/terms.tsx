import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Royal Reality Groups" },
      { name: "description", content: "Terms and Conditions for Royal Reality Groups website." },
    ],
  }),
});

function Terms() {
  return (
    <>
      <section className="border-b border-border/60 bg-card py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-serif text-4xl text-foreground md:text-5xl">Terms & Conditions</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Acceptance of Terms</h2>
            <p>By accessing and using the Royal Reality Groups website, you accept and agree to be bound by these terms and conditions.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Property Information</h2>
            <p>All property details, pricing, specifications, and availability mentioned on this website are subject to change without prior notice. Images shown are for representation purposes and may vary from actual delivery.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">No Guarantee of Availability</h2>
            <p>Listing a property on this website does not guarantee its availability. All bookings are subject to confirmation by our sales team.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Intellectual Property</h2>
            <p>All content on this website including text, images, logos, and design is the property of Royal Reality Groups and is protected by applicable intellectual property laws.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Limitation of Liability</h2>
            <p>Royal Reality Groups shall not be liable for any direct, indirect, or consequential damages arising from the use of this website or reliance on information provided herein.</p>
          </div>
          <div>
            <h2 className="mb-3 font-serif text-xl text-foreground">Contact</h2>
            <p>For any questions regarding these terms, contact us at info@royalrealitygroups.com or call +91 79939 99958.</p>
          </div>
        </div>
      </section>
    </>
  );
}
