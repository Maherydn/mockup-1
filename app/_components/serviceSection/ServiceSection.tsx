"use client";

import { BrandingIcon, DesignIcon, DevelopmentIcon } from "@/app/_assets/icon";

const services = [
  {
    id: "01",
    title: "Branding",
    icon: <BrandingIcon />,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: "02",
    title: "Design",
    icon: <DesignIcon />,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
  {
    id: "03",
    title: "Development",
    icon: <DevelopmentIcon />,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  },
];

const ServiceSection = () => {
  return (
    <section className="md:min-h-screen h-fit w-full flex flex-col justify-center items-center gap-10 px-4 md:px-0 mt-24 md:mt-0">
      {/* Titre principal */}
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold text-xl text-white/80">
        <h2>My</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>Services</h2>
      </div>

      {/* Liste des services */}
      <div className="w-full flex md:flex-row flex-col gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="md:w-1/3 w-full min-w-0 h-96 bg-gradient-to-r from-[#323332] to-[#3E403E] rounded-lg p-4 flex flex-col justify-between items-start
              hover:scale-[1.05] hover:shadow-xl hover:shadow-yellow/30
              transition duration-300 ease-in-out"
          >
            <div className="w-16 h-16 flex justify-center items-center ml-4">
              {service.icon}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-yellow">{service.id}</p>
              <h3 className="capitalize text-2xl text-white/90">
                {service.title}
              </h3>
              <p className="text-lg text-white/60 leading-5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
