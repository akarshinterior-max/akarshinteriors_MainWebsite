import { useEffect, useRef, useState } from "react";
import DesignNotesBook from "./DesignNotesBook";

function splitWords(text, className) {
  return text.split(" ").map((word, i) => ({
    word,
    className,
    key: `${className}-${i}-${word}`,
  }));
}

export default function EditorialPhilosophy() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const headlineWords = [
    ...splitWords("A great home isn’t about showing off luxury.", "text-[#211F1B]"),
    ...splitWords(
      "It is about finding your peace the moment you walk through the door.",
      "italic font-light text-[#A68A5B]"
    ),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#EDE9E1] py-24 lg:py-32 text-[#211F1B] border-t border-[#211F1B]/10 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-2 md:right-8 leading-none"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 300,
          fontSize: "clamp(140px, 22vw, 340px)",
          color: "#211F1B",
          opacity: 0.035,
        }}
      >
        01
      </span>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="h-[1px] bg-[#A68A5B] transition-all duration-700 ease-out"
            style={{ width: inView ? "40px" : "0px" }}
          />
          <p
            className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B] transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              transitionDelay: "120ms",
            }}
          >
            Our Core Belief
            <span className="text-[#211F1B]/30 ml-2 tracking-normal normal-case font-normal">
              — Note 01
            </span>
          </p>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] mb-10 flex flex-wrap"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {headlineWords.map(({ word, className, key }, i) => (
            <span key={key} className="overflow-hidden inline-block mr-[0.28em] mb-1">
              <span
                className={`inline-block transition-transform duration-[850ms] ${className}`}
                style={{
                  transform: inView ? "translateY(0)" : "translateY(110%)",
                  transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                  transitionDelay: `${220 + i * 22}ms`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-[#211F1B]/10">
          <div>
            <p
              className="text-base md:text-lg font-light leading-relaxed text-[#211F1B]/80 mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "760ms",
              }}
            >
              We know how stressful building or renovating a home can be. Between
              coordinating workers, managing budgets, and worrying about delays, it
              can feel overwhelming. That is why we take complete ownership of the
              process through our <strong className="font-medium text-[#211F1B]">end-to-end turnkey project execution</strong> from day one.
            </p>
            <p
              className="text-sm font-light text-[#211F1B]/60 leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "860ms",
              }}
            >
              From smart storage solutions for growing families to 100%
              Vastu-aligned layouts, every corner we design is built around how you
              actually live your daily life.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <p
              className="text-base md:text-lg font-light leading-relaxed text-[#211F1B]/80 mb-8 transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "820ms",
              }}
            >
              No hidden costs, no endless delays, and no chasing contractors. We
              handle everything under a single roof right up to the <strong className="font-medium text-[#211F1B]">final key handover</strong>, so you can simply enjoy walking into your dream ready-to-live space.
            </p>

            <div
              className="flex items-center gap-4 transition-opacity duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transitionDelay: "980ms",
              }}
            >
              <span
                className="h-[1px] bg-[#211F1B]/30 transition-all duration-700 ease-out"
                style={{
                  width: inView ? "48px" : "0px",
                  transitionDelay: "980ms",
                }}
              />
              <span className="uppercase tracking-[0.15em] text-xs font-medium text-[#211F1B]">
                Akarsh Interiors Studio
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex justify-center transition-opacity duration-700 ease-out"
          style={{ opacity: inView ? 1 : 0, transitionDelay: "1080ms" }}
        >
          <DesignNotesBook />
        </div>
      </div>
    </section>
  );
}