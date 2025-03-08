import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const textRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Email Text Animation
    gsap.fromTo(
      textRef.current,
      { letterSpacing: "0px", opacity: 0 },
      { letterSpacing: "5px", opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Footer Slide-up Animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Animates when 85% of the footer is in view
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      {/* Decorative SVG Divider */}
      <div className="relative w-full h-[77px]">
        {/* <svg
          className="absolute top-[-76px] left-0 w-full h-[80px]"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="black" d="M0,80 L720,0 L1440,80 L1440,80 L0,80 Z" />
        </svg> */}
      </div>

      {/* Footer Section */}
      <div ref={footerRef} className="w-full bg-black text-white text-center py-20 border-t border-gray-700">
        <p className="text-gray-400 text-sm mb-4">
          Want to learn more? We'd love to hear from you.
        </p>

        {/* Animated Email Text */}
        <h1
          ref={textRef}
          className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-blue-500 tracking-wide"
        >
          INFO@XSHACK.COM
        </h1>

        {/* Footer Links */}
        <div className="mt-6 border-b mb-6 border-gray-700 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-xs px-6">
          <p>© 2023 XSHACK</p>
          <p className="mt-2 sm:mt-0 cursor-pointer hover:text-gray-300 transition duration-300">
            PRIVACY POLICY
          </p>
        </div>
      </div>
    </>
  );
}
