import gsap from "gsap";

export const openMenuAnimation = (menu: HTMLDivElement) => {
  gsap.fromTo(
    menu,
    { x: "100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
  );
};

export const closeMenuAnimation = (
  menu: HTMLDivElement,
  onComplete: () => void
) => {
  gsap.to(menu, {
    x: "100%",
    opacity: 0,
    duration: 0.4,
    ease: "power3.in",
    onComplete,
  });
};
