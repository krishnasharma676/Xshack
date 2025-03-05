import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FindProduct() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.from(".floating-item", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".floating-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  const images = [
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp",
      name: "Luci",
      description:
        "Luci brings a burst of energy, keeping you refreshed and motivated throughout the day.",
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
      description: "Octane Mint sharpens focus and provides mental clarity for peak performance.",
      mood: [
        { label: "Happy", rating: 2, color: "text-orange-400" },
        { label: "Relaxed", rating: 4, color: "text-red-400" },
        { label: "Euphoric", rating: 5, color: "text-yellow-400" },
      ],
    },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#EDECE8] text-black p-6 md:p-10">
        <h3 className="text-lg md:text-xl font-bold text-center mb-4">UNLOCKING PLEASURE</h3>
        <h1 className="text-2xl md:text-5xl font-bold text-center">FIND A PRODUCT & FIND YOURSELF</h1>
        <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden mt-6 md:mt-10">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
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
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#141B18] text-white p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          {images[activeIndex].name} - Mini Joints
        </h1>
        <p className="text-green-400 text-sm md:text-lg mt-1">THC 22.6%</p>

        {/* Image Stack */}
        <div className="relative w-full flex flex-col items-center mt-6 md:mt-8 mt-[30px]">
          <div className="flex items-end space-x-[-15px] sm:space-x-[-20px] md:space-x-[-30px]">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <img src={image.src} alt={image.name} className="rounded-full w-3/4" />
                <span className="absolute bottom-[-15px] text-xs sm:text-sm">{image.name}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center mt-6 transition-opacity duration-300 px-4 mt-[30px]">
            {images[activeIndex].description}
          </p>

          {/* Mood Indicators */}
          <div className="flex gap-4 mt-[30px]">
            {images[activeIndex].mood.map((moodItem, i) => (
              <div key={i} className="text-center">
                <p className={`${moodItem.color} text-sm md:text-base`}>
                  {"★ ".repeat(moodItem.rating)}
                </p>
                <p className="text-xs">{moodItem.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
