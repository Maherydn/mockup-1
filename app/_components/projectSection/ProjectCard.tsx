import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
  buttonLabel: string;
  buttonAction?: () => void;
  overlayOpacity?: string;
  containerClassName?: string;
  href: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  categories,
  buttonLabel,
  buttonAction,
  overlayOpacity = "bg-black/70",
  containerClassName = "w-full h-60",
  href,
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer ${containerClassName}`}
        onClick={() => window.location.href = href}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-xs"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={`absolute inset-0 ${overlayOpacity}`} />
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow rounded-lg px-2 py-px border border-yellow opacity-0 group-hover:opacity-100 transition duration-300 z-50 cursor-pointer blur-none capitalize hover:text-black hover:bg-yellow"
          onClick={(e) => {
            e.stopPropagation();
          if (buttonAction) {
            buttonAction();
          } else if (href) {
            window.location.href = href;
          }
          }}
        >
          {buttonLabel}
        </button>
      <div className="relative z-10 flex flex-col justify-between items-start p-4 h-full">
        <div className="flex items-center justify-center gap-2 uppercase font-semibold text-sm text-yellow">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat}>
              <h2>{cat}</h2>
              {idx !== categories.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-yellow"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition duration-300">
          <h3 className="text-xl text-white/80 capitalize">{title}</h3>
          <p className="text-xs text-white/60">{description}</p>
        </div>
      </div>
    </div>
  );
};
