"use client";

import { ServiceCard } from "./ServiceCard";
import { BrandingIcon, DesignIcon, DevelopmentIcon } from "@/app/_assets/icon";

 const services = [
  {
    id: "01",
    title: "Branding",
    icon: <BrandingIcon />,
    description:
      "We help you build a strong, memorable brand identity that sets you apart and resonates with your target audience.",
    background: "/service-branding.jpg",
  },
  {
    id: "02",
    title: "Design",
    icon: <DesignIcon />,
    description:
      "From wireframes to high-fidelity visuals, we craft modern and user-friendly designs that enhance user engagement.",
    background: "/service-design.jpg",
  },
  {
    id: "03",
    title: "Development",
    icon: <DevelopmentIcon />,
    description:
      "We develop fast, scalable, and secure web solutions tailored to your business needs using the latest technologies.",
    background: "/service-developpment.jpg",
  },
];


const ServiceSection = () => {
  return (
    <section id="services" className="md:min-h-screen h-fit w-full flex flex-col justify-center items-center gap-20 px-6 mt-24 md:mt-0 pt-20 md:pt-0">
      {/* Titre principal */}
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold md:text-4xl text-2xl text-white/80">
        <h2>My</h2>
        <div className="w-2 h-2 rounded-full bg-yellow" />
        <h2>Services</h2>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
