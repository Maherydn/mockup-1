import ContactSection from "./_components/contactSection/ContactSection";
import HomeSection from "./_components/HomeSection";
import ProjectSection from "./_components/projectSection/ProjectSection";
import ServiceSection from "./_components/serviceSection/ServiceSection";

export default function Home() {
  return (
    <div className="h-full w-full">
      <HomeSection />
      <ProjectSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
