"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { BottomIcon } from "@/app/_assets/icon";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Split le texte en mots et caractères
    const split = new SplitText(titleRef.current, { type: "chars" });

    // On cache tous les caractères avant l'animation
    gsap.set(split.chars, { opacity: 0, y: 0 });

    // Animation "typewriter" : chaque lettre apparaît avec un petit délai
    gsap.to(split.chars, {
      duration: 0.05,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.05,
      onComplete: () => {
        // Optionnel : revert le split si tu veux nettoyer
        split.revert();
      },
    });

    // Cleanup au démontage du composant
    return () => {
      split.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-full w-full flex flex-col items-center justify-center gap-10 mb-4 relative"
    >
      <div className="h-fit w-full px-6 flex flex-col items-center justify-center gap-2 max-w-3xl mx-auto">
        <p className="text-yellow lg:text-md text-xs font-bold uppercase">
          Available for Freelance
        </p>
        <h2
          ref={titleRef}
          className="text-center lg:text-6xl text-4xl font-bold text-white/95 leading-snug"
          aria-label="Hey, I’m Brian. A Creative Developer"
        >
          Hey, I’m Brian.
          <br />A Creative Developer
        </h2>
        {/* Le reste sans animation */}
        <div className="flex items-center lg:gap-6 gap-4 uppercase font-bold lg:text-lg text-xs text-white/80">
          <p className="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-105 cursor-pointer">
            design
          </p>
          <div className="w-2 h-2 rounded-full bg-yellow"></div>

          <p className="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-105 cursor-pointer">
            developpement
          </p>
          <div className="w-2 h-2 rounded-full bg-yellow"></div>

          <p className="transition-all duration-300 hover:text-white hover:-translate-y-1 hover:scale-105 cursor-pointer">
            webflow
          </p>
        </div>
      </div>
      <button className="capitalize bg-yellow lg:h-14 lg:w-64 h-10 w-52 rounded-lg flex justify-evenly items-center hover:bg-yellow-300/50 duration-300 cursor-pointer mx-auto">
        <p className="lg:text-xl text-lg text-slate-600 font-bold">
          donwload my CV
        </p>
        <div>
          <BottomIcon />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
