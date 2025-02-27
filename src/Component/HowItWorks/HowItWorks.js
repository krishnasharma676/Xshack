import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
  "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
];

export default function HowItWorks() {
  const borderRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0]);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      borderRef.current,
      { strokeDasharray: "565, 565", strokeDashoffset: 565 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.2 && progress <= 0.4) {
              setCurrentImage(images[0]);
            } else if (progress > 0.4 && progress <= 0.6) {
              setCurrentImage(images[1]);
            } else if (progress > 0.6 && progress <= 0.8) {
              setCurrentImage(images[0]);
            } else if (progress > 0.8) {
              setCurrentImage(images[1]);
            }
          },
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.to(carouselRef.current, {
      x: "-50%",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "+=400",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-between h-screen bg-white overflow-hidden p-10"
    >
      {/* Left: Animated Heading */}
      <div ref={textRef} className="text-black text-left md:w-1/3 opacity-0">
        <h2 className="text-6xl font-bold transition-all duration-700">
          How It Works
        </h2>
        <p className="text-lg mt-4 text-gray-600">
          Follow these steps to understand the process better.
        </p>
      </div>

      {/* Center: Animated Circular Image with Borders */}
      <div className="relative flex items-center justify-center w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
        <svg width="100%" height="100%" viewBox="0 0 220 220" className="absolute">
          {/* Grey Background Circle */}
          <circle
            cx="110"
            cy="110"
            r="90"  // Ensure this matches the green circle's radius
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="4"
            transform="rotate(-90 110 110)" // Rotate for perfect alignment
          />
          {/* Animated Circular Line */}
          <circle
            ref={borderRef}
            cx="110"
            cy="110"
            r="90" // This must match the grey circle
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            strokeDasharray="565, 565"
            strokeLinecap="round"
            transform="rotate(-90 110 110)" // Ensures it starts from the top
          />
        </svg>
        {/* Center Image */}
        <img
          src={currentImage}
          alt="Phone"
          className="relative w-48 md:w-64 z-10 transition-all duration-500"
        />
      </div>

      {/* Right: GSAP Animated Steps */}
      <div className="relative w-full md:w-1/3 overflow-hidden">
        <div ref={carouselRef} className="flex space-x-6">
          <div className="p-6 bg-green-100 rounded-lg shadow-lg w-60 transition-transform duration-500">
            <h3 className="font-bold text-lg">Step 1</h3>
            <p className="text-gray-700">Discover our platform and its features.</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-lg w-60 transition-transform duration-500">
            <h3 className="font-bold text-lg">Step 2</h3>
            <p className="text-gray-700">Connect with the right people and tools.</p>
          </div>
          <div className="p-6 bg-yellow-100 rounded-lg shadow-lg w-60 transition-transform duration-500">
            <h3 className="font-bold text-lg">Step 3</h3>
            <p className="text-gray-700">Use the platform effectively for success.</p>
          </div>
          <div className="p-6 bg-red-100 rounded-lg shadow-lg w-60 transition-transform duration-500">
            <h3 className="font-bold text-lg">Step 4</h3>
            <p className="text-gray-700">Engage and grow your network.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
