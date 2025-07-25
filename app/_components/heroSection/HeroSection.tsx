import { BottomIcon } from "@/app/_assets/icon";

const HeroSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center gap-10 mb-4">
      <div className="h-fit w-full px-6 flex flex-col items-center justify-center gap-2">
        <p className="text-yellow lg:text-md text-xs font-bold uppercase">
          Available for Freelance
        </p>
        <h2 className="text-center lg:text-8xl text-4xl font-bold text-white/95">
          Hey, I’m Brian.
          <br />A Creative Developer
        </h2>
        <div className="flex items-center lg:gap-6 gap-4 uppercase font-bold lg:text-lg text-xs text-white/80">
          <p>design</p>
          <div className="w-2 h-2 rounded-full bg-yellow"></div>
          <p>developpement</p>
          <div className="w-2 h-2 rounded-full bg-yellow"></div>
          <p>webflow</p>
        </div>
      </div>
      <button className="capitalize  bg-yellow lg:h-14 lg:w-64 h-10 w-52 rounded-lg flex justify-evenly items-center hover:bg-yellow-300/50 duration-300 cursor-pointer">
        <p className="lg:text-xl text-lg text-slate-600 font-bold">
          see my portfolio
        </p>
        <div>
          <BottomIcon />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
