import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitScroll = () => {
  const headingRef = useRef(null);
  const pupilRefs = useRef([]);

  useEffect(() => {
    const words = headingRef.current.children; // Get all words

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

    // Mouse tracking for eyes
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full">
      <div className="flex">
        {/* Left Side with Darker Gradient Background */}
        <div
          className="w-1/2 h-screen flex flex-col justify-center items-center px-10 sticky top-0 
          bg-gradient-to-r from-black to-gray-800"
        >
          {/* Split Heading into Words */}
          <h1
            ref={headingRef}
            className="text-white text-7xl font-bold mb-10 flex space-x-2 transition-all duration-300 ease-in-out"
          >
            {"WHO WE ARE".split(" ").map((word, index) => (
              <span key={index} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-red-500">
                {word}
              </span>
            ))}
          </h1>

          {/* Bigger AI Eyes Below Heading */}
          <div className="flex gap-12 mt-8">
            {[0, 1].map((_, index) => (
              <div key={index} className="eye w-36 h-36 bg-white rounded-full flex justify-center items-center relative shadow-lg">
                <div ref={(el) => (pupilRefs.current[index] = el)} className="pupil w-12 h-12 bg-black rounded-full absolute transition-all duration-75"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 ml-auto bg-[#f5f3ef]">
          <div className="flex flex-col space-y-20 py-10">
            {["herbs", "nature", "health", "plants"].map((item, index) => (
              <div key={index} className="h-screen flex flex-col justify-center items-center">
                <img
                  src={`https://source.unsplash.com/400x400/?${item}`}
                  className="w-48 h-48 rounded-full shadow-lg mb-6"
                  alt={item}
                />
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Title {index + 1}</h2>
                <p className="text-lg text-gray-700 text-center max-w-md">
                  This is a placeholder description for {item}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitScroll;
