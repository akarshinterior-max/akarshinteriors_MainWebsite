import { useState } from 'react';

const faqs = [
  {
    question: "What is the typical timeline for an architectural interior transformation?",
    answer: "Every sanctuary we craft is bespoke. Typically, projects range from 12 to 24 weeks depending on the scale, custom millwork requirements, and architectural complexity across our Hyderabad and Vizag studios."
  },
  {
    question: "Do your interior layouts strictly adhere to Vastu principles?",
    answer: "Yes. Every spatial plan is meticulously designed in absolute harmony with traditional Vastu Shastra while maintaining uncompromising modern luxury, clean sightlines, and European-grade ergonomics."
  },
  {
    question: "How does Akarsh Interiors manage procurement and execution?",
    answer: "We offer an end-to-end turnkey experience. From initial 3D visualization and material sourcing from global quarries to on-site execution, our principal architects personally oversee every single detail."
  },
  {
    question: "What regions do you actively service for turnkey design projects?",
    answer: "Our primary design hubs are located in Jubilee Hills (Hyderabad), MVP Colony (Visakhapatnam), and MG Road (Vijayawada). We routinely manage luxury residential and commercial projects across Telangana and Andhra Pradesh."
  },
  {
    question: "How do we begin the design and consultation process?",
    answer: "You can schedule an initial consultation directly through our website. Our principal design desk will contact you to arrange a private viewing or an in-depth architectural discussion."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#1A1815] text-[#EDE9E1] py-32 relative overflow-hidden border-t border-[#EDE9E1]/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A68A5B] rounded-full blur-[180px] opacity-[0.06] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#A68A5B]">
              Inquiries & Clarity
            </p>
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Frequently Asked <span className="italic font-light text-[#A68A5B]">Questions</span>
          </h2>
          <p className="text-sm font-light text-[#EDE9E1]/60 mt-4 leading-relaxed">
            Everything you need to know about our architectural philosophy, timeline execution, and client collaboration standards.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen 
                    ? 'bg-[#221F1C] border-[#A68A5B]/40 shadow-2xl' 
                    : 'bg-[#1E1B18]/60 border-[#EDE9E1]/10 hover:border-[#EDE9E1]/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-8 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span 
                    className="text-lg md:text-xl font-normal tracking-wide pr-8 text-[#EDE9E1]"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen ? 'border-[#A68A5B] bg-[#A68A5B]/10 rotate-180 text-[#A68A5B]' : 'border-[#EDE9E1]/20 text-[#EDE9E1]/60'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>

                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 px-8' : 'grid-rows-[0fr] opacity-0 pb-0 px-8'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm font-light text-[#EDE9E1]/70 leading-relaxed border-t border-[#EDE9E1]/10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}