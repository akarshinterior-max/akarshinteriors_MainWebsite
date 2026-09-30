import { useState } from 'react';

import centuryImg from '../assets/images/century_ply.jpg';
import greenplyImg from '../assets/images/green_ply.png';
import gurjanImg from '../assets/images/gurjan_ply.jpg';
import actionTesaImg from '../assets/images/action_tesa.png';
import kitplyImg from '../assets/images/kitply.png';

import hettichImg from '../assets/images/hettich.png';
import hafaleImg from '../assets/images/hafale.jpg';
import ebcoImg from '../assets/images/ebco.jpg';
import blumImg from '../assets/images/blum.png';
import godrejImg from '../assets/images/godrej.jpg';

import merinoImg from '../assets/images/merino.jpg';
import greenlamImg from '../assets/images/greenlam.jpg';
import dorbyImg from '../assets/images/dorby.png';
import skydecorImg from '../assets/images/sjydecor.jpg'; 
import advancedImg from '../assets/images/advanced.jpg';

import havellsImg from '../assets/images/havells.png';
import cromptonImg from '../assets/images/crompton.png';
import legrandImg from '../assets/images/legrand.png';
import anchorImg from '../assets/images/anchor.png';
import schneiderImg from '../assets/images/schender.png';

const brandCategories = [
  {
    category: "Plywood & Core",
    description: "Uncompromised structural durability, termite resistance, and boiling-water-proof foundations.",
    brands: [
      { 
        name: "CenturyPly", 
        desc: "India's Leading BWP & Club Prime Plywood", 
        image: centuryImg,
        simpleInfo: "CenturyPly is a household name for strong wooden boards. Their plywood is specially treated to resist water and termites completely, meaning your kitchen cabinets and wardrobes won't swell or get damaged even during heavy monsoons or water spills."
      },
      { 
        name: "Greenply", 
        desc: "Zero-Emission High-Durability Engineered Wood", 
        image: greenplyImg,
        simpleInfo: "Greenply makes heavy-duty wooden sheets that are completely safe for your family's health. They release zero harmful chemicals (low VOC), making them ideal for bedrooms and kids' rooms where indoor air quality matters."
      },
      { 
        name: "Gurjan 710", 
        desc: "Superior Density Marine-Grade Strength", 
        image: gurjanImg,
        simpleInfo: "Gurjan wood is considered the gold standard for strength. This plywood uses high-density timber that can handle heavy weight and extreme moisture, making it the absolute best choice for sink areas and bathroom vanities."
      },
      { 
        name: "Action TESA", 
        desc: "Premium Engineered Wood & HDHMR Panels", image: actionTesaImg,
        simpleInfo: "Action TESA makes dense engineered wood panels (HDHMR) that act like a shield against water. Even if water sits on it for a while, it doesn't expand like regular wood. It's fantastic for modern carved kitchen shutters."
      },
      { 
        name: "Kitply", 
        desc: "Trusted Legacy of Lifetime Structural Stability", 
        image: kitplyImg,
        simpleInfo: "Kitply is one of India's oldest and most trusted names in wood stability. They provide robust structural foundation panels that ensure your heavy wardrobes and wall units stay firmly in place for decades without sagging."
      }
    ]
  },
  {
    category: "Hardware & Fittings",
    description: "European-engineered motion systems, soft-closing channels, hydraulic hinges, and architectural locks.",
    brands: [
      { 
        name: "Hettich", 
        desc: "Precision German Motion Technology", 
        image: hettichImg,
        simpleInfo: "Hettich brings German engineering to your home drawers and doors. They make smooth channels and hinges that close silently on their own with a gentle push, preventing slamming and finger pinching."
      },
      { 
        name: "Hafele", 
        desc: "Innovative Architectural Fittings & Lighting", 
        image: hafaleImg,
        simpleInfo: "Hafele specializes in smart space-saving mechanisms and built-in cabinet lighting. They help turn tight corners into usable pull-out pantries and make dark wardrobes glow automatically when you open them."
      },
      { 
        name: "Ebco", 
        desc: "Advanced Modular Kitchen Mechanisms", 
        image: ebcoImg,
        simpleInfo: "Ebco designs clever storage accessories tailored for Indian cooking habits. Think of tall pull-out spice racks, corner magic-corners, and plate holders that make organizing your kitchen super easy."
      },
      { 
        name: "Blum", 
        desc: "Smooth Lifter & Runner Systems from Austria", 
        image: blumImg,
        simpleInfo: "Blum makes top-tier Austrian hardware that lets heavy overhead kitchen cabinets lift up effortlessly and stay open in mid-air. Their drawer runners feel buttery smooth, even when packed heavy with steel utensils."
      },
      { 
        name: "Godrej", 
        desc: "Trusted Indian Security & Architectural Hardware", 
        image: godrejImg,
        simpleInfo: "Godrej is India's most trusted name for safety. We use their high-security main door locks, digital smart locks, and sturdy door handles so you can rest easy knowing your home is secure."
      }
    ]
  },
  {
    category: "Laminates & Acrylic",
    description: "Mirror-finish acrylics, anti-fingerprint textures, and designer high-pressure surfaces.",
    brands: [
      { 
        name: "Merino", 
        desc: "Global Leader in High-Pressure Laminates", 
        image: merinoImg,
        simpleInfo: "Merino provides the outer decorative layer for your furniture. Their laminates are scratch-resistant, heat-proof, and come in stunning wood grains or solid matte shades that give your home an upscale designer look."
      },
      { 
        name: "Greenlam", 
        desc: "Designer Anti-Bacterial Surface Solutions", 
        image: greenlamImg,
        simpleInfo: "Greenlam laminates come with built-in anti-bacterial technology. This means germs and bacteria cannot grow on your kitchen countertops or table surfaces, keeping your dining and food prep areas super hygienic."
      },
      { 
        name: "Dorby", 
        desc: "Trendsetting Decorative Laminates", 
        image: dorbyImg,
        simpleInfo: "Dorby offers creative and modern surface finishes that follow the latest global interior design trends. They make it easy to add unique textures and elegant colors to your wardrobe doors."
      },
      { 
        name: "Skydecor", 
        desc: "Flawless High-Gloss Acrylic Finishes", 
        image: skydecorImg,
        simpleInfo: "Skydecor gives your kitchen cabinets that gorgeous, ultra-glossy mirror finish. It reflects light to make your rooms look brighter, bigger, and wonderfully luxurious."
      },
      { 
        name: "Advanced", 
        desc: "Premium Anti-Fingerprint Matte Surfaces", 
        image: advancedImg,
        simpleInfo: "Advanced specializes in matte laminates that do not catch greasy fingerprints. If you love a clean, modern flat-matte dark kitchen or wardrobe look without constantly wiping smudge marks, this is the material used."
      }
    ]
  },
  {
    category: "Electrical & Automation",
    description: "Safe fire-retardant wiring, modern modular switches, and high-performance climate systems.",
    brands: [
      { 
        name: "Havells", 
        desc: "Premium Modular Switches & Safe Copper Wiring", 
        image: havellsImg,
        simpleInfo: "Havells provides heavy-duty insulated copper wires that protect your home from electrical short circuits, alongside sleek designer wall switches that feel soft and safe to click."
      },
      { 
        name: "Crompton", 
        desc: "High-Efficiency Fans & Architectural Fixtures", 
        image: cromptonImg,
        simpleInfo: "Crompton makes energy-efficient ceiling fans and designer lights that keep your rooms cool and well-illuminated while helping lower your monthly electricity bill."
      },
      { 
        name: "Legrand", 
        desc: "Global Specialist in Smart Home Electricals", 
        image: legrandImg,
        simpleInfo: "Legrand brings luxury automation to your fingertips. Their sleek touch switches and smart sockets allow you to control lights, curtains, and appliances via your phone or voice assistants."
      },
      { 
        name: "Anchor by Panasonic", 
        desc: "Industry Standard for Safe Domestic Power", 
        image: anchorImg,
        simpleInfo: "Anchor is a household staple for reliable electrical safety boards and sockets. They ensure steady, shock-free electricity flow throughout every corner of your home."
      },
      { 
        name: "Schneider Electric", 
        desc: "Advanced Automation & Miniature Circuit Breakers", 
        image: schneiderImg,
        simpleInfo: "Schneider handles your home's main safety electrical box (MCBs). If there is ever an electrical overload or a short circuit in any appliance, Schneider's smart breakers instantly cut power in milliseconds to keep your family safe."
      }
    ]
  }
];

export default function TrustedBrands() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section className="w-full bg-[#F9F8F6] text-[#1A1815] py-32 relative overflow-hidden border-t border-[#1A1815]/10">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#A68A5B] rounded-full blur-[200px] opacity-[0.04] pointer-events-none"></div>
      <div className="max-w-[1550px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#A68A5B]">
              Uncompromising Quality
            </p>
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1815]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Trusted Material <span className="italic font-light text-[#A68A5B]">Partners</span>
          </h2>
          <p className="text-sm font-light text-[#1A1815]/60 mt-4 leading-relaxed">
            True luxury lies in what you cannot see. We build your sanctuaries using only industry-leading certified materials, hardware, and electrical ecosystems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {brandCategories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer border ${
                activeTab === index 
                  ? 'bg-[#A68A5B] text-[#F9F8F6] border-[#A68A5B] font-semibold shadow-md' 
                  : 'bg-white text-[#1A1815]/70 border-[#1A1815]/15 hover:border-[#A68A5B]/50 hover:text-[#1A1815]'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm font-light text-[#A68A5B] tracking-wide">
            {brandCategories[activeTab].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {brandCategories[activeTab].brands.map((brand, bIndex) => (
            <div 
              key={bIndex}
              className="group relative bg-white border border-[#1A1815]/10 rounded-2xl p-6 hover:border-[#A68A5B]/50 transition-all duration-500 hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-full h-36 rounded-xl bg-[#F0EEE9] border border-[#1A1815]/10 flex items-center justify-center mb-5 overflow-hidden relative group-hover:border-[#A68A5B]/30 transition-colors">
                  <img 
                    src={brand.image} 
                    alt={brand.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-all duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden absolute inset-0 flex items-center justify-center text-[11px] text-[#1A1815]/40 uppercase tracking-widest text-center px-2 font-medium">
                    [ Missing: {brand.name} ]
                  </div>
                </div>

                <h3 
                  className="text-xl font-normal text-[#1A1815] mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {brand.name}
                </h3>
                <p className="text-xs font-light text-[#1A1815]/60 tracking-wider leading-relaxed mb-6">
                  {brand.desc}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedBrand(brand)}
                  className="w-full mb-4 py-2 px-4 rounded-lg bg-[#EDE9E1]/60 hover:bg-[#A68A5B] hover:text-white text-[#1A1815] text-xs font-medium tracking-wider uppercase transition-colors duration-300 cursor-pointer"
                >
                  Know More
                </button>

                <div className="pt-3 border-t border-[#1A1815]/10 flex items-center justify-between text-[11px] text-[#A68A5B] font-medium tracking-widest uppercase">
                  <span>Verified</span>
                  <span>Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#F9F8F6] rounded-2xl p-8 border border-[#A68A5B]/30 shadow-2xl text-[#1A1815]">
            <button 
              onClick={() => setSelectedBrand(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EDE9E1] flex items-center justify-center text-sm font-bold text-[#1A1815] hover:bg-[#A68A5B] hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white border border-[#1A1815]/10 flex items-center justify-center p-2">
                <img src={selectedBrand.image} alt={selectedBrand.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#A68A5B] font-semibold">Partner Spotlight</span>
                <h3 className="text-2xl font-normal text-[#1A1815]" style={{ fontFamily: "'Fraunces', serif" }}>
                  {selectedBrand.name}
                </h3>
              </div>
            </div>

            <p className="text-xs font-medium text-[#A68A5B] mb-3 tracking-wide">{selectedBrand.desc}</p>
            
            <div className="bg-white p-5 rounded-xl border border-[#1A1815]/10 mb-6">
              <p className="text-sm font-light text-[#1A1815]/80 leading-relaxed">
                {selectedBrand.simpleInfo}
              </p>
            </div>

            <button 
              onClick={() => setSelectedBrand(null)}
              className="w-full py-3 rounded-xl bg-[#A68A5B] text-white font-medium text-xs tracking-widest uppercase hover:bg-[#91764A] transition-colors cursor-pointer"
            >
              Got It, Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}