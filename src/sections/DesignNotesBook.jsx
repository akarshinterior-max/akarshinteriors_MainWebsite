import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import note1Img from "../../src/assets/images/imagee1.png";
import note2Img from "../../src/assets/images/image2.png";
import note3Img from "../../src/assets/images/image3.png";
import note4Img from "../../src/assets/images/image4.png";
import note5Img from "../../src/assets/images/image5.png";

const COLORS = {
  porcelain: "#EDE9E1",
  ink: "#211F1B",
  inkSoft: "#4A463E",
  bronze: "#A68A5B",
};

const notes = [
  {
    no: "01",
    title: "The 60-30-10 Color Rule",
    body: "Every timeless room follows a hidden ratio — 60% dominant tone, 30% supporting shade, 10% accent. At Akarsh Interiors, we build every palette around this rule before a single piece of furniture is chosen.",
    image: note1Img,
  },
  {
    no: "02",
    title: "Vastu Isn't Old-Fashioned. It's Data.",
    body: "Long before 'ergonomics' was a word, Vastu Shastra was mapping how light, direction, and airflow affect wellbeing. We treat it as a design input, not a superstition — quietly woven into every layout we draft.",
    image: note2Img,
  },
  {
    no: "03",
    title: "Natural Light Changes Everything",
    body: "The same wall paint can look beige at 9am and gold by 5pm. Before we finalize a single finish, we study how light moves through your home across the day — color only exists in relation to light.",
    image: note3Img,
  },
  {
    no: "04",
    title: "One Statement Piece Beats Ten Small Ones",
    body: "A room filled with twenty small decisions feels busy. A room built around one considered piece — a chair, a light, a headboard — feels designed. We spend the budget where the eye actually lands.",
    image: note4Img,
  },
  {
    no: "05",
    title: "Storage Is a Design Decision, Not an Afterthought",
    body: "The homes that stay beautiful a year later are the ones where every object already has a place. We design storage into the architecture from day one — never bolted on as furniture later.",
    image: note5Img,
  },
];

const FLIP_MS = 900;

function PageContent({ note, total }) {
  return (
    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
      <div
        className="relative h-36 md:h-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: COLORS.ink }}
      >
        <div
          className="relative overflow-hidden rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{ width: "75%", height: "75%" }}
        >
          <img
            src={note.image}
            alt={note.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(20,18,16,0.4), transparent 55%)",
            }}
          />
        </div>

        <span
          className="absolute left-5 bottom-4 text-[10.5px] tracking-[0.14em] uppercase"
          style={{ color: COLORS.porcelain }}
        >
          Note {note.no} / {total}
        </span>
      </div>

      <div
        className="flex flex-col justify-center px-7 md:px-12 py-8 md:py-10"
        style={{ backgroundColor: COLORS.porcelain }}
      >
        <span
          className="uppercase tracking-[0.2em] text-[11px]"
          style={{ color: COLORS.bronze }}
        >
          Design Note {note.no}
        </span>
        <h3
          className="mt-4 text-xl md:text-[26px] leading-snug"
          style={{ fontFamily: "'Fraunces', serif", color: COLORS.ink }}
        >
          {note.title}
        </h3>
        <p
          className="mt-5 text-[14.5px] leading-relaxed"
          style={{ color: COLORS.inkSoft }}
        >
          {note.body}
        </p>
      </div>
    </div>
  );
}

function FlipPair({ flip, total, onDone }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const leaveTarget = flip.dir > 0 ? -180 : 180;
  const enterBaseline = flip.dir > 0 ? 180 : -180;

  const faceStyle = (deg) => ({
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: `rotateY(${deg}deg)`,
    transition: `transform ${FLIP_MS}ms cubic-bezier(.65,0,.35,1)`,
    willChange: "transform",
  });

  return (
    <>
      <div
        style={faceStyle(animate ? leaveTarget : 0)}
        onTransitionEnd={(e) => e.propertyName === "transform" && onDone()}
      >
        <PageContent note={notes[flip.from]} total={total} />
      </div>
      <div style={faceStyle(animate ? 0 : enterBaseline)}>
        <PageContent note={notes[flip.to]} total={total} />
      </div>
      <div
        className="absolute inset-y-0 left-1/2 w-24 -ml-12 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.28), transparent)",
          opacity: animate ? 0 : 0,
          animation: `foldShadow ${FLIP_MS}ms ease forwards`,
        }}
      />
    </>
  );
}

export default function DesignNotesBook() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flip, setFlip] = useState(null); // { id, from, to, dir } | null
  const flipIdRef = useRef(0);
  const total = notes.length;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (dir) => {
    if (flip) return;
    const to = currentIndex + dir;
    if (to < 0 || to >= total) return;
    flipIdRef.current += 1;
    setFlip({ id: flipIdRef.current, from: currentIndex, to, dir });
  };

  const handleFlipDone = () => {
    setCurrentIndex(flip.to);
    setFlip(null);
  };

  const displayedNumber = (flip ? flip.to : currentIndex) + 1;

  const modal = open ? (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: "rgba(20,18,16,0.6)" }}
      onClick={() => setOpen(false)}
    >
      <style>{`
        @keyframes foldShadow {
          0% { opacity: 0; }
          45% { opacity: 0.28; }
          55% { opacity: 0.28; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        className="relative w-full max-w-[960px]"
        style={{ perspective: "2400px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute -top-12 right-0 md:-top-5 md:-right-5 z-20 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: COLORS.porcelain }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <line x1="1" y1="1" x2="15" y2="15" stroke={COLORS.ink} strokeWidth="1.4" />
            <line x1="15" y1="1" x2="1" y2="15" stroke={COLORS.ink} strokeWidth="1.4" />
          </svg>
        </button>

        <div
          className="relative rounded-xl overflow-hidden shadow-2xl"
          style={{
            height: "clamp(460px, 60vh, 560px)",
            backgroundColor: COLORS.ink,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
            }}
          >
            {flip ? (
              <FlipPair flip={flip} total={total} onDone={handleFlipDone} />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <PageContent note={notes[currentIndex]} total={total} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => goTo(-1)}
            disabled={displayedNumber === 1 || !!flip}
            className="text-[13px] tracking-wide disabled:opacity-30 transition-opacity"
            style={{ color: COLORS.porcelain }}
          >
            ‹ Prev
          </button>

          <div className="text-center">
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "15px",
                color: COLORS.porcelain,
              }}
            >
              Akarsh Interiors
            </div>
            <div
              className="mt-1 text-[10px] tracking-[0.14em] uppercase"
              style={{ color: "rgba(237,233,225,0.55)" }}
            >
              Notes on Design — {displayedNumber} / {total}
            </div>
          </div>

          <button
            onClick={() => goTo(1)}
            disabled={displayedNumber === total || !!flip}
            className="text-[13px] tracking-wide disabled:opacity-30 transition-opacity"
            style={{ color: COLORS.porcelain }}
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full border px-6 py-3 text-[13px] tracking-wide transition-all duration-300"
        style={{ borderColor: COLORS.bronze, color: COLORS.bronze }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.bronze;
          e.currentTarget.style.color = COLORS.porcelain;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = COLORS.bronze;
        }}
      >
        Read More — 5 Notes on Interior Design
      </button>

      {open && createPortal(modal, document.body)}
    </>
  );
}