import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupSplitScrollAnimation = (headingRef, pupilRefs, containerRef) => {
  if (!headingRef.current) return;
  if (!containerRef.current) return;

  const SplitScrollElements = containerRef.current.querySelectorAll("h2, p, img");
  SplitScrollElements.forEach((el, index) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play reverse play reverse",
          scrub: true, // Enables smooth scrolling effect
          start: "top bottom",
        },
      }
    );
  });

  const words = headingRef.current.children;

  gsap.fromTo(
    words,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    }
  );

  const handleMouseMove = (e) => {
    pupilRefs.current.forEach((pupil) => {
      if (!pupil) return;
      const eye = pupil.parentElement;
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(eyeRect.width / 3, Math.sqrt(deltaX ** 2 + deltaY ** 2));

      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
  };

  window.addEventListener("mousemove", handleMouseMove);
  

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};
