import AnimatedTitle from "./AnimatedTitle";
import { DownloadButton } from "./DonwloadButton";
import { SkillTags } from "./SkillTags";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="h-full w-full flex flex-col items-center justify-center gap-10 mb-4 relative"
    >
      <div className="h-fit w-full px-6 flex flex-col items-center justify-center gap-2 max-w-3xl mx-auto">
        <p className="text-yellow lg:text-md text-xs font-bold uppercase">
          Available for Freelance
        </p>
        <AnimatedTitle />
        <SkillTags skills={["design", "developpement", "webflow"]} />
      </div>
      <DownloadButton />
    </div>
  );
};

export default HeroSection;
