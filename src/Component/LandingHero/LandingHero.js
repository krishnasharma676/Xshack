import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingHero() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.6 }, // Start slightly zoomed in
      {
        scale: 1, // Zooms out smoothly
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (Covers Entire Div) */}
      <img
        ref={imageRef}
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4283cf41a303dcfc38306_14.avif"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-6">
        <h1
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
        >
          WITH XSHACK, YOU NEVER HAVE TO WORRY ABOUT HAVING A BAD TRIP.
        </h1>

        <button className="bg-[#f3f0ed] text-black text-sm md:text-base px-4 md:px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300 mt-6">
          DOWNLOAD NOW
        </button>
      </div>
    </div>
  );
}
