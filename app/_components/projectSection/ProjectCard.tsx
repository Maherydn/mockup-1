"use client";

import Image from "next/image";
import React from "react";

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

interface ProjectCardProps {
  project: Project;
  index: number;
  rectRef: (el: HTMLDivElement | null) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, rectRef }) => {
  return (
    <article
      ref={rectRef}
      className={`rect flex flex-col md:flex-row items-center bg-neutral-950/70 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md w-full h-[500px] md:h-[300px] ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full md:w-2/5 h-64 md:h-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority={index < 2}
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-3/5 px-6 md:px-10 py-6 text-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="bg-yellow/10 text-yellow px-3 py-1 rounded-full text-xs uppercase tracking-wide font-medium"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech,index) => (
            <span
              key={index}
              className="bg-white/5 text-white/80 border border-white/10 px-3 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-yellow mt-2 hover:text-yellow/80 transition-colors"
        >
          {project.buttonLabel} →
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
