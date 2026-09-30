import { useState, useEffect, useRef } from "react";

const stats = [
  { label: "On-Time Handover", value: "100", suffix: "%" },
  { label: "Sanctuaries Delivered", value: "150", suffix: "+" },
  { label: "Sq. Ft. Transformed", value: "250", suffix: "K+" },
  { label: "Cities Served", value: "15", suffix: "+" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={statsRef}
      className="relative w-full bg-[#EDE9E1] py-20 lg:py-24 border-t border-[#211F1B]/10 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A68A5B] rounded-full blur-[180px] opacity-[0.06] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center px-4 py-8 lg:py-0
                ${index !== 0 ? "border-l border-[#211F1B]/10" : ""}
                ${index < 2 ? "border-b lg:border-b-0 border-[#211F1B]/10" : ""}
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
            >
              <span className="w-6 h-[2px] bg-[#A68A5B] mb-5"></span>

              <h3
                className="text-4xl md:text-5xl lg:text-6xl text-[#211F1B] mb-3 tabular-nums"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {isVisible ? <Counter target={parseInt(stat.value)} /> : 0}
                <span className="text-[#A68A5B]">{stat.suffix}</span>
              </h3>

              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#211F1B]/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    let frameId;
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return count;
}