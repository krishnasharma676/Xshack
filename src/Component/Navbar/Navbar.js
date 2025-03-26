import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(".mobile-menu", { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  const showcaseItems = ['Innovative', 'Powerful', 'Smooth', 'Smart', 'Next-Gen'];

  return (
    <div className="navbar fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
      {/* Brand Name */}
      <div className="text-white text-2xl font-bold">X Shack</div>

      {/* Desktop Showcase Items */}
      <div className="hidden md:flex space-x-6 mx-auto bg-white/10 backdrop-blur-md px-6 py-2 rounded-xl shadow-md">
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-gray-300 hover:text-white font-semibold transition-all duration-300 tracking-wide cursor-default hover:scale-105"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Sign Up Button */}
      <button className="hidden md:block bg-[#f3f0ed] text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
        SIGN UP
      </button>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-screen w-2/3 bg-gray-900 p-6 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="text-white mb-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-6 mt-10">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="text-white text-lg font-semibold hover:text-gray-400 transition duration-300 border-b border-gray-600 pb-2 cursor-default"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Sign Up Button */}
        <button className="mt-6 bg-[#f3f0ed] text-black px-6 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300 w-full">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Navbar;
