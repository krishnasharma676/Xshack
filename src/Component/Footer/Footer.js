import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactSection() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { letterSpacing: "0px", opacity: 0 },
      { letterSpacing: "5px", opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <>
    <div className="relative w-full bg-white h-[77px]">
        <svg
          className="absolute top-0 left-0 w-full h-[80px]"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="black" d="M0,80 L720,0 L1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
    <div className="w-full bg-black text-white text-center py-20 border-b border-gray-700">
      <p className="text-gray-400 text-sm mb-4">
        Want to learn more? We'd love to hear from you.
      </p>
      <h1
        ref={textRef}
        className="text-4xl md:text-5xl font-bold text-blue-500 tracking-wide"
      >
        INFO@XSHACK.COM
      </h1>
      <div className="mt-6 flex justify-between text-gray-500 text-xs px-6">
        <p>© 2023 XSHACK</p>
        <p>PRIVACY POLICY</p>
      </div>
    </div>
    </>
  );
}
