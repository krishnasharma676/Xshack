import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupScrollAnimations = () => {
  gsap.from(".floating-item", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".floating-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
};
