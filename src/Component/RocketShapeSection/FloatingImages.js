import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingImages = () => {
  const { scrollYProgress } = useScroll();
  const moveUpDown = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      {/* Center Image */}
      <motion.img
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fc678b9729397e482_4-p-500.avif"
        alt="Main"
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full object-cover"
      />

      {/* Top Right Small Image */}
      <motion.img
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fc678b9729397e482_4-p-500.avif"
        alt="Top Right Small"
        className="absolute top-[-10%] right-[10%] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover"
        style={{ y: moveUpDown }}
      />

      {/* Bottom Right Small Image */}
      <motion.img
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fc678b9729397e482_4-p-500.avif"
        alt="Bottom Right Small"
        className="absolute bottom-[-10%] right-[15%] w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full object-cover"
        style={{ y: moveUpDown }}
      />

      {/* Left Medium Image */}
      <motion.img
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fc678b9729397e482_4-p-500.avif"
        alt="Left Medium"
        className="absolute left-[-15%] bottom-[5%] w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover"
        style={{ y: moveUpDown }}
      />
    </div>
  );
};

export default FloatingImages;