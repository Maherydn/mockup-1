"use client"

import {
  BottomIcon,
  LaravelIcon,
  MySQLIcon,
  NextJsIcon,
  TailwindIcon,
} from "@/app/_assets/icon";
import gsap from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    gsap.to(".balleTop", {
      y: 12, 
      duration: 0.8, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut", 
    });

    gsap.to(".balleBottom", {
      y: -12, 
      duration: 0.8, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut", 
    });
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center gap-10 mb-4 relative">
      <div className="h-fit w-full px-6 flex flex-col items-center justify-center gap-2">
        <p className="text-yellow lg:text-md text-xs font-bold uppercase">
          Available for Freelance
        </p>
        <h2 className="text-center lg:text-6xl text-4xl font-bold text-white/95">
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

      {/* icon */}
      <div className="w-14 h-14 bg-gradient-to-r from-[#323332] to-[#3E403E] absolute top-36 left-24 flex justify-center items-center rounded-lg balleTop ">
        <TailwindIcon />
      </div>
      <div className="w-14 h-14 bg-gradient-to-r from-[#323332] to-[#3E403E] absolute top-36 right-24 flex justify-center items-center rounded-lg balleTop">
        <LaravelIcon />
      </div>
      <div className="w-14 h-14 bg-gradient-to-r from-[#323332] to-[#3E403E] absolute bottom-36 left-24 flex justify-center items-center rounded-lg balleBottom">
        <MySQLIcon />
      </div>
      <div className="w-14 h-14 bg-gradient-to-r from-[#323332] to-[#3E403E] absolute bottom-36 right-24 flex justify-center items-center rounded-lg balleBottom">
        <NextJsIcon />
      </div>
    </section>
  );
};

export default HeroSection;
