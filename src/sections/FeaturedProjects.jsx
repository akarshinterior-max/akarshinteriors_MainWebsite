import { useState, useEffect, useRef } from "react";

import sp1Img from '../assets/images/projects/sp1.png';
import sp2Img from '../assets/images/projects/sp2.png';
import sp3Img from '../assets/images/projects/sp3.png';
import sp4Img from '../assets/images/projects/sp4.png';
import sp5Img from '../assets/images/projects/sp5.png';

const capabilities = [
  {
    id: 1,
    title: "Luxury Living Spaces",
    tag: "Bespoke Design",
    category: "Residential",
    image: sp1Img, 
  },
  {
    id: 2,
    title: "Premium Office Suites",
    tag: "Corporate Identity",
    category: "Commercial",
    image: sp2Img,
  },
  {
    id: 3,
    title: "Boutique Hospitality",
    tag: "Guest Experience",
    category: "Hospitality",
    image: sp3Img,
  },
  {
    id: 4,
    title: "Turnkey Villa Execution",
    tag: "End-to-End Build",
    category: "Architecture",
    image: sp4Img,
  },
  {
    id: 5,
    title: "Minimalist Studios",
    tag: "Space Optimization",
    category: "Interior Styling",
    image: sp5Img,
  }
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === capabilities.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => {
      resetTimeout();
    };
  }, [currentIndex]); 

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === capabilities.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));
  };

  return (
    <section id="spaces" className="w-full bg-[#EDE9E1] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#A68A5B]"></span>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B]">
                Our Expertise
              </p>
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#211F1B] leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Spaces We <br className="hidden md:block" />
              <span className="italic font-light text-[#4A463E]">Transform.</span>
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

        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl group">
          
          {capabilities.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="w-full h-full overflow-hidden bg-[#211F1B]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-[10s] ease-out group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/20 to-transparent"></div>
              
              <div className={`absolute bottom-0 left-0 w-full p-6 md:p-10 transition-all duration-700 delay-200 ${
                index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[1200px] mx-auto">
                  
                  <div className="text-[#EDE9E1]">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="uppercase tracking-[0.15em] text-[10px] sm:text-xs font-medium text-[#A68A5B] bg-[#211F1B]/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] sm:text-xs tracking-[0.1em] font-light opacity-90">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        {item.tag}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-3xl md:text-5xl font-normal leading-tight drop-shadow-lg"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Non-clickable aesthetic badge */}
                  <div className="inline-flex items-center justify-center rounded-full border border-[#EDE9E1]/30 bg-[#211F1B]/40 backdrop-blur-md text-[#EDE9E1] px-7 py-3 text-xs sm:text-sm tracking-[0.15em] uppercase font-light shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A68A5B] mr-2"></span>
                    Akarsh Standard
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-8 max-w-[1200px] mx-auto w-full">
          {capabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[3px] transition-all duration-500 ease-out rounded-full cursor-pointer ${
                index === currentIndex 
                  ? "w-10 sm:w-16 bg-[#A68A5B]" 
                  : "w-4 sm:w-6 bg-[#211F1B]/15 hover:bg-[#211F1B]/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}