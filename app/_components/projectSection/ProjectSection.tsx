import { ProjectCard } from "./ProjectCard";

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
  buttonLabel: string;
  containerClassName?: string;
  overlayOpacity?: string;
}

// Données projets
const bigLeftProject: Project = {
  id: "1",
  imageUrl: "/landing.jpg",
  title: "Bijoux & deco",
  description:
    "The landing page highlights a delicious selection of chocolates, cakes and ice creams, with a neat presentation of the products.",
  categories: ["design", "development"],
  buttonLabel: "Show demo",
  containerClassName: "w-full h-60",
  overlayOpacity: "bg-black/70",
};

const leftSmallProjects: Project[] = [
  {
    id: "2",
    imageUrl: "/portfolio-1.png",
    title: "portfolio",
    description:
      "The landing page features a minimalist and refined aesthetic, presenting key portfolio pieces with bold typography, smooth animations, and a user-friendly layout.",
    categories: ["development"],
    buttonLabel: "Show demo",
    containerClassName: "w-1/2 min-w-0 h-full",
    overlayOpacity: "bg-black/10",
  },
  {
    id: "3",
    imageUrl: "/appGestionStagiaire.png",
    title: "gestion intern",
    description:
      "The back office allows you to manage interns, offering simple and efficient management of their follow-ups, built with Symfony for the backend and React for the frontend.",
    categories: ["development"],
    buttonLabel: "Show code",
    containerClassName: "w-1/2 min-w-0 h-full",
    overlayOpacity: "bg-black/70",
  },
];

const rightProjectsBig: Project = {
  id: "6",
  imageUrl: "/budget-tracker.png",
  title: "Budget Tracker",
  description:
    "A personal finance app that allows users to manage their income and expenses month by month...",
  categories: ["design", "development"],
  buttonLabel: "Show code",
  containerClassName: "w-full h-60",
  overlayOpacity: "bg-black/70",
};

const rightSmallProjects: Project[] = [
  {
    id: "4",
    imageUrl: "/blog-1.png",
    title: "blog",
    description:
      "A modern platform for sharing posts and ideas effortlessly. Built with Laravel on the backend and Next.js on the frontend...",
    categories: ["development"],
    buttonLabel: "Show code",
    containerClassName: "w-1/2 min-w-0 h-full",
    overlayOpacity: "bg-black/70",
  },
  {
    id: "5",
    imageUrl: "/chat.png",
    title: "Chat",
    description:
      "An instant messaging app allows users to exchange messages in real time quickly and seamlessly...",
    categories: ["development"],
    buttonLabel: "Show code",
    containerClassName: "w-1/2 min-w-0 h-full",
    overlayOpacity: "bg-black/70",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="h-fit w-full flex flex-col gap-20 xl:px-0 px-4 mt-24 md:mt-0 pt-14"
    >
      <div className="flex items-center justify-center lg:gap-2 gap-1 uppercase font-bold md:text-4xl text-2xl text-white/80">
        <h2>My</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>Projects</h2>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-4">
        {/* Left big project + small projects */}
        <div className="flex flex-col gap-4 md:max-w-1/2 min-w-0 w-full cursor-pointer">
          <ProjectCard {...bigLeftProject} />
          <div className="flex gap-4 h-96">
            {leftSmallProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </div>
        </div>

        {/* Right side projects */}
        <div className="flex md:flex-col-reverse flex-col gap-4 md:max-w-1/2 min-w-0 w-full">
          <ProjectCard {...rightProjectsBig} />
          <div className="flex gap-4 h-96">
            {rightSmallProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
