import { useState, useEffect } from 'react';

import img1 from '../assets/images/gallery/img1.jpg';
import img2 from '../assets/images/gallery/img2.jpg';
import img3 from '../assets/images/gallery/img3.jpg';
import img4 from '../assets/images/gallery/img4.jpg';
import img5 from '../assets/images/gallery/img5.jpg';
import img6 from '../assets/images/gallery/img6.jpg';
import img7 from '../assets/images/gallery/img7.jpg';
import img8 from '../assets/images/gallery/img8.jpg';
import img9 from '../assets/images/gallery/img9.jpg';
import img10 from '../assets/images/gallery/img10.jpg';
import img11 from '../assets/images/gallery/img11.jpg';
import img12 from '../assets/images/gallery/img12.jpg';
import img13 from '../assets/images/gallery/img13.jpg';
import img14 from '../assets/images/gallery/img14.jpg';
import img15 from '../assets/images/gallery/img15.jpg';
import img16 from '../assets/images/gallery/img16.jpg';
import img17 from '../assets/images/gallery/img17.jpg';
import img18 from '../assets/images/gallery/img18.jpg';
import img19 from '../assets/images/gallery/img19.jpg';
import img20 from '../assets/images/gallery/img20.jpg';
import img21 from '../assets/images/gallery/img21.jpg';
import img22 from '../assets/images/gallery/img22.jpg';
import img23 from '../assets/images/gallery/img23.jpg';
import img24 from '../assets/images/gallery/img24.jpg';
import img25 from '../assets/images/gallery/img25.jpg';
import img26 from '../assets/images/gallery/img26.jpg';
import img27 from '../assets/images/gallery/img27.jpg';
import img28 from '../assets/images/gallery/img28.jpg';
import img29 from '../assets/images/gallery/img29.jpg';
import img30 from '../assets/images/gallery/img30.jpg';

const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30
];

export default function GalleryPage({ setCurrentPage }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock background scroll when the image modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const galleryItems = allImages.map((imgSrc, index) => ({
    id: index + 1,
    title: `Sanctuary Masterwork Frame 0${index + 1}`,
    subtitle: "Aura Collection — Architectural Residence",
    image: imgSrc
  }));

  return (
    <div className="w-full min-h-screen bg-[#F9F8F6] text-[#1A1815] pt-32 pb-24 relative overflow-hidden">

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#A68A5B] rounded-full blur-[240px] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-16">
          <button 
            onClick={() => setCurrentPage("home")}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#1A1815]/60 hover:text-[#A68A5B] transition-colors mb-8 cursor-pointer"
          >
            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
            <span>Return to Experience</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1815]/10 pb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#A68A5B]">
                  Unfiltered Visual Journey
                </p>
              </div>
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                The Sanctuary <span className="italic font-light text-[#A68A5B]">Archive</span>
              </h1>
            </div>
            <p className="text-sm font-light text-[#1A1815]/70 max-w-md leading-relaxed">
              Step into an immersive stream of our finest craftsmanship. Explore thirty hand-selected spaces designed to transport you into a world of pure timeless elegance.
            </p>
          </div>
        </div>

        <div className="mb-16 py-6 bg-white border border-[#1A1815]/10 rounded-2xl overflow-hidden relative shadow-sm">
          <div className="flex whitespace-nowrap animate-marquee items-center gap-12 text-xs uppercase tracking-[0.3em] text-[#A68A5B] font-medium">
            <span>✦ Immersive Craftsmanship</span>
            <span>✦ Bespoke Millwork</span>
            <span>✦ Architectural Lighting</span>
            <span>✦ Uncompromised Details</span>
            <span>✦ Modern Living Spaces</span>
            <span>✦ Immersive Craftsmanship</span>
            <span>✦ Bespoke Millwork</span>
            <span>✦ Architectural Lighting</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] box-border">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative mb-8 rounded-2xl overflow-hidden bg-[#F0EEE9] border border-[#1A1815]/10 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 break-inside-avoid block"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out block"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815]/90 via-[#1A1815]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A68A5B] font-semibold mb-2">
                  {item.subtitle}
                </span>
                <h3 
                  className="text-2xl font-normal text-white"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#EDE9E1]/70 font-light mt-2 flex items-center gap-2">
                  <span>Click to Expand Frame</span>
                  <span>→</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-[#1A1815] text-[#EDE9E1] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#A68A5B]/20 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 
              className="text-3xl md:text-5xl font-normal"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Ready to create your own masterwork? <br />
              <span className="italic font-light text-[#A68A5B]">Let’s begin your journey.</span>
            </h3>
            <p className="text-sm font-light text-[#EDE9E1]/70 leading-relaxed">
              Book a private consultation with our principal designers to discuss your vision and turn it into a living reality.
            </p>
            <div>
              <button 
                onClick={() => {
                  setCurrentPage("home");
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-8 py-4 bg-[#A68A5B] text-[#1A1815] text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#b89b67] transition-colors cursor-pointer shadow-lg"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>

      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-[#1A1815]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[#A68A5B] hover:text-[#A68A5B] transition-colors cursor-pointer z-50"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-[65vh] rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-6 flex items-center justify-center">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A68A5B] font-semibold block mb-1">
                {selectedImage.subtitle}
              </span>
              <h2 
                className="text-2xl md:text-3xl text-white font-normal"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}