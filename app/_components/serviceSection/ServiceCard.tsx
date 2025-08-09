"use client";

interface ServiceCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  background: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  icon,
  description,
  background,
}) => {
  return (
    <div
      className="md:w-1/3 w-full min-w-0 h-96 bg-gradient-to-r rounded-lg p-4 flex flex-col justify-between items-start bg-cover bg-center
        hover:scale-[1.05] hover:shadow-xl hover:shadow-yellow/30
        transition duration-300 ease-in-out relative overflow-hidden cursor-pointer hover:animate-tilt-wobble"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="w-16 h-16 flex justify-center items-center ml-4 z-10">
        {icon}
      </div>
      <div className="flex flex-col gap-2 z-10">
        <p className="text-lg text-yellow">{id}</p>
        <h3 className="capitalize text-2xl text-white/90">{title}</h3>
        <p className="text-lg text-white/60 leading-5">{description}</p>
      </div>
    </div>
  );
};
