import { useEffect, useState } from "react";
import homepageVideo from "../assets/videos/homepageVideo.mp4";
import logo from "../assets/images/logo.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  },[]);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#E6DCC8] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative flex flex-col items-start w-full z-10">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="absolute select-none pointer-events-none w-[420px] sm:w-[520px] lg:w-[620px] -top-16 -left-16 z-0"
              style={{
                mixBlendMode: "multiply",
                opacity: mounted ? 0.07 : 0,
                transform: mounted
                  ? "scale(1) rotate(0deg)"
                  : "scale(1.06) rotate(-2deg)",
                transition:
                  "opacity 1.6s ease-out, transform 1.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            />

            <div className="relative z-10 flex flex-col items-start w-full">
              <div className="flex items-center gap-4 mb-8 animate-premium-fade">
                <span className="w-10 h-[2px] bg-[#A68A5B]"></span>
                <p className="uppercase tracking-[0.3em] text-xs font-semibold text-[#A68A5B]">
                  Akarsh Interiors
                </p>
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-[4.5rem] text-[#211F1B] leading-[1.05] mb-6"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Mastering <br />
                The Art of <br />
                <span className="italic text-[#4A463E] font-light">
                  Elegance.
                </span>
              </h1>

              <p className="text-base md:text-lg text-[#4A463E] leading-relaxed mb-10 font-light max-w-md">
                We design timeless interiors that blend sophisticated elegance
                with modern functionality, transforming your space into a
                breathtaking sanctuary.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <a
                  href="#contact"
                  onClick={scrollToSection("#contact")}
                  className="rounded-full bg-[#211F1B] border border-[#211F1B] text-[#EDE9E1] px-8 py-4 text-xs sm:text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#A68A5B] hover:border-[#A68A5B] hover:text-white shadow-lg hover:shadow-[#A68A5B]/40 cursor-pointer text-center"
                >
                  Book Free Consultation
                </a>

                <a
                  href="#process"
                  onClick={scrollToSection("#process")}
                  className="group flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.1em] text-[#211F1B] font-medium transition-colors hover:text-[#A68A5B]"
                >
                  <span className="border-b border-[#211F1B]/30 pb-1 group-hover:border-[#A68A5B] transition-colors">
                    Our Process
                  </span>

                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl bg-[#C9C2B2]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
              >
                <source src={homepageVideo} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[#4A463E]/5 mix-blend-overlay pointer-events-none"></div>

              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(33,31,27,0.15)] pointer-events-none rounded-[2rem]"></div>
            </div>

            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="absolute select-none pointer-events-none w-[220px] -bottom-14 -right-14 -z-10"
              style={{
                mixBlendMode: "multiply",
                opacity: mounted ? 0.1 : 0,
                transform: mounted
                  ? "rotate(8deg) scale(1)"
                  : "rotate(4deg) scale(0.94)",
                transition:
                  "opacity 1.8s ease-out 0.2s, transform 1.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            />

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#A68A5B]/15 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}