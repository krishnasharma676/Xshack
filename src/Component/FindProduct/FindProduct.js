import { useEffect, useState } from "react";
import { setupScrollAnimations } from "./scrollAnimations";

export default function FindProduct() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const images = [
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp",
      name: "Luci",
      description: "Luci brings a burst of energy, keeping you refreshed throughout the day.",
      mood: [
        { label: "Happy", rating: 4, color: "text-orange-400" },
        { label: "Relaxed", rating: 2, color: "text-red-400" },
        { label: "Euphoric", rating: 3, color: "text-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bce_1683589635-drew_martin___hybrid___be_open___2pk_silo-_2_%201.webp",
      name: "Chamomile",
      description: "Chamomile soothes your senses, perfect for a calm and peaceful evening.",
      mood: [
        { label: "Happy", rating: 3, color: "text-orange-400" },
        { label: "Relaxed", rating: 5, color: "text-red-400" },
        { label: "Euphoric", rating: 2, color: "text-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c03_429436805_f520ef82-c2b7-4c4b-9862-6e6191b0f412-647bb0f3-c5b3-4100-bc2f-9a9a2d083dd0%201.webp",
      name: "Rize",
      description: "Rize uplifts your mood, ideal for creative bursts and productivity.",
      mood: [
        { label: "Happy", rating: 5, color: "text-orange-400" },
        { label: "Relaxed", rating: 3, color: "text-red-400" },
        { label: "Euphoric", rating: 4, color: "text-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0a_429501781_f520ef82-c2b7-4c4b-9862-6e6191b0f412-73b543e9-dd01-4b9a-9c9b-51ba3570b58e%201.webp",
      name: "Octane Mint",
      description: "Octane Mint focus and provides mental clarity for peak performance.",
      mood: [
        { label: "Happy", rating: 2, color: "text-orange-400" },
        { label: "Relaxed", rating: 4, color: "text-red-400" },
        { label: "Euphoric", rating: 5, color: "text-yellow-400" },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row bg-gradient-to-r from-[#f7f7f7] to-[#e3e6f3]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1412] to-[#1e2b26] text-white p-8">
        <h3 className="text-lg md:text-xl font-bold text-center mb-4 text-[#d3d3d3]">UNLOCKING PLEASURE</h3>
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-8 text-white">FIND A PRODUCT & FIND YOURSELF</h1>
        <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden mt-6 md:mt-10 shadow-xl">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500">
            <source
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-[#0f1412] text-white px-6 py-10 flex flex-col justify-center relative overflow-hidden">
        <div className="mb-6 text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold transition-all duration-500">{images[activeIndex].name} - Mini Joints</h1>
          <p className="text-green-400 text-lg mt-1 transition-all duration-500">THC 22.6%</p>
        </div>

        {/* Image Carousel */}
        <div className="flex justify-center items-center gap-6 md:gap-10 mb-6 z-10">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`relative w-24 h-24 rounded-full cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  isActive ? "scale-125 ring-4 ring-green-400 shadow-lg shadow-green-300/20" : "opacity-70 hover:opacity-100"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.name}
                  className="rounded-full w-full h-full object-cover transition-transform duration-300"
                />
                {isActive && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-green-300">
                    {image.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 text-center mt-6 leading-relaxed z-10 px-4 transition-all duration-500">{images[activeIndex].description}</p>

        {/* Mood Ratings */}
        <div className="flex justify-center gap-8 mt-6 z-10">
          {images[activeIndex].mood.map((moodItem, i) => (
            <div key={i} className="text-center">
              <p className={`${moodItem.color} text-lg font-bold transition-all duration-500`}>{"★".repeat(moodItem.rating)}</p>
              <p className="text-sm text-gray-400 mt-1">{moodItem.label}</p>
            </div>
          ))}
        </div>

        {/* Background Glow Effect */}
        <div className="absolute top-[-100px] right-[-80px] w-96 h-96 bg-green-400/20 rounded-full blur-3xl z-0"></div>
      </div>
    </div>
  );
}
