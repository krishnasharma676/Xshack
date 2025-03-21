import { useEffect, useState } from "react";
import { setupScrollAnimations } from "./scrollAnimations";
import clsx from "clsx";

export default function FindProduct() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const images = [
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp",
      name: "Luci",
      description: "Luci brings a burst of energy, keeping you refreshed and motivated throughout the day.",
      mood: [
        { label: "Happy", rating: 4, color: "bg-orange-400" },
        { label: "Relaxed", rating: 2, color: "bg-red-400" },
        { label: "Euphoric", rating: 3, color: "bg-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bce_1683589635-drew_martin___hybrid___be_open___2pk_silo-_2_%201.webp",
      name: "Chamomile",
      description: "Chamomile soothes your senses, perfect for a calm and peaceful evening.",
      mood: [
        { label: "Happy", rating: 3, color: "bg-orange-400" },
        { label: "Relaxed", rating: 5, color: "bg-red-400" },
        { label: "Euphoric", rating: 2, color: "bg-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c03_429436805_f520ef82-c2b7-4c4b-9862-6e6191b0f412-647bb0f3-c5b3-4100-bc2f-9a9a2d083dd0%201.webp",
      name: "Rize",
      description: "Rize uplifts your mood, ideal for creative bursts and productivity.",
      mood: [
        { label: "Happy", rating: 5, color: "bg-orange-400" },
        { label: "Relaxed", rating: 3, color: "bg-red-400" },
        { label: "Euphoric", rating: 4, color: "bg-yellow-400" },
      ],
    },
    {
      src: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0a_429501781_f520ef82-c2b7-4c4b-9862-6e6191b0f412-73b543e9-dd01-4b9a-9c9b-51ba3570b58e%201.webp",
      name: "Octane Mint",
      description: "Octane Mint sharpens focus and provides mental clarity for peak performance.",
      mood: [
        { label: "Happy", rating: 2, color: "bg-orange-400" },
        { label: "Relaxed", rating: 4, color: "bg-red-400" },
        { label: "Euphoric", rating: 5, color: "bg-yellow-400" },
      ],
    },
  ];

  const active = images[activeIndex];

  return (
    <section className="w-full min-h-screen grid md:grid-cols-2 grid-cols-1 bg-black text-white">
      {/* Left Panel */}
      <div className="flex flex-col justify-center items-center bg-[#EDECE8] text-black px-8 py-16">
        <h3 className="text-xl font-semibold mb-2">UNLOCKING PLEASURE</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          FIND A PRODUCT & FIND YOURSELF
        </h1>
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl">
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

      {/* Right Panel */}
      <div className="bg-[#141B18] px-6 py-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{active.name} - Mini Joints</h2>
        <p className="text-green-400 text-sm mb-6">THC 22.6%</p>

        <p className="text-gray-300 text-center max-w-md mb-8">{active.description}</p>

        <div className="flex justify-center gap-6 mb-10">
          {active.mood.map((mood, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-2 rounded-full bg-gray-700 overflow-hidden mb-1">
                <div className={`${mood.color} h-full`} style={{ width: `${mood.rating * 20}%` }}></div>
              </div>
              <span className="text-xs text-gray-400">{mood.label}</span>
            </div>
          ))}
        </div>

        {/* Image Selector */}
        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">
          {images.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={clsx(
                "w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-300",
                {
                  "border-green-400 scale-110 shadow-lg": index === activeIndex,
                  "border-gray-700": index !== activeIndex,
                }
              )}
            >
              <img src={img.src} alt={img.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
