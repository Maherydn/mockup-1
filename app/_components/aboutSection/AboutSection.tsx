"use client";

import {
  DockerIcon,
  FigmaIcon,
  GitIcon,
  LaravelIcon,
  LinuxIcon,
  MySQLIcon,
  NextJsIcon,
  PostmanIcon,
  TailwindIcon,
  WordpressIcon,
} from "@/app/_assets/icon";

const AboutSection = () => {
  const techs = [
    { name: "Laravel", icon: <LaravelIcon /> },
    { name: "TailwindCSS", icon: <TailwindIcon /> },
    { name: "Next.js", icon: <NextJsIcon /> },
    { name: "MySQL", icon: <MySQLIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "WordPress", icon: <WordpressIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
  ];

  return (
    <section className="h-full w-full flex flex-col items-center justify-center gap-4 px-4 xl:px-0">
      <div className="flex items-center gap-1 lg:gap-2 uppercase font-bold text-xl lg:text-2xl text-white/80 w-full">
        <h2>mahery</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>daniel</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-0 w-full max-w-6xl">
        <div className="flex flex-col h-full md:gap-6 gap-4 md:w-1/2 ">
          <h3 className="text-4xl text-white/90 w-full">
            Junior Devenoper <br /> Passionate and Motivated.
          </h3>
          <div className="flex items-center justify-start md:gap-2 gap-0 flex-wrap">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="group relative w-14 h-14 flex justify-center items-center rounded-lg transition duration-300 cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {tech.icon}
                </div>

                <span className="absolute bottom-full mb-0 px-2 py-1 text-xs text-white bg-slate-900/60 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 h-fit md:w-1/2 w-full">
          <p className="text-xl text-white/85">
            I am a junior developer dedicated to building modern web
            applications and continuously expanding my skills.
          </p>
          <p className="text-lg text-white/50">
            With a Bachelor’s degree, I am eager to embrace new challenges and
            contribute effectively to development teams.
          </p>

          <div className="flex justify-between w-full flex-wrap gap-4">
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Location
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                Madagascar
              </p>
            </div>
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Experience
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                1+ Years
              </p>
            </div>
            <div className="w-fit -space-y-1.5">
              <h4 className="uppercase text-xs md:text-sm text-yellow">
                Date of Birth
              </h4>
              <p className="text-lg md:text-2xl text-white/95 capitalize">
                18 August 2003{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
