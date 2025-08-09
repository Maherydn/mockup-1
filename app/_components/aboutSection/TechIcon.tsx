type Tech = {
  name: string;
  icon: React.ReactNode;
};

const TechIcon = ({ tech }: { tech: Tech }) => (
  <div className="group relative w-14 h-14 flex justify-center items-center rounded-lg transition duration-300 cursor-pointer">
    <div className="transition-transform duration-300 group-hover:-translate-y-1">
      {tech.icon}
    </div>
    <span className="absolute bottom-full mb-0 px-2 py-1 text-xs text-white bg-slate-900/60 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

export default TechIcon;
