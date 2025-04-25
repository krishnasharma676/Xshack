import React, { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  const showcaseItems = ['Innovative', 'Powerful', 'Smooth', 'Smart', 'Next-Gen'];

  return (
    <div className="navbar fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-transparent">
      {/* Bold Name with Border */}
      <div className="text-white text-3xl font-extrabold relative">
        X<span className="text-green-400">shack</span>
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-green-400 rounded-full w-full"></div>
      </div>

      {/* Showcase Items with Borders */}
      <div className="hidden md:flex space-x-6 mx-auto bg-white/10 backdrop-blur-md px-6 py-2 rounded-xl shadow-md">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-gray-300 font-semibold transition-all duration-300 tracking-wide cursor-default hover:scale-105 relative group"
          >
            {/* Border Design */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-xl"></div>
            {item}
          </div>
        ))}
      </div>

      {/* Sign Up Button */}
      <button className="hidden md:block bg-[#f3f0ed] text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
        SIGN UP
      </button>
    </div>
  );
};

export default Navbar;
