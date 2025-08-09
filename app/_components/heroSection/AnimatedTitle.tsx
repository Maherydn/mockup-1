"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const AnimatedTitle = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const split = new SplitText(titleRef.current, { type: "chars" });

    gsap.set(split.chars, { opacity: 0, y: 0 });

    gsap.to(split.chars, {
      duration: 0.05,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.05,
      onComplete: () => split.revert(),
    });

    return () => split.revert();
  }, []);

  return (
    <h2
      ref={titleRef}
      className="text-center lg:text-6xl text-3xl font-bold text-white/95 leading-snug w-full text-wrap"
      aria-label={`Hey, I’m Daniel. A Creative Developer`}
    >
      Hey, I’m Daniel. <br />A Creative Developer
    </h2>
  );
};

export default AnimatedTitle;
