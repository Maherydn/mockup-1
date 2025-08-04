"use client"

import { MenuBurgerIcon } from "@/app/_assets/icon";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    // Créer l'animation pour l'élément .header
    const showAnim = gsap.from('.header', { 
      y: -100,   
      paused: true, 
      duration: 0.3, 
      scrub: 1, 
    }).progress(1); // Commence l'animation inversée

    // Utilisation de ScrollTrigger sans spécifier un trigger
    ScrollTrigger.create({
      start: "top top",  
      end: "bottom bottom",
      scrub: 1,       // L'animation est lissée et suivie par le défilement
      onUpdate: (self) => {
        // Vérifie la direction du défilement
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse(); 
        }
      }
    });

  }, []);
  return (
    <header className=" h-18 lg:w-5xl w-full lg:px-12 px-6 flex items-center justify-between  fixed top-0 z-20 bg-gray-900/60 rounded-full mt-1 header">
      <div className="flex justify-around h-14 w-52 ">
        <div className="w-14 h-full bg-slate-200 rounded-lg">
          {/* <img src="#" alt="profil" /> */}
        </div>
        <div className="flex flex-col h-16 justify-center">
          <h3 className="text-xl text-white/80">Brian Santos</h3>
          <h4 className="text-lg text-white/60">Developper</h4>
        </div>
      </div>
      <div className="w-fit h-14 lg:flex items-center gap-10 hidden px-2">
        <ul className="w-96 h-full flex justify-around items-center text-xl capitalize text-white/60 hover:text-white/80 duration-300 cursor-pointer ">
          <li>
            <a href="#hero">home</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
        </ul>
        <button className="bg-yellow h-12 w-36 text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300">
          say hello
        </button>
      </div>
      <div className="lg:hidden block w-fit h-fit">
          <MenuBurgerIcon/>
      </div>
    </header>
  );
};

export default Header;
