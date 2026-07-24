import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calculator, IndianRupee } from "lucide-react";

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

  return (
    <div className="bg-white">
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
            { id: "registration", label: "Registration Cost" },
            { id: "stamp", label: "Stamp Duty" },
            { id: "investment", label: "Investment Return" },
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
          {activeCalc === "registration" && <RegistrationCalculator />}
          {activeCalc === "stamp" && <StampDutyCalculator />}
          {activeCalc === "investment" && <InvestmentCalculator />}
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
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> EMI Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Calculate your monthly EMI for home loan.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Loan Amount (₹)</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={500000} max={50000000} step={100000} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Interest Rate (% p.a.)</label>
            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={5} max={15} step={0.1} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Loan Tenure (Years)</label>
            <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Your EMI Results</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Monthly EMI</span>
              <span className="font-serif text-2xl text-primary">₹{Math.round(emi).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Interest</span>
              <span className="font-serif text-lg text-foreground">₹{Math.round(totalInterest).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Total Payment</span>
              <span className="font-serif text-lg text-foreground">₹{Math.round(totalPayment).toLocaleString("en-IN")}</span>
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
  const eligibleAmount = maxEmi * (Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months));

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><IndianRupee className="h-6 w-6 text-primary" /> Home Loan Eligibility</h2>
      <p className="mt-2 text-sm text-muted-foreground">Check how much home loan you are eligible for.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Monthly Income (₹)</label>
            <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Existing Monthly EMIs (₹)</label>
            <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Interest Rate (% p.a.)</label>
            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Loan Tenure (Years)</label>
            <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
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

function RegistrationCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);

  const stampDuty = propertyValue * 0.05;
  const transferDuty = propertyValue * 0.005;
  const registrationFee = propertyValue * 0.005;
  const userCharges = 1000;
  const totalCost = stampDuty + transferDuty + registrationFee + userCharges;

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> Registration Cost Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Calculate total registration costs for your property in Andhra Pradesh.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-foreground">Property Value / Market Value (₹)</label>
          <input type="number" value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          <input type="range" min={500000} max={50000000} step={100000} value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="mt-2 w-full accent-primary" />
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Registration Costs</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Stamp Duty (5%)</span>
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
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">User Charges</span>
              <span className="text-sm text-foreground">₹{userCharges.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Total Cost</span>
              <span className="font-serif text-2xl text-primary">₹{totalCost.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* Rates applicable for Andhra Pradesh. Rates may vary based on latest government orders.</p>
        </div>
      </div>
    </div>
  );
}

function StampDutyCalculator() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [propertyType, setPropertyType] = useState("residential");

  const stampRate = propertyType === "commercial" ? 0.06 : 0.05;
  const stampDuty = propertyValue * stampRate;

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> Stamp Duty Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Calculate stamp duty payable on your property purchase.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Property Value (₹)</label>
            <input type="number" value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={500000} max={50000000} step={100000} value={propertyValue} onChange={(e) => setPropertyValue(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Property Type</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        </div>

        <div className="rounded-md border border-primary/30 bg-primary/5 p-6">
          <h3 className="text-center font-serif text-xl text-foreground">Stamp Duty</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Property Value</span>
              <span className="text-sm text-foreground">₹{propertyValue.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <span className="text-sm text-muted-foreground">Stamp Duty Rate</span>
              <span className="text-sm text-foreground">{(stampRate * 100).toFixed(0)}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Stamp Duty Payable</span>
              <span className="font-serif text-2xl text-primary">₹{stampDuty.toLocaleString("en-IN")}</span>
            </div>
          </div>
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
  const totalReturnPercent = (totalReturn / investmentAmount) * 100;
  const annualizedReturn = (Math.pow((futureValue + totalRentalIncome) / investmentAmount, 1 / holdingYears) - 1) * 100;

  return (
    <div>
      <h2 className="flex items-center gap-2 font-serif text-2xl text-foreground"><Calculator className="h-6 w-6 text-primary" /> Investment Return Calculator</h2>
      <p className="mt-2 text-sm text-muted-foreground">Estimate your returns from real estate investment.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-foreground">Investment Amount (₹)</label>
            <input type="number" value={investmentAmount} onChange={(e) => setInvestmentAmount(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Expected Appreciation (% p.a.)</label>
            <input type="number" step="0.5" value={appreciationRate} onChange={(e) => setAppreciationRate(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
            <input type="range" min={5} max={30} step={0.5} value={appreciationRate} onChange={(e) => setAppreciationRate(Number(e.target.value))} className="mt-2 w-full accent-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Holding Period (Years)</label>
            <input type="number" value={holdingYears} onChange={(e) => setHoldingYears(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Rental Yield (% p.a.)</label>
            <input type="number" step="0.5" value={rentalYield} onChange={(e) => setRentalYield(Number(e.target.value))} className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
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
