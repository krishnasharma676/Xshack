import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HowItWorks = () => {
  const { scrollYProgress } = useScroll(); // Detects scroll progress
  const circleFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Fills the circle based on scroll
  const [sectionCompleted, setSectionCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0.95) setSectionCompleted(true); // Once filled, trigger transition
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="bg-[#f3f0ed] min-h-screen flex flex-col items-center justify-center px-10 py-20 relative overflow-hidden">
      {/* Background Circle Animation */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gray-300 opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute w-full h-full bg-green-500 rounded-full"
          style={{
            clipPath: "circle(50% at 50% 50%)",
            scaleY: circleFill, // Scroll fills the circle
            transformOrigin: "bottom",
          }}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Side - Title */}
        <h2 className="text-6xl font-bold text-black uppercase leading-tight">
          How It Works
        </h2>

        {/* Center - Mobile Mockup */}
        <div className="relative flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670639dbae39c46d0d5b0734_11.avif"
            alt="Mobile Mockup"
            className="w-[300px] md:w-[350px] shadow-lg"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <h3 className="text-2xl font-semibold text-black">
            Get clear, fast insights on your customers.
          </h3>
          <p className="text-gray-700 mt-4">
            XShack makes it easy to understand what your customers are looking
            for. More insights = more revenue.
          </p>
          <div className="flex mt-6 gap-2">
            <span className="h-[2px] w-10 bg-green-500"></span>
            <span className="h-[2px] w-6 bg-green-500"></span>
            <span className="h-[2px] w-6 bg-green-500"></span>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-10 flex space-x-4">
        <button className="bg-black text-white px-6 py-3 rounded-md font-semibold">
          For Dispensaries
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-md border border-gray-300">
          For Customers
        </button>
      </div>

      {/* Transition to Next Section */}
      {sectionCompleted && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#f3f0ed] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-black">Next Section 👇</h1>
        </motion.div>
      )}
    </section>
  );
};

export default HowItWorks;
