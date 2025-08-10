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
import TechIcon from "./TechIcon";
import InfoItem from "./InfoItem";

type Tech = {
  name: string;
  icon: React.ReactNode;
};

const techs: Tech[] = [
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

const infos = [
  { title: "Location", value: "Madagascar" },
  { title: "Experience", value: "1+ Years" },
  { title: "Date of Birth", value: "18 August 2003" },
];

const AboutSection = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4 px-4 xl:px-0">
      {/* Header Name */}
      <div className="flex items-center gap-1 lg:gap-2 uppercase font-bold text-xl lg:text-2xl text-white/80 w-full">
        <h2>mahery</h2>
        <div className="w-2 h-2 rounded-full bg-yellow"></div>
        <h2>daniel</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-0 w-full max-w-6xl">
        {/* Left side: Title + Tech icons */}
        <div className="flex flex-col h-full md:gap-6 gap-4 md:w-1/2">
          <h3 className="text-4xl text-white/90 w-full">
            Junior Developer <br /> Passionate and Motivated.
          </h3>

          <div className="flex items-center justify-start md:gap-2 gap-0 flex-wrap">
            {techs.map((tech) => (
              <TechIcon key={tech.name} tech={tech} />
            ))}
          </div>
        </div>

        {/* Right side: Description + Info */}
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
            {infos.map(({ title, value }) => (
              <InfoItem key={title} title={title} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
