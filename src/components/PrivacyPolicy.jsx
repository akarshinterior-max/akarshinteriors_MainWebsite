import { useEffect, useRef, useState } from "react";

const COLORS = {
  porcelain: "#EDE9E1",
  ink: "#211F1B",
  inkSoft: "#4A463E",
  bronze: "#A68A5B",
};

const sections = [
  {
    id: "introduction",
    no: "01",
    title: "Introduction & Overview",
    content: (
      <p>
        At Akarsh Interiors Studio ("we," "our," or "us"), we treat your
        privacy with the same uncompromising standard of excellence and care
        that we bring to our luxury interior architecture. This Privacy
        Policy governs your interaction with our digital platforms and
        consultation channels across Telangana and Andhra Pradesh.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    no: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-5">
          To deliver bespoke architectural planning and accurate cost
          estimations under the Akarsh Guarantee, we may collect minimal and
          relevant personal data when you engage with our booking triggers,
          contact forms, or direct communication lines:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: `${COLORS.ink}B3` }}>
          <li>
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              Contact Credentials:
            </strong>{" "}
            Your full name, direct phone number, and email address.
          </li>
          <li>
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              Regional Parameters:
            </strong>{" "}
            City or project site locations (e.g., Hyderabad, Vizag,
            Vijayawada, Warangal).
          </li>
          <li>
            <strong className="font-medium" style={{ color: COLORS.ink }}>
              Design Preferences:
            </strong>{" "}
            Property scope, structural blueprints, and aesthetic
            requirements.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose-of-data",
    no: "03",
    title: "Purpose of Data Utilization",
    content: (
      <>
        <p className="mb-5">
          All information gathered is utilized strictly for professional
          service delivery. We do not monetize, trade, or distribute your
          personal details to third-party entities. Your data is used
          exclusively to:
        </p>
        <ul className="list-disc pl-5 space-y-2" style={{ color: `${COLORS.ink}B3` }}>
          <li>
            Coordinate architectural discovery sessions and on-site
            consultations via WhatsApp or direct phone calls.
          </li>
          <li>
            Draft tailored spatial layouts, 3D visual estimations, and
            transparent quotation breakdowns.
          </li>
          <li>
            Maintain high accountability standards aligned with our
            execution timelines.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security-confidentiality",
    no: "04",
    title: "Security & Confidentiality",
    content: (
      <p>
        We implement advanced administrative and technical safeguards to
        secure your private records against unauthorized access or
        disclosure. Client project blueprints and personal profiles remain
        completely confidential within our principal design desk.
      </p>
    ),
  },
  {
    id: "client-rights",
    no: "05",
    title: "Client Rights & Inquiries",
    content: (
      <p>
        You retain full authority to request access to, correction of, or
        complete deletion of your personal records from our databases at any
        time. For privacy inquiries or direct assistance, please contact our
        principal desk directly at{" "}
        <strong className="font-medium" style={{ color: COLORS.ink }}>
          +91 9666306868
        </strong>
        .
      </p>
    ),
  },
];

function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

function Section({ section }) {
  const [ref, inView] = useReveal();
  return (
    <section
      id={section.id}
      ref={ref}
      className="scroll-mt-32 py-10 border-b transition-all duration-700 ease-out"
      style={{
        borderColor: `${COLORS.ink}12`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
      }}
    >
      <div className="flex items-start gap-5 md:gap-8">
        <span
          className="hidden sm:block shrink-0 text-[13px] tracking-[0.1em] pt-2"
          style={{ fontFamily: "'Fraunces', serif", color: COLORS.bronze }}
        >
          {section.no}
        </span>
        <div className="min-w-0">
          <h3
            className="text-xl md:text-2xl font-normal mb-4"
            style={{ fontFamily: "'Fraunces', serif", color: COLORS.ink }}
          >
            {section.title}
          </h3>
          <div
            className="text-sm md:text-base font-light leading-relaxed"
            style={{ color: `${COLORS.ink}CC` }}
          >
            {section.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((io) => io && io.disconnect());
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="w-full min-h-screen pt-32 pb-28 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: COLORS.porcelain, color: COLORS.ink }}
    >
      <div className="max-w-[1200px] mx-auto">
  
        <div
          className="pb-10 mb-16 md:mb-20 border-b"
          style={{ borderColor: `${COLORS.ink}18` }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-[1px]" style={{ backgroundColor: COLORS.bronze }} />
            <p
              className="uppercase tracking-[0.2em] text-xs font-semibold"
              style={{ color: COLORS.bronze }}
            >
              Legal Documentation
            </p>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-5"
            style={{ fontFamily: "'Fraunces', serif", color: COLORS.ink }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-sm font-light tracking-wide"
            style={{ color: `${COLORS.ink}99` }}
          >
            Last updated: {new Date().getFullYear()} · Akarsh Interiors
            Studio, Telangana &amp; Andhra Pradesh
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-14 lg:gap-20">

          <nav className="hidden lg:block">
            <div className="sticky top-32">
              <p
                className="uppercase tracking-[0.16em] text-[11px] font-semibold mb-5"
                style={{ color: `${COLORS.ink}70` }}
              >
                On This Page
              </p>
              <ul className="space-y-1">
                {sections.map((s) => {
                  const active = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => scrollToSection(e, s.id)}
                        className="flex items-baseline gap-3 py-2 text-sm transition-colors duration-300"
                        style={{ color: active ? COLORS.ink : `${COLORS.ink}66` }}
                      >
                        <span
                          className="text-[11px] transition-colors duration-300"
                          style={{
                            fontFamily: "'Fraunces', serif",
                            color: active ? COLORS.bronze : `${COLORS.ink}40`,
                          }}
                        >
                          {s.no}
                        </span>
                        <span
                          className="relative"
                          style={{ fontWeight: active ? 500 : 300 }}
                        >
                          {s.title}
                          <span
                            className="absolute left-0 -bottom-1 h-[1px] transition-all duration-300"
                            style={{
                              width: active ? "100%" : "0%",
                              backgroundColor: COLORS.bronze,
                            }}
                          />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          <div>
            {sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}

            <div
              className="mt-14 rounded-xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              style={{ backgroundColor: COLORS.ink }}
            >
              <div>
                <p
                  className="uppercase tracking-[0.16em] text-[11px] mb-2"
                  style={{ color: "#D8C6A2" }}
                >
                  Have a question about this policy?
                </p>
                <p
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    color: COLORS.porcelain,
                    fontSize: "20px",
                  }}
                >
                  Speak directly with our principal desk.
                </p>
              </div>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[13px] tracking-wide shrink-0 transition-colors duration-300"
                style={{ backgroundColor: COLORS.bronze, color: COLORS.ink }}
              >
                +91 9666306868
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}