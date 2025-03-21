import React, { useEffect, useRef } from "react";
import { setupSmokeEffect } from "./smokeAnimations";

const SmokeEffectBanner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = setupSmokeEffect(canvasRef);
    return cleanup;
  }, []);

  return (
    <div
      className="banner text-white relative flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16"
      style={{
        position: "relative",
        overflow: "hidden",
        opacity: "0.8",
        backgroundImage: "url('https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4df3295094b4aa22edf0b_21.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="text-center z-10 mt-20 sm:mt-32 md:mt-40 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          AN ELEVATED CANNABIS EXPERIENCE
        </h1>
        <p className="text-xs sm:text-sm md:text-base uppercase text-center text-white opacity-90 tracking-wide mx-auto mt-6 sm:mt-10 md:mt-14">
          Experience a whole new level of awesomeness. Experience a whole new level of awesomeness. Experience a whole new level of awesomeness!
        </p>
      </div>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default SmokeEffectBanner;
