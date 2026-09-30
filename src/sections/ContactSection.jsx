import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Hyderabad",
    service: "Full Home Interior",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const recipient = "consultation@akarshenterprises.com"; // Replace with your actual email
    const subject = encodeURIComponent(`Interior Design Consultation Inquiry - ${formData.name || "Client"}`);
    const body = encodeURIComponent(
      `Hello Akarsh Interiors Team,\n\nI am interested in discussing an interior design project.\n\nDetails:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- City: ${formData.city}\n- Service Type: ${formData.service}\n\nLooking forward to hearing from you.`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919666306868";
    const text = encodeURIComponent(
      `Hi Akarsh Interiors, I would like to book a consultation.\n\nName: ${formData.name || "Not provided"}\nCity: ${formData.city}\nService: ${formData.service}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/akarsh_interiors_?utm_source=qr&stkn=ODMzamEyOTkzYnhw", "_blank");
  };

  return (
    <section id="contact" className="w-full bg-[#1A1815] py-28 lg:py-36 text-[#EDE9E1] relative overflow-hidden border-t border-[#EDE9E1]/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#A68A5B] rounded-full blur-[200px] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#A68A5B]">
              Get In Touch
            </p>
            <span className="w-8 h-[1px] bg-[#A68A5B]"></span>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-normal leading-tight mb-4"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Let’s Discuss Your <span className="italic font-light text-[#A68A5B]">Sanctuary.</span>
          </h2>
          <p className="text-[#EDE9E1]/70 font-light text-sm md:text-base">
            Fill in your details below and instantly connect with our lead designers via Email, WhatsApp, or Instagram. No waiting, absolute transparency.
          </p>
        </div>

        <div className="bg-[#211F1B] border border-[#EDE9E1]/15 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <form className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-3">
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="e.g. Shri Krishna"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[#1A1815] border border-[#EDE9E1]/20 rounded-lg px-4 py-4 text-[#EDE9E1] placeholder-[#EDE9E1]/30 focus:outline-none focus:border-[#A68A5B] transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-3">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+91 9666306868"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#1A1815] border border-[#EDE9E1]/20 rounded-lg px-4 py-4 text-[#EDE9E1] placeholder-[#EDE9E1]/30 focus:outline-none focus:border-[#A68A5B] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-3">
                  Your City / Location
                </label>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-[#1A1815] border border-[#EDE9E1]/20 rounded-lg px-4 py-4 text-[#EDE9E1] focus:outline-none focus:border-[#A68A5B] transition-colors text-sm cursor-pointer"
                >
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Anantapur">Anantapur</option>
                  <option value="Tirupati">Tirupati</option>
                  <option value="Warangal">Warangal</option>
                  <option value="Karimnagar">Karimnagar</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-[#A68A5B] font-semibold mb-3">
                  Scope of Work
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-[#1A1815] border border-[#EDE9E1]/20 rounded-lg px-4 py-4 text-[#EDE9E1] focus:outline-none focus:border-[#A68A5B] transition-colors text-sm cursor-pointer"
                >
                  <option value="Full Home Interior">Full Home Interior (3BHK / Villa)</option>
                  <option value="Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                  <option value="Renovation / Extension">Renovation / First Floor Expansion</option>
                  <option value="Commercial Luxury Space">Commercial / Office Space</option>
                  <option value="Custom Project">Custom Project / Other Requirement</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EDE9E1]/10 flex flex-col xl:flex-row gap-6 items-center justify-between">
              <p className="text-xs text-[#EDE9E1]/50 font-light">
                * Clicking will instantly open your preferred app or page with your prefilled details.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="px-6 py-4 bg-transparent border border-[#A68A5B] text-[#A68A5B] hover:bg-[#A68A5B] hover:text-[#1A1815] font-medium uppercase tracking-[0.15em] text-xs rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="px-6 py-4 bg-[#25D366] text-[#1A1815] hover:bg-[#20ba5a] font-semibold uppercase tracking-[0.15em] text-xs rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleInstagramClick}
                  className="px-6 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white hover:opacity-90 font-semibold uppercase tracking-[0.15em] text-xs rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(253,29,29,0.3)] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.58 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}