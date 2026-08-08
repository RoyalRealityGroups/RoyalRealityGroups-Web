import { useState } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { submitLead } from "@/lib/api";

const CHAT_TOPICS = [
  { id: "projects", label: "🏠 Project Information" },
  { id: "loans", label: "🏦 Home Loans" },
  { id: "buying", label: "📋 Buying Guide" },
  { id: "investment", label: "📈 Investment Guide" },
  { id: "contact", label: "📞 Contact & Support" },
  { id: "general", label: "💬 General Enquiry" },
];

export function DashboardChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"topics" | "lead" | "done">("topics");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [leadData, setLeadData] = useState({ name: "", mobile: "", email: "", requirement: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setStep("lead");
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const topicLabel = CHAT_TOPICS.find(t => t.id === selectedTopic)?.label || selectedTopic;
    const result = await submitLead({
      name: leadData.name,
      mobile: leadData.mobile,
      email: leadData.email || undefined,
      lead_source: "WEBSITE",
      property_requirement: topicLabel,
      remarks: `Chatbot enquiry - Topic: ${topicLabel}, Requirement: ${leadData.requirement || "Not specified"}`,
    });

    setIsSubmitting(false);
    if (result.success) {
      setStep("done");
    } else {
      setSubmitError(result.error || "Failed to submit");
    }
  };

  const resetChat = () => {
    setStep("topics");
    setSelectedTopic("");
    setLeadData({ name: "", mobile: "", email: "", requirement: "" });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-4 sm:left-5 z-50 flex items-center gap-2 rounded-full bg-[#14345A] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#1E4A7A] transition-all animate-bounce"
        aria-label="Open Chatbot"
      >
        <Bot className="h-5 w-5 text-[#D4AF37]" />
        <span className="text-xs sm:text-sm">Need Help?</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 sm:left-5 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-[#14345A] px-4 py-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-[#D4AF37]" />
          <span className="text-sm font-semibold text-white">Royal Reality Assistant</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white" aria-label="Close chat">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 max-h-[350px] overflow-y-auto">
        {step === "topics" && (
          <>
            <div className="mb-3 rounded-lg bg-gray-100 p-3">
              <p className="text-sm text-gray-800">👋 Hello! How can I help you today? Choose a topic below:</p>
            </div>
            <div className="space-y-2">
              {CHAT_TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic.id)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </>
        )}

        {step === "lead" && (
          <>
            <div className="mb-3 rounded-lg bg-gray-100 p-3">
              <p className="text-sm text-gray-800">Great choice! Please share your details so our expert can assist you:</p>
            </div>
            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <input
                required
                placeholder="Your Name *"
                value={leadData.name}
                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]"
              />
              <input
                required
                type="tel"
                placeholder="Mobile Number *"
                value={leadData.mobile}
                onChange={(e) => setLeadData({ ...leadData, mobile: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={leadData.email}
                onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37]"
              />
              <textarea
                placeholder="Your Requirement (optional)"
                value={leadData.requirement}
                onChange={(e) => setLeadData({ ...leadData, requirement: e.target.value })}
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-[#D4AF37] resize-none"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep("topics")}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#14345A] hover:bg-[#C79A1B] disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
              {submitError && <p className="text-xs text-red-500 mt-2">{submitError}</p>}
            </form>
          </>
        )}

        {step === "done" && (
          <div className="text-center py-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="text-sm font-medium text-gray-800">Thank you, {leadData.name}!</p>
            <p className="mt-1 text-xs text-gray-500">Our expert will contact you shortly.</p>
            <button onClick={resetChat} className="mt-4 text-xs text-[#D4AF37] underline">Start New Conversation</button>
          </div>
        )}
      </div>
    </div>
  );
}
