export default function Footer({ setCurrentPage }) {
  return (
    <footer className="w-full bg-[#1A1815] text-[#EDE9E1] pt-28 pb-16 border-t border-[#EDE9E1]/15 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#A68A5B] rounded-full blur-[200px] opacity-[0.08] pointer-events-none"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-24 border-b border-[#EDE9E1]/10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#A68A5B]"></span>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B]">
                The Final Masterpiece
              </p>
            </div>
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Excellence is not an act. <br />
              <span className="italic font-light text-[#A68A5B]">It is our standard.</span>
            </h2>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#EDE9E1]/70 hover:text-[#A68A5B] transition-colors cursor-pointer py-2"
          >
            <span>Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-[#EDE9E1]/20 flex items-center justify-center group-hover:border-[#A68A5B] transition-colors">
              <svg className="w-4 h-4 transform -rotate-90 text-[#A68A5B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 py-20 border-b border-[#EDE9E1]/10">

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-normal tracking-wide text-[#EDE9E1]" style={{ fontFamily: "'Fraunces', serif" }}>
              Akarsh Interiors Studio
            </h3>
            <p className="text-sm font-light text-[#EDE9E1]/60 leading-relaxed max-w-sm">
              Transforming architectural blueprints into emotional sanctuaries. Delivering uncompromised luxury, absolute transparency, and meticulous execution across Telangana and Andhra Pradesh.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A68A5B]/10 border border-[#A68A5B]/30 text-xs text-[#A68A5B] font-medium tracking-wider uppercase">
              <span>★</span> The Akarsh Guarantee Verified
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A68A5B] font-semibold mb-6">
              Design Studios
            </h4>
            <ul className="space-y-4 text-sm font-light text-[#EDE9E1]/70">
              <li>
                <strong className="text-[#EDE9E1] font-medium block mb-0.5">Hyderabad</strong>
                Second Floor, Plot No E4, CMC Enclave Rd Number 1, near Pearl Village Road, Kondapur, Gachibowli, Telangana 500084
              </li>
              <li>
                <strong className="text-[#EDE9E1] font-medium block mb-0.5">Anantapur Flagship</strong>
                12-5-408, Revenue Ward 28, Housing Board Colony, Ananthapur,  Andhra Pradesh 515001
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A68A5B] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#EDE9E1]/70">
              <li><a href="#home" className="hover:text-[#A68A5B] transition-colors">The Experience</a></li>
              <li><a href="#spaces" className="hover:text-[#A68A5B] transition-colors">Spaces We Transform</a></li>
              <li><a href="#projects" className="hover:text-[#A68A5B] transition-colors">Curated Portfolio</a></li>
              <li><a href="#process" className="hover:text-[#A68A5B] transition-colors">Architectural Process</a></li>
              <li><a href="#contact" className="hover:text-[#A68A5B] transition-colors">Schedule Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#A68A5B] font-semibold mb-6">
              Client Relations
            </h4>
            <p className="text-sm font-light text-[#EDE9E1]/70 mb-2">
              Principal Architect Desk
            </p>
            <p className="text-lg font-normal text-[#EDE9E1] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              +91 9666306868
            </p>
            <p className="text-xs font-light text-[#EDE9E1]/50 leading-relaxed">
              Open Monday to Saturday<br />
              9:30 AM – 7:00 PM IST
            </p>
          </div>

        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#EDE9E1]/40 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Akarsh Interiors Studio. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="text-[#A68A5B]/80 font-medium tracking-wide">Defining India's Luxury Living.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <button 
                onClick={() => setCurrentPage("privacy")}
                className="hover:text-[#EDE9E1] cursor-pointer transition-colors uppercase tracking-widest bg-transparent border-none p-0 text-xs text-inherit font-light"
                >
                Privacy Policy
                </button>
          </div>
        </div>

      </div>
    </footer>
  );
}