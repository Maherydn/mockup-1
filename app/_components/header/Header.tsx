"use client";
import { useState, useRef, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavDesktop from "./HeaderNavDesktop";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderBurgerButton from "./HeaderBurgerButton";
import { openMenuAnimation, closeMenuAnimation } from "./headerAnimations";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && menuRef.current) openMenuAnimation(menuRef.current);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (menuRef.current) {
      closeMenuAnimation(menuRef.current, () => setIsOpen(false));
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="h-18 lg:w-5xl w-full lg:px-12 px-6 flex items-center justify-between fixed top-0 z-50 bg-gray-900/60 rounded-full mt-1">
        <HeaderLogo />
        <HeaderNavDesktop />
        <HeaderBurgerButton
          isOpen={isOpen}
          toggle={() => (isOpen ? closeMenu() : setIsOpen(true))}
        />
      </header>
      {isOpen && <HeaderNavMobile ref={menuRef} closeMenu={closeMenu} />}
    </>
  );
};

export default Header;
