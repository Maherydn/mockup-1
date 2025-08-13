"use client";

import { GithubIcon, InstaIcon, LinkedinIcon } from "@/app/_assets/icon";

const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/mahery-daniel-96b711307/",
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
    url: "https://github.com/Maherydn",
  },
  {
    name: "Instagram",
    icon: <InstaIcon />,
    url: "https://www.instagram.com/maherydaniel/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-24 flex items-center justify-between px-4 xl:px-0 mt-14 md:mt-0">
      <p className="text-xl text-white/50">&copy; 2025 Mahery Daniel</p>
      <div className="flex gap-4">
        {socials.map(({ name, icon, url }) => (
          <div
            key={name}
            className="cursor-pointer"
            onClick={() => window.open(url, "_blank")}
            title={name}
          >
            {icon}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
