import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RocketSectionScrollEffect = () => {
  const bgCircle = useRef(null);
  const scrollSection = useRef(null);

  useEffect(() => {
    gsap.to(bgCircle.current, {
      scale: 5,
      scrollTrigger: {
        trigger: scrollSection.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="relative h-[200vh] flex items-center justify-center overflow-hidden">
      {/* Expanding Circle */}
      <div
        ref={bgCircle}
        className="absolute w-64 h-64 bg-gray-900 rounded-full"
      ></div>

      {/* Scrollable Section */}
      <motion.div
        ref={scrollSection}
        className="relative z-10 bg-white p-8 shadow-xl rounded-lg w-96 h-96 overflow-y-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Scrollable Content</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vulputate fringilla justo, et vulputate erat facilisis ut. Integer in
          orci non lectus bibendum pellentesque.
        </p>
        <p className="mt-4 text-gray-700">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus.
        </p>
      </motion.div>
    </div>
  );
};

export default RocketSectionScrollEffect;
