"use client";

import { useState, useRef, useEffect } from "react";
import { MenuBurgerIcon } from "@/app/_assets/icon";
import gsap from "gsap";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Animation GSAP à l'ouverture
  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }

    //enleve scroll si menu mobile open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Fonction fermeture avec animation GSAP vers la droite
  const closeMenu = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="h-18 lg:w-5xl w-full lg:px-12 px-6 flex items-center justify-between fixed top-0 z-50 bg-gray-900/60 rounded-full mt-1">
        <div className="flex justify-around h-14 w-52">
          <div className="w-14 h-14 rounded-full bg-white/80 overflow-hidden">
            <Image
              src="/avatar.png"
              alt="avatar"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col h-16 justify-center">
            <h3 className="text-xl text-white/80">Mahery Daniel</h3>
            <h4 className="text-lg text-white/60">Developper</h4>
          </div>
        </div>

        {/* Menu desktop */}
        <div className="w-fit h-14 lg:flex items-center gap-10 hidden px-2">
          <ul className="w-96 h-full flex justify-around items-center text-xl capitalize text-white/60 hover:text-white/80 duration-300 cursor-pointer">
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
          <a href="#contact">
            <button className="bg-yellow h-12 w-36 text-xl rounded-xl capitalize cursor-pointer hover:bg-yellow-300 duration-300">
              say hello
            </button>
          </a>
        </div>

        {/* Menu burger mobile */}
        <div
          className="lg:hidden block w-fit h-fit z-50"
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
            } else {
              closeMenu();
            }
          }}
        >
          <MenuBurgerIcon isOpen={isOpen} />
        </div>
      </header>

      {/* Menu mobile plein écran avec fond transparent */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full h-screen bg-gray-900/80 backdrop-blur-md p-10 flex flex-col items-center justify-center gap-10 text-white z-40 lg:hidden capitalize"
        >
          <a
            href="#hero"
            onClick={closeMenu}
            className="text-2xl hover:text-yellow-300"
          >
            home
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-2xl hover:text-yellow-300"
          >
            projects
          </a>
          <a
            href="#services"
            onClick={closeMenu}
            className="text-2xl hover:text-yellow-300"
          >
            services
          </a>
          <a href="#contact">
            <button
              className="mt-4 bg-yellow/80 h-12 w-40 text-lg rounded-md capitalize hover:bg-yellow"
              onClick={closeMenu}
            >
              say hello
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
