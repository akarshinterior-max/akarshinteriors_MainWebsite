// import { useState } from "react";
// import IntroLoader from "./components/layout/IntroLoader";
// import Navbar from "./components/layout/Navbar";
// import Home from "./pages/Home";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Footer from "./sections/Footer";

// export default function App() {
//   const [introDone, setIntroDone] = useState(
//     () => sessionStorage.getItem("akarsh-intro-played") === "true"
//   );

//   const [currentPage, setCurrentPage] = useState("home");

//   return (
//     <div className="min-h-screen bg-[#EDE9E1] font-sans selection:bg-[#A68A5B] selection:text-white">
//       {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

//       <div
//         style={{
//           opacity: introDone ? 1 : 0,
//           transition: "opacity 0.6s ease",
//         }}
//       >
//         <Navbar setCurrentPage={setCurrentPage} />

//         {currentPage === "home" ? (
//           <>
//             <Home />
//             <Footer setCurrentPage={setCurrentPage} />
//           </>
//         ) : (
//           <div className="relative pt-20">
//             <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-6">
//               <button 
//                 onClick={() => {
//                   setCurrentPage("home");
//                   window.scrollTo({ top: 0, behavior: 'instant' });
//                 }}
//                 className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A68A5B] hover:text-[#211F1B] transition-colors bg-[#EDE9E1] border border-[#A68A5B]/30 px-5 py-2.5 rounded-full shadow-sm cursor-pointer"
//               >
//                 <span>← Back to Studio</span>
//               </button>
//             </div>
            
//             <PrivacyPolicy />
//             <Footer setCurrentPage={setCurrentPage} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import IntroLoader from "./components/layout/IntroLoader";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage"; // <-- Imported your new immersive gallery page
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./sections/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("akarsh-intro-played") === "true"
  );

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#EDE9E1] font-sans selection:bg-[#A68A5B] selection:text-white">
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      <div
        style={{
          opacity: introDone ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar setCurrentPage={setCurrentPage} />

        {/* Dynamic Route Rendering based on active page state */}
        {currentPage === "home" && (
          <>
            <Home />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )}

        {currentPage === "gallery" && (
          <>
            <GalleryPage setCurrentPage={setCurrentPage} />
            <Footer setCurrentPage={setCurrentPage} />
          </>
        )}

        {currentPage === "privacy" && (
          <div className="relative pt-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-6">
              <button 
                onClick={() => {
                  setCurrentPage("home");
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A68A5B] hover:text-[#211F1B] transition-colors bg-[#EDE9E1] border border-[#A68A5B]/30 px-5 py-2.5 rounded-full shadow-sm cursor-pointer"
              >
                <span>← Back to Studio</span>
              </button>
            </div>
            
            <PrivacyPolicy />
            <Footer setCurrentPage={setCurrentPage} />
          </div>
        )}
      </div>
    </div>
  );
}