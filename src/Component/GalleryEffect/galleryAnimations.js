import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupGalleryAnimation = (imageRef, containerRef) => {
  gsap.to(imageRef.current, {
    scale: 0.5,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top center",
      end: "center center",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        gsap.to(imageRef.current, {
          scale: 0.5,
          filter: "grayscale(0%)",
          duration: 1.5,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, {
          scale: 1,
          filter: "grayscale(100%)",
          duration: 1.5,
          ease: "power2.out",
        });
      },
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
};
