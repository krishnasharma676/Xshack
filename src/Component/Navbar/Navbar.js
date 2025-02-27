import React, { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="navbar fixed top-0 left-0 w-full flex justify-between items-center px-6 py-5 z-50">
      {/* Nav Links Container */}
      <div className="flex space-x-6 mx-auto px-8 py-3 bg-white/10 backdrop-blur-md rounded-full">
        <a href="#" className="text-gray-300 hover:text-white text-sm">
          ABOUT US
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-sm">
          BENEFITS
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-sm font-bold">
          XSCHAK
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-sm">
          HOW IT WORKS
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-sm">
          APP
        </a>
      </div>

      {/* Sign Up Button */}
      <button className="bg-[#f3f0ed] text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
        SIGN UP
      </button>
    </div>
  );
};

export default Navbar;
