"use client"

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "./aboutSection/AboutSection";
import HeroSection from "./heroSection/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500", // durée du scroll
          scrub: true,
          pin: true,
        },
      });

      tl.to(heroRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        zIndex: 0,
        ease: "power2.out",
      }).fromTo(
        aboutRef.current,
        { opacity: 0, scale: 0.6 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          zIndex: 10,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // home section
    <section ref={sectionRef} className="relative h-screen w-full">
      <div
        ref={heroRef}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <HeroSection />
      </div>

      <div
        ref={aboutRef}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-0"
      >
        <AboutSection />
      </div>
    </section>
  );
};

export default HomeSection;
