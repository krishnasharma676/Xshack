import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FindProduct() {
  useEffect(() => {

    gsap.from(".floating-item", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".floating-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 h-full flex flex-col items-center justify-center bg-[#EDECE8] text-black">
        <h3 className="text-1xl font-bold text-center mb-[50px]">UNLOCKING PLEASURE</h3>
        <h1 className="text-5xl font-bold text-center">FIND A PRODUCT & FIND YOURSELF</h1>
        <div className=" w-[100px]  h-[100px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden circle-item mt-[60px]">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.mp4" type="video/mp4" />
            <source src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.webm" type="video/webm" />
          </video>
        </div>
      </div>


      {/* Right Section */}
    <div className="w-1/2 h-full flex flex-col items-center justify-center bg-[#141B18] text-white relative px-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">Rize Cannabis - Mini Joints</h1>
      <p className="text-green-400 text-lg mt-1">THC 22.6%</p>

      {/* Floating Circles */}
      <div className="relative w-full h-[300px] mt-8 flex justify-center">
        <div className="absolute left-[-40px] bottom-10 w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src="https://via.placeholder.com/80" alt="Luci" className="rounded-full" />
          <span className="absolute bottom-[-20px] text-xs">Luci</span>
        </div>
        <div className="absolute left-10 bottom-5 w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src="https://via.placeholder.com/90" alt="Chamomile" className="rounded-full" />
          <span className="absolute bottom-[-20px] text-xs">Chamomile</span>
        </div>
        <div className="absolute left-24 bottom-0 w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src="https://via.placeholder.com/100" alt="Rize" className="rounded-full" />
          <span className="absolute bottom-[-20px] text-xs">Rize</span>
        </div>
        <div className="absolute left-40 top-5 w-36 h-36 rounded-full bg-white flex items-center justify-center shadow-md">
          <img src="https://via.placeholder.com/110" alt="Octane Mint" className="rounded-full" />
          <span className="absolute bottom-[-20px] text-xs">Octane Mint</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 text-center mt-8 px-6">
        Cultivated meticulously with attention and dedication, our flowers cater to all your moods, providing moments of tranquility, concentration, and happiness.
      </p>

      {/* Mood Indicators */}
      <div className="flex gap-6 mt-4">
        <div className="text-center">
          <p className="text-orange-400">★ ★ ★ ★</p>
          <p className="text-xs">Happy</p>
        </div>
        <div className="text-center">
          <p className="text-red-400">★ ★ ★</p>
          <p className="text-xs">Relaxed</p>
        </div>
        <div className="text-center">
          <p className="text-yellow-400">★ ★ ★</p>
          <p className="text-xs">Euphoric</p>
        </div>
      </div>
    </div>

    </div>
  );
}
