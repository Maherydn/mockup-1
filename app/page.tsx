"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "./_components/aboutSection/AboutSection";
import ContactSection from "./_components/contactSection/ContactSection";
import HeroSection from "./_components/heroSection/HeroSection";
import ProjectSection from "./_components/projectSection/ProjectSection";
import ServiceSection from "./_components/serviceSection/ServiceSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

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
    <div className="h-full w-full">
      
      {/* home section */}
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
      
      <ProjectSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
