// import { useEffect, useState } from "react";
// import logo from "../../assets/images/logo.png"; // same asset Navbar.jsx imports

// const STORAGE_KEY = "akarsh-intro-played";

// export default function IntroLoader({ onComplete }) {
//   const [phase, setPhase] = useState("idle"); // idle -> reveal -> hold -> exit -> done
//   const [skip, setSkip] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     if (sessionStorage.getItem(STORAGE_KEY) === "true") {
//       setSkip(true);
//       onComplete?.();
//       return;
//     }

//     document.body.style.overflow = "hidden";

//     const raf = requestAnimationFrame(() => setPhase("reveal"));
//     const t1 = setTimeout(() => setPhase("hold"), 1300);
//     const t2 = setTimeout(() => setPhase("exit"), 2200);
//     const t3 = setTimeout(() => {
//       setPhase("done");
//       document.body.style.overflow = "";
//       sessionStorage.setItem(STORAGE_KEY, "true");
//       onComplete?.();
//     }, 3200);

//     return () => {
//       cancelAnimationFrame(raf);
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//       document.body.style.overflow = "";
//     };
//   }, [onComplete]);

//   if (skip || phase === "done") return null;

//   const revealed = phase === "reveal" || phase === "hold" || phase === "exit";
//   const settled = phase === "hold" || phase === "exit";
//   const exiting = phase === "exit";

//   return (
//     <div
//       className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
//       style={{
//         background:
//           "radial-gradient(ellipse at center, #EDE9E1 55%, #E2DCCD 100%)",
//         opacity: exiting ? 0 : 1,
//         transition: "opacity 1s cubic-bezier(0.65,0,0.35,1)",
//         transitionDelay: exiting ? "0.15s" : "0s",
//       }}
//     >

//       <div
//         className="absolute rounded-full"
//         style={{
//           width: 12,
//           height: 12,
//           border: "1px solid #A68A5B",
//           transform: `scale(${revealed ? 22 : 1})`,
//           opacity: revealed ? 0 : 0.7,
//           transition:
//             "transform 1.3s cubic-bezier(0.16,1,0.3,1) 0.15s, opacity 1.3s ease 0.15s",
//         }}
//       />

//       <div
//         className="relative flex flex-col items-center"
//         style={{
//           transform: exiting
//             ? "translate(calc(-50vw + 96px), calc(-50vh + 44px)) scale(0.2)"
//             : revealed
//             ? "translate(0, 0) scale(1)"
//             : "translate(0, 10px) scale(0.82)",
//           opacity: exiting ? 0 : revealed ? 1 : 0,
//           transition: exiting
//             ? "transform 1.05s cubic-bezier(0.65,0,0.35,1), opacity 1s ease 0.35s"
//             : "transform 1.1s cubic-bezier(0.34,1.56,0.64,1) 0.25s, opacity 0.9s ease 0.25s",
//           transformOrigin: "top left",
//         }}
//       >
//         <div
//           className="relative w-[150px] sm:w-[190px] md:w-[220px] overflow-hidden rounded-2xl"
//           style={{
//             filter: revealed
//               ? "drop-shadow(0 22px 45px rgba(33,31,27,0.25))"
//               : "drop-shadow(0 0 0 rgba(0,0,0,0))",
//             transition: "filter 1s ease 0.25s",
//           }}
//         >
//           <img src={logo} alt="Akarsh Interiors" className="w-full h-auto block" />

//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.55) 50%, transparent 58%)",
//               transform: settled ? "translateX(160%)" : "translateX(-160%)",
//               transition: "transform 1.1s ease 0.15s",
//             }}
//           />
//         </div>

//         <p
//           className="mt-6 uppercase whitespace-nowrap"
//           style={{
//             fontFamily: "'Inter', sans-serif",
//             fontSize: "10px",
//             letterSpacing: "0.35em",
//             color: "#A68A5B",
//             opacity: settled ? 1 : 0,
//             transform: settled ? "translateY(0)" : "translateY(6px)",
//             transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
//           }}
//         >
//           Luxury Interior Design
//         </p>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const STORAGE_KEY = "akarsh-intro-played";
const TITLE = "AKARSH INTERIORS";
const EASE = "cubic-bezier(0.22,1,0.36,1)";

export default function IntroLoader({ onComplete }) {

  const [phase, setPhase] = useState("idle");
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setSkip(true);
      onComplete?.();
      return;
    }

    document.body.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => setPhase("logo"));
    const t1 = setTimeout(() => setPhase("text"), 1300);
    const t2 = setTimeout(() => setPhase("exit"), 3800);
    const t3 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      sessionStorage.setItem(STORAGE_KEY, "true");
      onComplete?.();
    }, 4900);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (skip || phase === "done") return null;

  const logoIn = phase === "logo" || phase === "text" || phase === "exit";
  const textIn = phase === "text";
  const exiting = phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #EDE9E1 55%, #E2DCCD 100%)",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.9s cubic-bezier(0.65,0,0.35,1)",
        transitionDelay: exiting ? "0.45s" : "0s",
      }}
    >

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(166,138,91,0.28) 0%, transparent 70%)",
          opacity: logoIn && !exiting ? 1 : 0,
          transform: `scale(${logoIn ? 1 : 0.5})`,
          transition: "opacity 1.4s ease, transform 1.8s " + EASE,
        }}
      />

      <div className="relative flex flex-col items-center">

        <div
          className="relative w-[130px] sm:w-[160px] md:w-[190px] overflow-hidden rounded-2xl"
          style={{
            opacity: exiting ? 0 : logoIn ? 1 : 0,
            transform: exiting
              ? "scale(1.12)"
              : logoIn
              ? "scale(1)"
              : "scale(0.7)",
            filter: logoIn
              ? "drop-shadow(0 22px 45px rgba(33,31,27,0.25))"
              : "drop-shadow(0 0 0 rgba(0,0,0,0))",
            transition: exiting
              ? "opacity 0.8s ease, transform 1s ease"
              : `opacity 1s ease, transform 1.3s ${EASE}, filter 1s ease`,
          }}
        >
          <img src={logo} alt="Akarsh Interiors" className="w-full h-auto block" />

          {/* light sweep */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.6) 50%, transparent 58%)",
              transform: logoIn ? "translateX(160%)" : "translateX(-160%)",
              transition: "transform 1.2s ease 0.7s",
            }}
          />
        </div>

        <div
          className="mt-8"
          style={{
            height: 1,
            width: textIn ? 120 : 0,
            background:
              "linear-gradient(90deg, transparent, #A68A5B, transparent)",
            opacity: exiting ? 0 : 1,
            transition: exiting
              ? "opacity 0.5s ease"
              : "width 1s cubic-bezier(0.65,0,0.35,1)",
          }}
        />

        <h1
          className="mt-6 flex whitespace-nowrap"
          aria-label={TITLE}
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontWeight: 500,
            color: "#211F1B",
            fontSize: "clamp(18px, 3.2vw, 30px)",
          }}
        >
          {TITLE.split("").map((ch, i) => {
            const isSpace = ch === " ";
            const delay = exiting ? i * 0.035 : i * 0.07;
            return (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: isSpace ? "0.6em" : "auto",
                  marginRight: "0.28em",
                  opacity: textIn ? 1 : 0,
                  transform: exiting
                    ? "translateX(36px)"
                    : textIn
                    ? "translateX(0)"
                    : "translateX(-28px)",
                  filter: textIn ? "blur(0px)" : "blur(8px)",
                  transition: exiting
                    ? `opacity 0.6s ease ${delay}s, transform 0.8s ${EASE} ${delay}s, filter 0.6s ease ${delay}s`
                    : `opacity 0.8s ease ${delay}s, transform 1s ${EASE} ${delay}s, filter 0.8s ease ${delay}s`,
                }}
              >
                {ch}
              </span>
            );
          })}
        </h1>

        <p
          className="mt-3 whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.8vw, 17px)",
            letterSpacing: "0.12em",
            color: "#7A6845",
            opacity: textIn ? 1 : 0,
            transform: textIn ? "translateY(0)" : "translateY(8px)",
            transition: exiting
              ? "opacity 0.4s ease"
              : `opacity 0.9s ease 1.3s, transform 0.9s ${EASE} 1.3s`,
          }}
        >
          by Prasad Reddy
        </p>

        <p
          className="mt-4 uppercase whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "#A68A5B",
            opacity: textIn ? 1 : 0,
            transform: textIn ? "translateY(0)" : "translateY(8px)",
            transition: exiting
              ? "opacity 0.4s ease"
              : "opacity 0.8s ease 1.8s, transform 0.8s ease 1.8s",
          }}
        >
          Luxury Interior Design
        </p>
      </div>
    </div>
  );
}