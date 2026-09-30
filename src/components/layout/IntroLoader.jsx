import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png"; // same asset Navbar.jsx imports

const STORAGE_KEY = "akarsh-intro-played";

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState("idle"); // idle -> reveal -> hold -> exit -> done
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setSkip(true);
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => setPhase("reveal"));
    const t1 = setTimeout(() => setPhase("hold"), 1300);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      sessionStorage.setItem(STORAGE_KEY, "true");
      onComplete?.();
    }, 3200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (skip || phase === "done") return null;

  const revealed = phase === "reveal" || phase === "hold" || phase === "exit";
  const settled = phase === "hold" || phase === "exit";
  const exiting = phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #EDE9E1 55%, #E2DCCD 100%)",
        opacity: exiting ? 0 : 1,
        transition: "opacity 1s cubic-bezier(0.65,0,0.35,1)",
        transitionDelay: exiting ? "0.15s" : "0s",
      }}
    >

      <div
        className="absolute rounded-full"
        style={{
          width: 12,
          height: 12,
          border: "1px solid #A68A5B",
          transform: `scale(${revealed ? 22 : 1})`,
          opacity: revealed ? 0 : 0.7,
          transition:
            "transform 1.3s cubic-bezier(0.16,1,0.3,1) 0.15s, opacity 1.3s ease 0.15s",
        }}
      />

      <div
        className="relative flex flex-col items-center"
        style={{
          transform: exiting
            ? "translate(calc(-50vw + 96px), calc(-50vh + 44px)) scale(0.2)"
            : revealed
            ? "translate(0, 0) scale(1)"
            : "translate(0, 10px) scale(0.82)",
          opacity: exiting ? 0 : revealed ? 1 : 0,
          transition: exiting
            ? "transform 1.05s cubic-bezier(0.65,0,0.35,1), opacity 1s ease 0.35s"
            : "transform 1.1s cubic-bezier(0.34,1.56,0.64,1) 0.25s, opacity 0.9s ease 0.25s",
          transformOrigin: "top left",
        }}
      >
        <div
          className="relative w-[150px] sm:w-[190px] md:w-[220px] overflow-hidden rounded-2xl"
          style={{
            filter: revealed
              ? "drop-shadow(0 22px 45px rgba(33,31,27,0.25))"
              : "drop-shadow(0 0 0 rgba(0,0,0,0))",
            transition: "filter 1s ease 0.25s",
          }}
        >
          <img src={logo} alt="Akarsh Interiors" className="w-full h-auto block" />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.55) 50%, transparent 58%)",
              transform: settled ? "translateX(160%)" : "translateX(-160%)",
              transition: "transform 1.1s ease 0.15s",
            }}
          />
        </div>

        <p
          className="mt-6 uppercase whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "#A68A5B",
            opacity: settled ? 1 : 0,
            transform: settled ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          Luxury Interior Design
        </p>
      </div>
    </div>
  );
}