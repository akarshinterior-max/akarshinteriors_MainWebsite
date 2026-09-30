import { useState, useEffect, useRef } from "react";

import p1Img from '../assets/images/projects/p1.png';
import p2Img from '../assets/images/projects/p2.png';
import p3Img from '../assets/images/projects/p3.png';
import p4Img from '../assets/images/projects/p4.png';
import p5Img from '../assets/images/projects/p5.png';
import p6Img from '../assets/images/projects/p6.png';
import p7Img from '../assets/images/projects/p7.png';
import p8Img from '../assets/images/projects/p8.png';
import p9Img from '../assets/images/projects/p9.png';
import p10Img from '../assets/images/projects/p10.png';

const projects = [
  {
    id: 1,
    title: "Bespoke Multi-Generational Living",
    location: "Hyderabad",
    pitch: "We engineer spacious, safe, and elegant homes that accommodate your entire family without compromising on premium modern aesthetics.",
    image: p1Img, 
  },
  // {
  //   id: 2,
  //   title: "Coastal Luxury Penthouses",
  //   location: "Vizag",
  //   pitch: "Maximize your property's value and views with our floor-to-ceiling architectural styling and climate-resistant premium materials.",
  //   image: p2Img,
  // },
  {
    id: 3,
    title: "Climate-Optimized Courtyards",
    location: "Vijayawada",
    pitch: "We design intelligent, naturally ventilated spaces that keep your home luxuriously cool and energy-efficient year-round.",
    image: p3Img,
  },
  {
    id: 4,
    title: "Modern Heritage Integration",
    location: "Warangal",
    pitch: "Elevate your space by blending rich Kakatiya design elements with ultra-modern, clean layouts that command attention.",
    image: p4Img,
  },
  {
    id: 5,
    title: "Vastu-Compliant Sanctuaries",
    location: "Tirupati",
    pitch: "100% Vastu-aligned architecture that brings positive energy and absolute peace of mind, wrapped in sophisticated luxury.",
    image: p5Img,
  },
  {
    id: 6,
    title: "Expansive Estate Architecture",
    location: "Bengaluru",
    pitch: "Transform your land into a breathtaking retreat with raw, premium materials that blend seamlessly into the natural landscape.",
    image: p6Img,
  },
  {
    id: 7,
    title: "Ultra-Durable Family Spaces",
    location: "Guntur",
    pitch: "Invest in high-performance, stain-resistant luxury interiors built to withstand daily life while looking flawlessly pristine.",
    image: p7Img,
  },
  {
    id: 8,
    title: "Space-Maximizing Bungalows",
    location: "Karimnagar",
    pitch: "We use bold geometry and smart layouts to make standard plots feel like sprawling, high-end estates.",
    image: p8Img,
  },
  {
    id: 9,
    title: "Biophilic Wellness Villas",
    location: "Kurnool",
    pitch: "Breathe easier with our integrated indoor landscapes, designed to purify your air and create a calming, resort-like daily experience.",
    image: p9Img,
  },
  {
    id: 10,
    title: "Premium Riverfront Living",
    location: "Rajahmundry",
    pitch: "Capitalize on open-plan layouts and bespoke woodwork that invite natural breezes and natural light into every room.",
    image: p10Img,
  }
];

export default function ProjectStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 7000); 

    return () => resetTimeout();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="w-full bg-[#EDE9E1] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#A68A5B]"></span>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B]">
                Proven Results
              </p>
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#211F1B] leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Masterpieces <br className="hidden md:block" />
              <span className="italic font-light text-[#4A463E]">Delivered.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 z-10">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#211F1B]/20 flex items-center justify-center transition-all duration-300 hover:border-[#A68A5B] hover:bg-[#A68A5B]/10 group cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#211F1B] group-hover:text-[#A68A5B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#211F1B]/20 flex items-center justify-center transition-all duration-300 hover:border-[#A68A5B] hover:bg-[#A68A5B]/10 group cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#211F1B] group-hover:text-[#A68A5B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl bg-[#211F1B]">
          
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              >

                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] ease-out ${
                      isActive ? "scale-100" : "scale-110"
                    }`} 
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/95 via-[#1A1815]/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-[1200px] mx-auto">
                    
                    <div className="text-[#EDE9E1] max-w-2xl">

                      <div 
                        className={`flex items-center gap-2 mb-4 transition-all duration-700 ease-out ${
                          isActive ? "translate-y-0 opacity-100 delay-[300ms]" : "translate-y-8 opacity-0"
                        }`}
                      >
                        <span className="flex items-center gap-1 text-[10px] sm:text-xs tracking-[0.1em] font-medium text-[#ffffff] uppercase bg-[#A68A5B]/10 px-3 py-1.5 rounded-full border border-[#A68A5B]/20 backdrop-blur-md">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}    
                        </span>
                      </div>

                      <h3 
                        className={`text-3xl md:text-5xl lg:text-6xl font-normal leading-tight drop-shadow-lg mb-4 transition-all duration-700 ease-out ${
                          isActive ? "translate-y-0 opacity-100 delay-[450ms]" : "translate-y-8 opacity-0"
                        }`}
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {project.title}
                      </h3>
                      <p 
                        className={`text-sm md:text-base text-[#EDE9E1]/80 font-light leading-relaxed max-w-lg transition-all duration-700 ease-out ${
                          isActive ? "translate-y-0 opacity-100 delay-[600ms]" : "translate-y-8 opacity-0"
                        }`}
                      >
                        {project.pitch}
                      </p>
                    </div>

                    <div 
                      className={`shrink-0 transition-all duration-700 ease-out ${
                        isActive ? "translate-y-0 opacity-100 delay-[750ms]" : "translate-y-8 opacity-0"
                      }`}
                    >
                      <a 
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-[#A68A5B] text-[#ffffff] px-8 py-4 text-xs sm:text-sm tracking-[0.1em] uppercase font-semibold transition-all duration-300 hover:bg-[#EDE9E1] hover:text-[#211F1B] shadow-xl"
                      >
                        Book Consultation
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-10 max-w-[1200px] mx-auto w-full">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative h-1.5 rounded-full overflow-hidden w-8 sm:w-12 bg-[#211F1B]/15 cursor-pointer transition-all hover:bg-[#211F1B]/30"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div 
                className={`absolute top-0 left-0 h-full bg-[#A68A5B] ease-linear`}
                style={{ 
                  width: index === currentIndex ? "100%" : "0%",
                  transitionProperty: "width",
                  transitionDuration: index === currentIndex ? '7000ms' : '0ms' 
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}