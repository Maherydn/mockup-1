"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectCard from "./ProjectCard"; // 👈 import du composant séparé

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
  techStack: string[];
  buttonLabel: string;
  href: string;
}

const projects: Project[] = [
  {
    id: "1",
    imageUrl: "/management-stock.png",
    title: "Management Stock",
    description:
      "A modern inventory management app with an intuitive interface, fully built with Next.js.",
    categories: ["Web App"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    buttonLabel: "Show demo",
    href: "https://management-stock.maherydaniel.mg/",
  },
  {
    id: "2",
    imageUrl: "/portfolio-1.png",
    title: "Portfolio UI",
    description:
      "Minimalist portfolio showcasing creative work through fluid animations and balanced typography.",
    categories: ["Landing Page"],
    techStack: ["Next.js", "Tailwind CSS", "Gsap", "TypeScript"],
    buttonLabel: "Show demo",
    href: "https://risingconnectstudio.mg/view/template/theme_portfolio_next/template.html",
  },
  {
    id: "3",
    imageUrl: "/appGestionStagiaire.png",
    title: "Intern Management",
    description:
      "Full-stack platform for managing interns, combining Symfony for backend and React for the frontend.",
    categories: ["Dashboard"],
    techStack: ["Symfony", "React", "TailwindCSS"],
    buttonLabel: "Show code",
    href: "https://github.com/Maherydn/app-gestion-stagiaire-frontend",
  },
  {
    id: "4",
    imageUrl: "/blog-1.png",
    title: "Modern Blog",
    description:
      "A modern, modular blogging platform leveraging Laravel’s backend power with Next.js rendering.",
    categories: ["CMS"],
    techStack: ["Laravel", "Next.js", "Tailwind CSS", "Mysql", "TypeScript", "Tailwind CSS"],
    buttonLabel: "Show code",
    href: "https://github.com/Maherydn/my-blog",
  },
  {
    id: "5",
    imageUrl: "/landing.jpg",
    title: "Bijoux & Déco",
    description:
      "A refined landing page for a jewelry brand — clean, elegant, and optimized for conversion.",
    categories: ["E-commerce"],
    techStack: ["Nextjs", "TailwindCSS", "TypeScript"],
    buttonLabel: "Show demo",
    href: "https://risingconnectstudio.mg/demos/?demoId=18&article=113",
  },
  {
    id: "6",
    imageUrl: "/app-courses.png",
    title: "Budget Tracker",
    description:
      "A minimal MVP app for managing shopping lists and budgets in real-time with a smooth UX.",
    categories: ["Mobile App"],
    techStack: ["Nextjs", "Laravel", "Mysql", "TypeScript", "Tailwind CSS"],
    buttonLabel: "Show demo",
    href: "https://app.courses.maherydaniel.mg/",
  },
];

const ProjectSection = () => {
  const rectRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rects = rectRefs.current;
    const title = titleRef.current;
    if (!rects.length || !title) return;

    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        endTrigger: ".end",
        start: "top 10%",
        end: "bottom 80%",
        scrub: true,
        pin: true,
        pinType: "fixed",
        markers: false,
      },
    });

    rects.forEach((rect, i) => {
      gsap.set(rect, { scale: 0.85, rotate: i % 2 === 0 ? -5 : 5 });

      gsap.fromTo(
        rect,
        { y: 50, scale: 0.85, rotate: i % 2 === 0 ? -5 : 5 },
        {
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rect,
            start: "top 45%",
            endTrigger: ".end",
            end: "bottom 80%",
            scrub: true,
            pin: true,
            pinSpacing: false,
            pinType: "fixed",
            markers: false,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center gap-20 md:px-12 xl:px-0 mt-28 pt-14 mb-10">
        <header ref={titleRef} className="flex flex-col items-center text-center gap-3 w-fit">
          <h2 className="uppercase text-sm tracking-widest text-yellow font-semibold">
            Selected Work
          </h2>
          <h3 className="text-white text-3xl md:text-5xl font-semibold tracking-tight">
            Featured Projects
          </h3>
          <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
            A curated selection of apps and digital products showcasing precision, clarity, and
            thoughtful design.
          </p>
        </header>

        <div className="flex flex-col gap-20 w-full items-center relative">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              project={proj}
              index={index}
               rectRef={(el) => {
                if (el) rectRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </section>
      <span className="end"></span>
    </>
  );
};

export default ProjectSection;
