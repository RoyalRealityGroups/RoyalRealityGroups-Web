import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, IndianRupee, Landmark, ArrowRight, MessageCircle, X, Send } from "lucide-react";

export const Route = createFileRoute("/calculators")({
  component: Calculators,
  head: () => ({
    meta: [
      { title: "Real Estate Calculators | Royal Reality Groups" },
      { name: "description", content: "Free online real estate calculators — EMI calculator, home loan eligibility, registration cost, stamp duty and investment return calculators." },
    ],
    links: [{ rel: "canonical", href: "/calculators" }],
  }),
});

function Calculators() {
  const [activeCalc, setActiveCalc] = useState<string>("emi");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);
  const [chatData, setChatData] = useState({
    name: '', mobile: '', email: '', occupation: '', monthlyIncome: '', propertyBudget: '', loanAmount: '', preferredBank: ''
  });
  const [chatSubmitted, setChatSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setChatOpen(true), 3000);
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
    <div className="bg-white">
      {/* Home Loan Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#14345A] px-4 py-3">
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
                  <button type="submit" className="rounded-lg bg-[#D4AF37] p-2 text-[#14345A] hover:bg-[#C79A1B]">
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
          className="fixed bottom-20 right-4 sm:right-6 z-50 flex items-center gap-2 rounded-full bg-[#14345A] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#1E4A7A] transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-[#D4AF37]" /> Loan Assist
        </button>
      )}
      <section className="relative w-full py-20 md:py-28 bg-[#0B1528] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('/photo-1554224155-8d04cb21cd6c.avif')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/50 via-[#0B1528]/70 to-[#0B1528]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-500/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <span className="text-amber-400 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-3 block drop-shadow">PLAN YOUR INVESTMENT</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Online <span className="text-amber-500">Calculators</span></h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-xl mx-auto mb-6">Use our free calculators to plan your real estate investment, estimate monthly EMIs, and assess loan eligibility with precision.</p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-amber-500/70" />
            <div className="w-2 h-2 rotate-45 bg-amber-500" />
            <div className="h-[1px] w-12 bg-amber-500/70" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { id: "emi", label: "EMI Calculator" },
            { id: "eligibility", label: "Loan Eligibility" },
            { id: "registration", label: "Registration & GST" },
            { id: "investment", label: "Investment Return" },
            { id: "loan-assistance", label: "Loan Assistance" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCalc(tab.id)}
              className={`rounded-sm px-4 py-2.5 text-sm font-medium transition-colors ${
                activeCalc === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-input text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="rounded-md border border-border/60 bg-card p-8">
          {activeCalc === "emi" && <EMICalculator />}
          {activeCalc === "eligibility" && <EligibilityCalculator />}
          {activeCalc === "registration" && <RegistrationGSTCalculator />}
          {activeCalc === "investment" && <InvestmentCalculator />}
          {activeCalc === "loan-assistance" && <LoanAssistance />}
        </div>
      </section>
    </div>
  );
}

function EMICalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = monthlyRate > 0 ? principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1) : principal / months;
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  const handleNumberInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || val === '0') {
      setter(0);
      return;
    }
    const num = parseFloat(val);
    if (!isNaN(num)) setter(num);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> EMI Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Calculate your monthly EMI for home loan.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Loan Amount (₹)</label>
            <input type="text" inputMode="numeric" value={principal || ''} onChange={handleNumberInput(setPrincipal)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={500000} max={50000000} step={100000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Interest Rate (% p.a.)</label>
            <input type="text" inputMode="decimal" value={rate || ''} onChange={handleNumberInput(setRate)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={5} max={15} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Loan Tenure (Years)</label>
            <input type="text" inputMode="numeric" value={tenure || ''} onChange={handleNumberInput(setTenure)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Your EMI Results</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Monthly EMI</span>
              <span className="font-serif text-2xl text-primary">₹{isFinite(emi) ? Math.round(emi).toLocaleString("en-IN") : '0'}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Interest</span>
              <span className="font-serif text-lg text-foreground">₹{isFinite(totalInterest) ? Math.round(totalInterest).toLocaleString("en-IN") : '0'}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Payment</span>
              <span className="font-serif text-lg text-foreground">₹{isFinite(totalPayment) ? Math.round(totalPayment).toLocaleString("en-IN") : '0'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Principal Amount</span>
              <span className="font-serif text-lg text-foreground">₹{principal.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EligibilityCalculator() {
  const [income, setIncome] = useState(100000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const maxEmi = (income - existingEmi) * 0.5; // 50% of net income
  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const eligibleAmount = monthlyRate > 0 ? maxEmi * (Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months)) : maxEmi * months;

  const handleNumberInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || val === '0') {
      setter(0);
      return;
    }
    const num = parseFloat(val);
    if (!isNaN(num)) setter(num);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><IndianRupee className="h-6 w-6 text-primary" /> Home Loan Eligibility</h2>
      <p className="mt-2 text-sm text-muted-foreground">Check how much home loan you are eligible for.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Monthly Income (₹)</label>
            <input type="text" inputMode="numeric" value={income || ''} onChange={handleNumberInput(setIncome)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Existing Monthly EMIs (₹)</label>
            <input type="text" inputMode="numeric" value={existingEmi || ''} onChange={handleNumberInput(setExistingEmi)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Interest Rate (% p.a.)</label>
            <input type="text" inputMode="decimal" value={rate || ''} onChange={handleNumberInput(setRate)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Loan Tenure (Years)</label>
            <input type="text" inputMode="numeric" value={tenure || ''} onChange={handleNumberInput(setTenure)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Your Eligibility</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Max Eligible Loan</span>
              <span className="font-serif text-2xl text-primary">₹{Math.round(Math.max(0, eligibleAmount)).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Max Monthly EMI</span>
              <span className="font-serif text-lg text-foreground">₹{Math.round(Math.max(0, maxEmi)).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Available Income for EMI</span>
              <span className="font-serif text-lg text-foreground">₹{Math.round(income - existingEmi).toLocaleString("en-IN")}</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">* Based on 50% of net income available for EMI. Actual eligibility may vary based on bank policies, CIBIL score, and other factors.</p>
        </div>
      </div>
    </div>
  );
}

function RegistrationGSTCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [propertyType, setPropertyType] = useState("residential");
  const [isUnderConstruction, setIsUnderConstruction] = useState(false);

  const stampRate = propertyType === "commercial" ? 0.06 : 0.05;
  const stampDuty = propertyValue * stampRate;
  const transferDuty = propertyValue * 0.005;
  const registrationFee = propertyValue * 0.005;
  const gstRate = isUnderConstruction ? 0.05 : 0;
  const gstAmount = propertyValue * gstRate;
  const userCharges = 1000;
  const totalCost = stampDuty + transferDuty + registrationFee + gstAmount + userCharges;

  const handleNumberInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || val === '0') {
      setter(0);
      return;
    }
    const num = parseFloat(val);
    if (!isNaN(num)) setter(num);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> Registration & GST Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Calculate total registration costs including stamp duty and GST for your property in Andhra Pradesh.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Property Value / Market Value (₹)</label>
            <input type="text" inputMode="numeric" value={propertyValue || ''} onChange={handleNumberInput(setPropertyValue)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={500000} max={50000000} step={100000} value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Property Type</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="underConstruction" checked={isUnderConstruction} onChange={(e) => setIsUnderConstruction(e.target.checked)} className="h-4 w-4 accent-primary" />
            <label htmlFor="underConstruction" className="text-sm font-medium text-foreground">Under Construction (GST applicable at 5%)</label>
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Registration & GST Costs</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Stamp Duty ({(stampRate * 100).toFixed(0)}%)</span>
              <span className="text-sm text-foreground">₹{stampDuty.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Transfer Duty (0.5%)</span>
              <span className="text-sm text-foreground">₹{transferDuty.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Registration Fee (0.5%)</span>
              <span className="text-sm text-foreground">₹{registrationFee.toLocaleString("en-IN")}</span>
            </div>
            {isUnderConstruction && (
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-sm text-muted-foreground">GST (5%)</span>
                <span className="text-sm text-foreground">₹{gstAmount.toLocaleString("en-IN")}</span>
              </div>
            )}
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">User Charges</span>
              <span className="text-sm text-foreground">₹{userCharges.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Total Cost</span>
              <span className="font-serif text-2xl text-primary">₹{totalCost.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* Rates applicable for Andhra Pradesh. GST applies only for under-construction properties. Ready-to-move properties are exempt from GST.</p>
        </div>
      </div>
    </div>
  );
}

function InvestmentCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(5000000);
  const [appreciationRate, setAppreciationRate] = useState(12);
  const [holdingYears, setHoldingYears] = useState(5);
  const [rentalYield, setRentalYield] = useState(3);

  const futureValue = investmentAmount * Math.pow(1 + appreciationRate / 100, holdingYears);
  const capitalGain = futureValue - investmentAmount;
  const totalRentalIncome = investmentAmount * (rentalYield / 100) * holdingYears;
  const totalReturn = capitalGain + totalRentalIncome;
  const annualizedReturn = holdingYears > 0 ? (Math.pow((futureValue + totalRentalIncome) / investmentAmount, 1 / holdingYears) - 1) * 100 : 0;

  const handleNumberInput = (setter: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || val === '0') {
      setter(0);
      return;
    }
    const num = parseFloat(val);
    if (!isNaN(num)) setter(num);
  };

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> Investment Return Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Estimate your returns from real estate investment.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Investment Amount (₹)</label>
            <input type="text" inputMode="numeric" value={investmentAmount || ''} onChange={handleNumberInput(setInvestmentAmount)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Expected Appreciation (% p.a.)</label>
            <input type="text" inputMode="decimal" value={appreciationRate || ''} onChange={handleNumberInput(setAppreciationRate)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={5} max={30} step={0.5} value={appreciationRate} onChange={(e) => setAppreciationRate(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Holding Period (Years)</label>
            <input type="text" inputMode="numeric" value={holdingYears || ''} onChange={handleNumberInput(setHoldingYears)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Rental Yield (% p.a.)</label>
            <input type="text" inputMode="decimal" value={rentalYield || ''} onChange={handleNumberInput(setRentalYield)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Estimated Returns</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Future Property Value</span>
              <span className="font-serif text-lg text-foreground">₹{Math.round(futureValue).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Capital Appreciation</span>
              <span className="text-sm text-green-600">+₹{Math.round(capitalGain).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Rental Income</span>
              <span className="text-sm text-green-600">+₹{Math.round(totalRentalIncome).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Return</span>
              <span className="font-serif text-2xl text-primary">₹{Math.round(totalReturn).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Annualized Return</span>
              <span className="font-serif text-lg text-green-600">{annualizedReturn.toFixed(1)}%</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* These are estimates based on assumed appreciation rates. Actual returns may vary.</p>
        </div>
      </div>
    </div>
  );
}

function LoanAssistance() {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground">
        <Landmark className="h-6 w-6 text-primary" /> Loan Assistance
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        We provide end-to-end home loan assistance to make your property purchase smooth and hassle-free.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border/60 bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <IndianRupee className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-serif text-lg text-foreground">Best Rate Negotiation</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We leverage our relationships with top banks to get you the lowest possible interest rates.
          </p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-serif text-lg text-foreground">Documentation Support</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete assistance with all paperwork — from application to disbursement.
          </p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Landmark className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 font-serif text-lg text-foreground">Multiple Bank Options</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Access to SBI, HDFC, ICICI, Axis, and other leading banks for the best loan terms.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
        <h3 className="font-serif text-xl text-foreground">Need Loan Assistance?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our dedicated team helps you through the entire home loan process — from eligibility check to final disbursement.
        </p>
        <Link
          to="/home-loans"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#14345A] hover:bg-[#C79A1B] transition-colors"
        >
          Explore Full Loan Services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
