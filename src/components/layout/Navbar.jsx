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
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    let touchStartY = 0;
    let lastTouchY = 0;
    const closeMenu = () => setMobileMenuOpen(false);
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 3) closeMenu();
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      lastTouchY = touchStartY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const delta = lastTouchY - currentY;
      if (Math.abs(delta) > 5) closeMenu();

      lastTouchY = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (setCurrentPage) setCurrentPage("home");
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleVaultClick = () => {
    setMobileMenuOpen(false);
    if (setCurrentPage) setCurrentPage("gallery");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled || mobileMenuOpen
          ? "bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#1A1815]/10 shadow-sm py-4"
          : "bg-transparent border-b border-transparent py-5 lg:py-6"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-6 md:px-8 lg:px-12">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 sm:gap-4 shrink-0 z-[60] cursor-pointer"
        >
          <img
            src={logo}
            alt="Akarsh Interiors"
            className="h-9 sm:h-10 md:h-11 lg:h-[52px] w-auto transition-all duration-500"
          />

          <span className="hidden xl:flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#1A1815]/20" />
            <span
              className="text-[13px] italic text-[#1A1815]/70 whitespace-nowrap"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Interior Design Studio
            </span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-7 xl:gap-10">
          <ul className="flex items-center gap-6 xl:gap-9">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-[13px] xl:text-[13.5px] text-[#1A1815]/70 hover:text-[#1A1815] tracking-[0.06em] uppercase font-normal transition-colors duration-300 group cursor-pointer whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#A68A5B] transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={handleVaultClick}
            className="text-[13px] xl:text-[13.5px] text-[#A68A5B] hover:text-[#1A1815] tracking-[0.06em] uppercase font-medium transition-colors duration-300 cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Vault</span>
            <span className="text-[10px]">✦</span>
          </button>
          <button
            onClick={(e) => handleNavClick(e, "#contact")}
            className="rounded-full border border-[#A68A5B] text-[#A68A5B] px-5 xl:px-6 py-2.5 text-[13px] xl:text-[14px] transition-all duration-300 hover:bg-[#A68A5B] hover:text-[#F9F8F6] cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
          >
            Let&apos;s Talk
          </button>
        </div>
        <button
          type="button"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="lg:hidden text-[#1A1815] p-2 -mr-2 focus:outline-none cursor-pointer z-[60]"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="block transition-transform duration-300">
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`lg:hidden absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-[#1A1815]/10 shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "max-h-[calc(100dvh-70px)] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain">
          <ul className="flex flex-col items-center py-6 sm:py-7 md:py-8 gap-5 sm:gap-6">
            {/* Navigation links */}
            {navItems.map((item) => (
              <li key={`mobile-${item.name}`}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base sm:text-lg text-[#1A1815] tracking-[0.1em] uppercase font-light cursor-pointer transition-colors duration-200 hover:text-[#A68A5B]"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={handleVaultClick}
                className="text-base sm:text-lg text-[#A68A5B] tracking-[0.1em] uppercase font-medium cursor-pointer transition-colors duration-200"
              >
                Sanctuary Vault ✦
              </button>
            </li>
            <li className="w-full px-5 sm:px-8 mt-1 sm:mt-2">
              <button
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full rounded-full bg-[#A68A5B] text-[#F9F8F6] py-3 sm:py-3.5 text-[14px] sm:text-[15px] cursor-pointer shadow-md transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
              >
                Let&apos;s Talk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}