import { GithubIcon, InstaIcon, LinkedinIcon } from "@/app/_assets/icon";

const Footer = () => {
  return (
    <footer className="w-full h-24 flex items-center justify-between px-4 md:px-0 mt-6 md:mt-0">
      <p className="text-xl text-white/50">&copy; 2025 Brian Santos</p>
      <div className="flex gap-4">
        <LinkedinIcon />
        <GithubIcon />
        <InstaIcon />
      </div>
    </footer>
  );
};

export default Footer;
