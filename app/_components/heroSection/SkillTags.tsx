"use client";

interface SkillTagsProps {
  skills: string[];
}

export const SkillTags = ({ skills }: SkillTagsProps) => (
  <div className="flex items-center lg:gap-6 gap-4 uppercase font-bold lg:text-lg text-xs text-white/80">
    {skills.map((skill, i) => (
      <span
        key={skill}
        className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-105"
      >
        <p>{skill}</p>
        {i < skills.length - 1 && <div className="w-2 h-2 rounded-full bg-yellow"></div>}
      </span>
    ))}
  </div>
);
