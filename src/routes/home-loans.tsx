import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building, Shield, BadgePercent, Clock, Users, FileCheck, MessageCircle, X, Send } from "lucide-react";

export const Route = createFileRoute("/home-loans")({
  component: HomeLoans,
  head: () => ({
    meta: [
      { title: "Home Loan & Banking Assistance | Royal Reality Groups" },
      { name: "description", content: "Get home loan assistance from Royal Reality Groups. We help you find the best loan rates, complete documentation, and ensure smooth disbursement." },
    ],
    links: [{ rel: "canonical", href: "/home-loans" }],
  }),
});

const banks = [
  { name: "State Bank of India", rate: "8.50%", maxTenure: "30 years", processing: "0.35%" },
  { name: "HDFC Bank", rate: "8.70%", maxTenure: "30 years", processing: "0.50%" },
  { name: "ICICI Bank", rate: "8.75%", maxTenure: "30 years", processing: "0.50%" },
  { name: "Axis Bank", rate: "8.75%", maxTenure: "25 years", processing: "1.00%" },
  { name: "Bank of Baroda", rate: "8.40%", maxTenure: "30 years", processing: "0.25%" },
  { name: "Punjab National Bank", rate: "8.45%", maxTenure: "30 years", processing: "0.35%" },
];

const services = [
  { icon: BadgePercent, title: "Best Rate Negotiation", desc: "We leverage our relationships with banks to get you the lowest possible interest rates." },
  { icon: FileCheck, title: "Documentation Support", desc: "Complete assistance with all paperwork — from application to disbursement." },
  { icon: Clock, title: "Fast Processing", desc: "Our dedicated team ensures quick sanction and timely disbursement." },
  { icon: Shield, title: "Free CIBIL Check", desc: "We help you check and improve your credit score before applying." },
  { icon: Users, title: "Multiple Bank Options", desc: "Compare offers from 10+ banks and choose the best one for you." },
  { icon: Building, title: "End-to-End Support", desc: "From eligibility check to final disbursement, we're with you every step." },
];

function HomeLoans() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatData, setChatData] = useState({
    name: '', mobile: '', email: '', occupation: '', monthlyIncome: '', propertyBudget: '', loanAmount: '', preferredBank: ''
  });
  const [chatSubmitted, setChatSubmitted] = useState(false);

  // Auto-open chatbot after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setChatOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const chatQuestions = [
    { key: 'name', question: "👋 Hi! I'm your Home Loan Assistant. What's your name?", placeholder: "Enter your name" },
    { key: 'mobile', question: `Nice to meet you, ${chatData.name || 'there'}! What's your mobile number?`, placeholder: "Enter mobile number" },
    { key: 'email', question: "Great! What's your email address?", placeholder: "Enter email (optional)" },
    { key: 'occupation', question: "What's your occupation?", placeholder: "e.g., Salaried, Self-Employed, Business" },
    { key: 'monthlyIncome', question: "What's your monthly income (approx)?", placeholder: "e.g., ₹50,000" },
    { key: 'propertyBudget', question: "What's your property budget?", placeholder: "e.g., ₹50,00,000" },
    { key: 'loanAmount', question: "How much loan amount do you need?", placeholder: "e.g., ₹40,00,000" },
    { key: 'preferredBank', question: "Any preferred bank? (Optional)", placeholder: "e.g., SBI, HDFC, or skip" },
  ];

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatStep < chatQuestions.length - 1) {
      setChatStep(chatStep + 1);
    } else {
      setChatSubmitted(true);
    }
  };

  return (
    <>
      {/* Home Loan Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#1A1A2E] px-4 py-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-sm font-semibold text-white">Home Loan Assistant</span>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white" aria-label="Close chat">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 max-h-[300px] overflow-y-auto">
            {chatSubmitted ? (
              <div className="text-center py-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-sm font-medium text-[#1F2937]">Thank you, {chatData.name}!</p>
                <p className="mt-1 text-xs text-[#6B7280]">Our loan expert will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="mb-3 rounded-lg bg-[#F3F4F6] p-3">
                  <p className="text-sm text-[#1F2937]">{chatQuestions[chatStep].question}</p>
                </div>
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <input
                    type={chatQuestions[chatStep].key === 'mobile' ? 'tel' : chatQuestions[chatStep].key === 'email' ? 'email' : 'text'}
                    placeholder={chatQuestions[chatStep].placeholder}
                    value={chatData[chatQuestions[chatStep].key as keyof typeof chatData]}
                    onChange={(e) => setChatData({ ...chatData, [chatQuestions[chatStep].key]: e.target.value })}
                    required={chatQuestions[chatStep].key !== 'email' && chatQuestions[chatStep].key !== 'preferredBank'}
                    className="flex-1 rounded-lg border border-[#D1D5DB] px-3 py-2 text-sm outline-none focus:border-[#D4AF37]"
                    autoFocus
                  />
                  <button type="submit" className="rounded-lg bg-[#D4AF37] p-2 text-[#1A1A2E] hover:bg-[#C79A1B]">
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                <div className="mt-2 flex gap-1">
                  {chatQuestions.map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i <= chatStep ? 'bg-[#D4AF37]' : 'bg-[#E5E7EB]'}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Re-open chat button if closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-20 right-4 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-[#1A1A2E] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#2A2A4E] transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-[#D4AF37]" /> Loan Assist
        </button>
      )}
      <section className="border-b border-border/60 bg-card pt-32 pb-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Financial Assistance</p>
          <h1 className="mt-4 font-serif text-5xl text-foreground md:text-6xl">Home Loan & <span className="text-gold-gradient">Banking</span></h1>
          <p className="mx-auto mt-5 text-muted-foreground">
            We make your home buying journey smoother with expert loan assistance from India's top banks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center font-serif text-3xl text-foreground">Our Loan Assistance Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-md border border-border/60 bg-card p-6">
              <s.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bank Rates */}
      <section className="border-t border-border/60 bg-card py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-2 text-center font-serif text-3xl text-foreground">Current Home Loan Rates</h2>
          <p className="mb-10 text-center text-sm text-muted-foreground">Approximate rates as of 2024. Actual rates may vary.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">Bank</th>
                  <th className="p-4 text-center text-sm font-medium text-muted-foreground">Interest Rate</th>
                  <th className="p-4 text-center text-sm font-medium text-muted-foreground">Max Tenure</th>
                  <th className="p-4 text-center text-sm font-medium text-muted-foreground">Processing Fee</th>
                </tr>
              </thead>
              <tbody>
                {banks.map((bank, i) => (
                  <tr key={bank.name} className={`border-b border-border/60 ${i % 2 === 0 ? "bg-background" : ""}`}>
                    <td className="p-4 text-sm font-medium text-foreground">{bank.name}</td>
                    <td className="p-4 text-center text-sm text-primary font-semibold">{bank.rate}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{bank.maxTenure}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{bank.processing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground">General Eligibility Criteria</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Age: 21 to 65 years</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Minimum income: ₹25,000/month (salaried)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> CIBIL score: 700+ preferred</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Stable employment (min 2 years for salaried)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Business vintage: 3+ years (self-employed)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> EMI-to-income ratio below 50%</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-foreground">Documents Required</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Identity proof (Aadhaar, PAN, Passport)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Address proof</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Income proof (salary slips / ITR)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Bank statements (6-12 months)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Property documents (sale agreement, EC, title deed)</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" /> Passport-size photographs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-card py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-foreground">Need Loan Assistance?</h2>
          <p className="mt-3 text-muted-foreground">Our team will help you find the best loan deal. Free consultation.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/calculators" className="inline-flex items-center gap-2 rounded-sm border border-primary/60 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10">
              EMI Calculator <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
