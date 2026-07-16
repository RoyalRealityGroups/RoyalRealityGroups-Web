import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQ,
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Royal Reality Groups" },
      { name: "description", content: "Find answers to common questions about buying property in Visakhapatnam — plots, villas, apartments, home loans, registration, and more." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What types of properties does Royal Reality Groups offer?",
        a: "We offer premium residential plots, villas, apartments, and commercial properties in Visakhapatnam. Our projects range from budget-friendly plots to luxury residences.",
      },
      {
        q: "Where are your projects located?",
        a: "Our projects are strategically located in Visakhapatnam's prime areas including Madhurawada, Anandapuram, MVP Colony, Kommadi, and Rushikonda — close to IT hubs, schools, hospitals, and beaches.",
      },
      {
        q: "Do you offer site visits?",
        a: "Yes! We offer free site visits to all our projects. You can book a site visit through our website or call us at +91 79939 99958. Our team will arrange transportation and a guided tour.",
      },
      {
        q: "Are your layouts government approved?",
        a: "Absolutely. All our layouts are approved by VMRDA/GVMC with clear titles and proper documentation. We ensure 100% legal compliance in all our projects.",
      },
    ],
  },
  {
    category: "Buying Process",
    questions: [
      {
        q: "What is the process to buy a plot/property?",
        a: "The process involves: 1) Select a property, 2) Book with token advance, 3) Complete documentation, 4) Register the property, 5) Get possession. Our team guides you through every step.",
      },
      {
        q: "What documents do I need to purchase a property?",
        a: "You'll need: Aadhaar card, PAN card, address proof, passport-size photos, and income proof (if availing loan). For NRIs, additional documents like passport and visa copies are needed.",
      },
      {
        q: "Can NRIs purchase property?",
        a: "Yes, NRIs can purchase residential and commercial properties in India. We have a dedicated NRI desk to assist with documentation, power of attorney, and remote registration processes.",
      },
      {
        q: "What is the booking amount?",
        a: "Booking amounts vary by project, typically 10-20% of the property value. The remaining amount can be paid in installments or through home loan disbursement.",
      },
    ],
  },
  {
    category: "Home Loans",
    questions: [
      {
        q: "Do you assist with home loans?",
        a: "Yes, we provide end-to-end home loan assistance. We work with all major banks including SBI, HDFC, ICICI, and Axis Bank to get you the best rates and quick approvals.",
      },
      {
        q: "What is the minimum CIBIL score required for a home loan?",
        a: "Most banks prefer a CIBIL score of 700+. However, some banks may approve loans with scores as low as 650 with higher interest rates. We can help you understand your options.",
      },
      {
        q: "How much loan can I get?",
        a: "Banks typically finance up to 80-90% of the property value. The exact amount depends on your income, existing liabilities, CIBIL score, and the property value. Use our EMI calculator to estimate.",
      },
    ],
  },
  {
    category: "Legal & Documentation",
    questions: [
      {
        q: "What is RERA and is your project registered?",
        a: "RERA (Real Estate Regulatory Authority) protects buyers' interests. Our applicable projects are RERA registered, ensuring transparency, timely delivery, and accountability.",
      },
      {
        q: "What is the difference between VMRDA and GVMC approval?",
        a: "GVMC approval is for properties within Greater Visakhapatnam Municipal Corporation limits. VMRDA approval is for properties in the wider metropolitan region outside GVMC limits. Both are valid government approvals.",
      },
      {
        q: "What are the registration charges in Andhra Pradesh?",
        a: "Registration charges include: Stamp Duty (5%), Transfer Duty (0.5%), and Registration Fee (0.5%) — totaling approximately 6% of the property market value.",
      },
      {
        q: "What is LRS and why is it important?",
        a: "LRS (Layout Regularization Scheme) is a government scheme to regularize unauthorized layouts. Properties with LRS approval have legal status and are eligible for building permissions and bank loans.",
      },
    ],
  },
  {
    category: "Investment",
    questions: [
      {
        q: "Is Visakhapatnam a good place to invest in real estate?",
        a: "Absolutely. Visakhapatnam is experiencing rapid growth with IT corridor development, proposed executive capital status, excellent connectivity, and a growing economy. Property appreciation has been 12-20% annually in developing areas.",
      },
      {
        q: "What is the expected return on investment?",
        a: "Returns vary by location and property type. Developing areas like Madhurawada-Anandapuram corridor have seen 15-25% annual appreciation. Rental yields range from 2-4% for residential properties.",
      },
      {
        q: "Is it better to buy a plot or an apartment?",
        a: "Plots generally offer higher appreciation but no rental income until construction. Apartments offer immediate rental income and are ready to use. Your choice depends on your investment goals, budget, and timeline.",
      },
    ],
  },
];

function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggle = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      <section className="border-b border-border/60 bg-card py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Got Questions?</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Frequently Asked <span className="text-gold-gradient">Questions</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">Find answers to common questions about buying property with Royal Reality Groups.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        {faqs.map((section) => (
          <div key={section.category} className="mb-10">
            <h2 className="mb-4 font-serif text-2xl text-foreground">{section.category}</h2>
            <div className="space-y-3">
              {section.questions.map((faq, i) => {
                const id = `${section.category}-${i}`;
                const isOpen = openItems.includes(id);
                return (
                  <div key={id} className="rounded-md border border-border/60 bg-card">
                    <button
                      onClick={() => toggle(id)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-foreground">{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 px-6 py-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
