"use client";

import { useEffect, useRef } from "react";
import { useLoadedStore } from "@/app/_store/useLoaded";

const titles = ["Developer", "Designer"];

const AnimatedTitle = () => {
  const changingRef = useRef<HTMLSpanElement>(null);
  const { loaded } = useLoadedStore(); // récupère l'état global loaded

  useEffect(() => {
    if (!loaded || !changingRef.current) return; // n'exécute que si loaded = true

    let current = 0;

    const typeText = (text: string) => {
      const chars = text.split("");
      let index = 0;

      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (!changingRef.current) return;

          changingRef.current.textContent = chars.slice(0, index + 1).join("");
          index++;
          if (index === chars.length) {
            clearInterval(interval);
            setTimeout(resolve, 1500); // pause prolongée avant effacement
          }
        }, 100); // vitesse de frappe
      });
    };

    const deleteText = () => {
      return new Promise<void>((resolve) => {
        const interval = setInterval(() => {
          if (!changingRef.current) return;

          const content = changingRef.current.textContent || "";
          changingRef.current.textContent = content.slice(0, content.length - 1);
          if (content.length === 0) {
            clearInterval(interval);
            setTimeout(resolve, 300); // petite pause avant le prochain mot
          }
        }, 50); // vitesse de suppression
      });
    };

    const animate = async () => {
      while (true) {
        const text = titles[current];
        await typeText(text);
        await deleteText();
        current = (current + 1) % titles.length;
      }
    };

    animate();
  }, [loaded]);

  return (
    <h2 className="text-center lg:text-6xl text-3xl font-bold text-white/95 leading-snug w-full text-wrap">
      Hey, I’m Daniel. <br />
      A Creative <span ref={changingRef}></span>
      <span className="inline-block w-1 lg:h-12 h-6 bg-white ml-1 animate-blink"></span>
    </h2>
  );
};

export default AnimatedTitle;
