// "use client";

// import { useEffect, useState } from "react";
// import logo from "../../assets/images/logo.png";

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "Spaces", href: "#spaces" },
//   { name: "Projects", href: "#projects" },
//   { name: "Process", href: "#process" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar({ setCurrentPage }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     setMobileMenuOpen(false);
    
//     if (setCurrentPage) {
//       setCurrentPage("home");
//     }

//     const targetElement = document.querySelector(href);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     } else if (href === "#home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         scrolled || mobileMenuOpen
//           ? "bg-[#EDE9E1]/95 backdrop-blur-md border-b border-[#211F1B]/10 py-4"
//           : "bg-transparent border-b border-transparent py-6"
//       }`}
//     >
//       <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
//         <a 
//           href="#home" 
//           onClick={(e) => handleNavClick(e, "#home")}
//           className="flex items-center gap-4 shrink-0 z-50 cursor-pointer"
//         >
//           <img
//             src={logo}
//             alt="Akarsh Interiors"
//             className="h-10 md:h-[52px] w-auto transition-all duration-500"
//           />
//           <span className="hidden lg:flex items-center gap-3">
//             <span className="w-6 h-[1px] bg-[#211F1B]/20" />
//             <span
//               className="text-[13px] italic text-[#4A463E] whitespace-nowrap"
//               style={{ fontFamily: "'Fraunces', serif" }}
//             >
//               Interior Design Studio
//             </span>
//           </span>
//         </a>

//         <div className="hidden md:flex items-center gap-8 lg:gap-10">
//           <ul className="flex items-center gap-7 lg:gap-9">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   onClick={(e) => handleNavClick(e, item.href)}
//                   className="relative text-[13.5px] text-[#4A463E] hover:text-[#211F1B] tracking-[0.06em] uppercase font-normal transition-colors duration-300 group cursor-pointer"
//                 >
//                   {item.name}
//                   <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#A68A5B] transition-all duration-300 ease-out group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={(e) => handleNavClick(e, "#contact")}
//             className="rounded-full border border-[#A68A5B] text-[#A68A5B]
//                      px-6 py-2.5 text-[14px] transition-all duration-300
//                      hover:bg-[#A68A5B] hover:text-[#EDE9E1] cursor-pointer"
//             style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
//           >
//             Let&apos;s Talk
//           </button>
//         </div>

//         <button
//           className="md:hidden text-[#211F1B] p-2 focus:outline-none z-50 cursor-pointer"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           ) : (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           )}
//         </button>
//       </nav>

//       <div
//         className={`md:hidden absolute top-full left-0 w-full bg-[#EDE9E1] border-b border-[#211F1B]/10 overflow-hidden transition-all duration-300 ease-in-out ${
//           mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center py-6 gap-6">
//           {navItems.map((item) => (
//             <li key={`mobile-${item.name}`}>
//               <a
//                 href={item.href}
//                 onClick={(e) => handleNavClick(e, item.href)}
//                 className="text-lg text-[#211F1B] tracking-[0.1em] uppercase font-light cursor-pointer"
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//           <li className="w-full px-6 mt-2">
//             <button
//               onClick={(e) => handleNavClick(e, "#contact")}
//               className="w-full rounded-full bg-[#A68A5B] text-[#EDE9E1] py-3 text-[15px] cursor-pointer"
//               style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
//             >
//               Let&apos;s Talk
//             </button>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Spaces", href: "#spaces" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [], );

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (setCurrentPage) {
      setCurrentPage("home");
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleVaultClick = () => {
    setMobileMenuOpen(false);
    if (setCurrentPage) {
      setCurrentPage("gallery");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#1A1815]/10 py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-4 shrink-0 z-50 cursor-pointer"
        >
          <img
            src={logo}
            alt="Akarsh Interiors"
            className="h-10 md:h-[52px] w-auto transition-all duration-500"
          />
          <span className="hidden lg:flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#1A1815]/20" />
            <span
              className="text-[13px] italic text-[#1A1815]/70 whitespace-nowrap"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Interior Design Studio
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links & Vault Button */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-[13.5px] text-[#1A1815]/70 hover:text-[#1A1815] tracking-[0.06em] uppercase font-normal transition-colors duration-300 group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#A68A5B] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Sanctuary Vault Gallery Trigger Button */}
          <button
            onClick={handleVaultClick}
            className="text-[13.5px] text-[#A68A5B] hover:text-[#1A1815] tracking-[0.06em] uppercase font-medium transition-colors duration-300 cursor-pointer flex items-center gap-1.5"
          >
            <span>Vault</span>
            <span className="text-[10px]">✦</span>
          </button>

          <button
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-full border border-[#A68A5B] text-[#A68A5B]
                     px-6 py-2.5 text-[14px] transition-all duration-300
                     hover:bg-[#A68A5B] hover:text-[#F9F8F6] cursor-pointer"
            style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <button
          className="md:hidden text-[#1A1815] p-2 focus:outline-none z-50 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-[#1A1815]/10 overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
          mobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {navItems.map((item) => (
            <li key={`mobile-${item.name}`}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg text-[#1A1815] tracking-[0.1em] uppercase font-light cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* Mobile Vault Link */}
          <li>
            <button
              onClick={handleVaultClick}
              className="text-lg text-[#A68A5B] tracking-[0.1em] uppercase font-medium cursor-pointer"
            >
              Sanctuary Vault ✦
            </button>
          </li>
          <li className="w-full px-6 mt-2">
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full rounded-full bg-[#A68A5B] text-[#F9F8F6] py-3 text-[15px] cursor-pointer shadow-md"
              style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
            >
              Let&apos;s Talk
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}