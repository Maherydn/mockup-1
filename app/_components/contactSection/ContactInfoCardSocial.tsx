"use client";

import { GithubIcon, InstaIcon, LinkedinIcon } from "@/app/_assets/icon";

const ContactInfoCardSocial = () => {
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

  return (
    <div className="h-1/2 w-full min-w-0 min-h-0 flex flex-col justify-between px-4 py-6 rounded-lg bg-gradient-to-r from-[#323332] to-[#3E403E] gap-4">
      <h3 className="uppercase text-yellow text-xs font-semibold">
        contact with me
      </h3>
      <div className="flex w-full gap-4">
        {socials.map((social) => (
          <div
            key={social.name}
            className="relative group cursor-pointer "
            onClick={() => window.open(social.url, "_blank")}
          >
            <p className="duration-500 transition-transform transform-style-preserve-3d hover:rotate-y-360 h-full w-full">
              {social.icon}
            </p>
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-slate-900/80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {social.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCardSocial;
