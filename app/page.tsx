import AboutSection from "./_components/aboutSection/AboutSection";
import ContactSection from "./_components/contactSection/ContactSection";
import HeroSection from "./_components/heroSection/HeroSection";
import ProjectSection from "./_components/projectSection/ProjectSection";
import ServiceSection from "./_components/serviceSection/ServiceSection";

export default function Home() {
  return (
    <div className="h-full w-full ">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
