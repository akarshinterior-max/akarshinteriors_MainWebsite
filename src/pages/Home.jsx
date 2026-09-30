import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects"; 
import Process from "../sections/Process"; 
import Stats from "../sections/Stats";
import TrustedBrands from "../sections/TrustedBrands"; // <-- 1. Import it here
import ProjectStories from "../sections/ProjectStories"; 
import EditorialPhilosophy from "../sections/EditorialPhilosophy";
import FAQSection from "../sections/FAQSection"; 
import ContactSection from "../sections/ContactSection";
import ReviewsSection from '../sections/ReviewsSection';

export default function Home() {
  return (
    <main id="home" className="w-full min-h-screen">
      <Hero />
      <FeaturedProjects />
      <Process />
      <Stats />
      <TrustedBrands /> 
      <ProjectStories />
      <ReviewsSection />
      <EditorialPhilosophy />
      <FAQSection /> 
      <ContactSection />
    </main>
  );
}