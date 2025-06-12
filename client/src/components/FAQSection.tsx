import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this service safe?",
      answer: "Absolutely! All interactions are professional and respectful. For in-person meetups, we meet in public places. I maintain clear boundaries and prioritize everyone's comfort and safety."
    },
    {
      question: "What if I need to reschedule?",
      answer: "No worries! Life happens. Just give me at least 4 hours notice for rescheduling. I'm flexible and understanding - we'll find a time that works for both of us."
    },
    {
      question: "How does payment work?",
      answer: "Payment is simple and secure. I accept UPI, Razorpay, or bank transfer. For longer sessions, 50% advance booking fee is appreciated, with the rest payable after our hangout."
    },
    {
      question: "Where can we meet for in-person hangouts?",
      answer: "I'm based in Noida and can meet anywhere in Delhi NCR. Popular spots include cafes, malls, parks, or any public place you're comfortable with. I'm also happy to accompany you to events or activities."
    },
    {
      question: "What if I'm nervous or don't know what to talk about?",
      answer: "Don't worry at all! I'm great at breaking the ice and keeping conversations flowing naturally. We can talk about anything - your interests, current events, goals, or I can share interesting stories. The conversation will feel effortless!"
    },
    {
      question: "Can I gift this service to someone?",
      answer: "What a thoughtful idea! Yes, you can absolutely gift a hangout session to a friend or family member. Just let me know when booking, and we'll coordinate with the recipient to schedule their perfect experience."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Got questions? I've got answers!</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transform transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
