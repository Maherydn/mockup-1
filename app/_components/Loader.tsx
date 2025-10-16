"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progressRefValue = progressRef.current;
    let p = 0;

    // démarre immédiatement
    setProgress(1);

    // GSAP ticker pour une progression fluide
    const ticker = gsap.ticker.add(() => {
      p += 1.5; // ajuste la vitesse ici (1.5 = rapide)
      setProgress(Math.min(Math.round(p), 100));

      if (p >= 100) {
        // retire le ticker et fade-out
        gsap.ticker.remove(ticker);
        gsap.to(progressRefValue, {
          opacity: 0,
          duration: 0.5,
          onComplete,
        });
      }
    });

    return () => gsap.ticker.remove(ticker);
  }, [onComplete]);

  return (
    <div
      ref={progressRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
    >
      <div className="text-6xl font-bold">{progress}%</div>

      <div className="mt-4 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
