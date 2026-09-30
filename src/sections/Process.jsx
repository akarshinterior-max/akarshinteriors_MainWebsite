import { useState, useEffect } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "Understanding your lifestyle, functional needs, and aesthetic desires. Where your vision meets our architectural expertise.",
  },
  {
    id: "02",
    title: "Visualization",
    description: "Experience your future space with photorealistic 3D renders and exact material boards for your absolute approval.",
  },
  {
    id: "03",
    title: "Execution",
    description: "Master craftsmen and engineers take over, ensuring flawless on-site execution and strict timeline management.",
  },
  {
    id: "04",
    title: "Handover",
    description: "A breathtaking reveal. We hand over a meticulously styled, deep-cleaned, and move-in-ready sanctuary.",
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="process" className="relative w-full bg-[#1A1815] py-20 lg:py-24 overflow-hidden text-[#EDE9E1]">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A68A5B] rounded-full blur-[200px] opacity-[0.07] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-14 lg:mb-16 border-b border-[#EDE9E1]/10 pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#A68A5B]"></span>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B]">
                How We Work
              </p>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The Art of{" "}
              <span className="italic font-light text-[#A68A5B]">Perfection.</span>
            </h2>
            <p className="text-[#EDE9E1]/60 font-light leading-relaxed max-w-md text-sm md:text-base">
              A seamless, transparent journey from your first thought to your final, fully-realized sanctuary. No delays, no compromises.
            </p>
          </div>
          <div className="flex items-center group cursor-pointer">
            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                  <text className="text-[10px] uppercase tracking-[0.2em] fill-[#A68A5B] font-semibold">
                    <textPath href="#circlePath" startOffset="0%">
                      • The Akarsh Guarantee • Elite+  
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-[#A68A5B] to-[#7a6440] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(166,138,91,0.3)] transition-transform duration-500 group-hover:scale-110">
                  <svg className="w-5 h-5 text-[#1A1815]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ml-5 hidden sm:block">
              <h4 className="text-lg font-medium tracking-wide text-[#A68A5B]" style={{ fontFamily: "'Fraunces', serif" }}>
                100% Transparency
              </h4>
              <p className="text-[10px] uppercase tracking-widest text-[#EDE9E1]/50 mt-1">
                Zero Hidden Costs
              </p>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-10">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative pt-6 cursor-pointer group transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-40 hover:opacity-70 translate-y-1"
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#EDE9E1]/10"></div>

                <div
                  className="absolute top-0 left-0 h-[2px] bg-[#A68A5B] ease-linear"
                  style={{
                    width: isActive ? "100%" : "0%",
                    transitionProperty: "width",
                    transitionDuration: isActive ? "6000ms" : "0ms"
                  }}
                ></div>
                <div
                  className={`absolute -top-[3px] left-0 w-2 h-2 rounded-full -translate-x-1/2 transition-colors duration-700 ${
                    isActive ? "bg-[#A68A5B]" : "bg-[#EDE9E1]/20"
                  }`}
                ></div>

                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className={`block text-4xl md:text-5xl font-light transition-colors duration-700 ${
                      isActive ? "text-[#A68A5B]" : "text-[#EDE9E1]/30"
                    }`}
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {step.id}
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-normal text-[#EDE9E1]"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-[#EDE9E1]/60 font-light leading-relaxed max-w-[26ch]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}