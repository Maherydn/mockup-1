"use client";
import { useEffect } from "react";
import Loader from "./Loader";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useLoadedStore } from "../_store/useLoaded";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loaded, setLoaded } = useLoadedStore();

  // Bloquer le scroll tant que le loader est actif
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Nettoyage au démontage
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <div
        className={`transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <main className="h-fit lg:w-5xl w-full overflow-x-hidden px-2 ">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
