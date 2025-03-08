import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingImages from "./FloatingImages";

const RocketShapeSection = () => {
  const { scrollYProgress } = useScroll();

  // Smooth floating effect
  const moveUpDown = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div className="relative w-full">
      {/* Rocket Tip Section */}
      {/* <div className="relative w-full bg-white h-[77px]">
        <svg
          className="absolute top-0 left-0 w-full h-[80px]"
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="black" d="M0,80 L720,0 L1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-1xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 mt-2">SHOP YOUR WAY.</h1>
        <h2 className="text-1xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 mt-2">GROW YOUR BUSINESS.</h2>
        <h2 className="text-1xl md:text-4xl lg:text-5xl font-extrabold text-orange-500 mt-2">MEET YOUR NEW CANNABIS WINGMAN.</h2>
        <p className="text-sm md:text-sm lg:text-sm text-gray-400 mt-4 max-w-2xl">
          We partner with the best local dispensaries to offer better, smarter access to cannabis.
          And a lot more revenue for dispensaries.
        </p>
        <FloatingImages />
      </div>

    </div>
  );
};

export default RocketShapeSection;
