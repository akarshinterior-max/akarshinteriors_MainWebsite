export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "KS Chowdary & Meghana",
      role: "Hyderabad Residence",
      quote: "Working with the studio was an absolute masterclass in elegance. They understood our vision for a warm, contemporary home instantly, turning our space into an absolute sanctuary of light and detail.",
      rating: 5,
    },
    {
      id: 2,
      name: "Hema Nanditha",
      role: "Ananthapur Residence",
      quote: "The level of precision, custom millwork, and lighting design they brought to my residence is unmatched. Every single guest who walks in is mesmerized by the atmosphere they created.",
      rating: 5,
    },
    {
      id: 3,
      name: "Pavan Kumar Reddy",
      role: "Bengaluru Residence",
      quote: "Absolute professionalism from concept to handover. They handled everything seamlessly, and the final look exceeded every expectation we had. Truly a world-class design experience.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-28 bg-[#F0EEE9] relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A68A5B] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#A68A5B]">
              Client Voices
            </p>
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
          </div>
          <h2 
            className="text-3xl md:text-5xl font-normal text-[#1A1815] tracking-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Words from Our <span className="italic font-light text-[#A68A5B]">Patrons</span>
          </h2>
          <p className="text-sm font-light text-[#1A1815]/70 mt-4 leading-relaxed">
            Read reflections from clients whose living spaces we have transformed into timeless personal sanctuaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id}
              className="bg-[#F9F8F6] p-10 rounded-3xl border border-[#1A1815]/10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 group relative"
            >
              <div>
                <div className="flex items-center gap-1 text-[#A68A5B] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-sm">✦</span>
                  ))}
                </div>
                <p 
                  className="text-base font-light text-[#1A1815]/80 leading-relaxed italic mb-8"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#1A1815]/10 flex items-center justify-between">
                <div>
                  <h3 
                    className="text-lg font-medium text-[#1A1815]"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#A68A5B] mt-1 font-semibold">
                    {item.role}
                  </p>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#EDE9E1] flex items-center justify-center text-xs font-serif text-[#1A1815] group-hover:bg-[#A68A5B] group-hover:text-white transition-colors duration-300">
                  {item.name.charAt(0)}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}