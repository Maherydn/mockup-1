"use client";
import { forwardRef } from "react";

interface Props {
  closeMenu: () => void;
}

const HeaderNavMobile = forwardRef<HTMLDivElement, Props>(({ closeMenu }, ref) => (
  <div
    ref={ref}
    className="fixed top-0 right-0 w-full h-screen bg-gray-900/80 backdrop-blur-md p-10 flex flex-col items-center justify-center gap-10 text-white z-40 lg:hidden capitalize"
  >
    <a href="#hero" onClick={closeMenu} className="text-2xl hover:text-yellow-300">home</a>
    <a href="#projects" onClick={closeMenu} className="text-2xl hover:text-yellow-300">projects</a>
    <a href="#services" onClick={closeMenu} className="text-2xl hover:text-yellow-300">services</a>
    <a href="#contact">
      <button className="mt-4 bg-yellow/80 h-12 w-40 text-lg rounded-md capitalize hover:bg-yellow" onClick={closeMenu}>
        say hello
      </button>
    </a>
  </div>
));

HeaderNavMobile.displayName = "HeaderNavMobile";
export default HeaderNavMobile;
