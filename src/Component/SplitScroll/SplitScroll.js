import React, { useEffect, useRef } from "react";
import { setupSplitScrollAnimation } from "./splitScrollAnimation";
import { Heading75 } from "../Headings/Heading75";

const SplitScroll = () => {
  const headingRef = useRef(null);
  const pupilRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = setupSplitScrollAnimation(headingRef, pupilRefs, containerRef);
    return () => {
      cleanup && cleanup();
    };
  }, []);

  return (
    <section className="relative w-full">
      <div className="flex">
        {/* Left Side with Darker Gradient Background */}
        <div className="w-1/2 h-screen flex flex-col justify-center items-center px-10 sticky top-0 bg-[#000]">
          {/* Split Heading into Words */}
          <h1
            ref={headingRef}
            className="text-white text-7xl font-bold mb-10 flex space-x-2 transition-all duration-300 ease-in-out"
          >
            {"WHO WE ARE".split(" ").map((word, index) => (
              <span key={index} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-yellow-400 to-red-500">
                {word}
              </span>
            ))}
          </h1>

          {/* Bigger AI Eyes Below Heading */}
          <div className="flex gap-12 mt-8">
            {[0, 1].map((_, index) => (
              <div key={index} className="eye w-36 h-36 bg-white rounded-full flex justify-center items-center relative shadow-lg">
                <div ref={(el) => (pupilRefs.current[index] = el)} className="pupil w-12 h-12 bg-black rounded-full absolute transition-all duration-75"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 ml-auto bg-[#eae8e5] flex flex-col p-[4.17em_2.08em] relative" ref={containerRef}>
          <Heading75>A customized product selection</Heading75>
          <p className="text-xsm text-gray-700 mt-5 w-[342px]">
            Finally allows users to purchase from their local dispensary - but the value add doesn't end there.
          </p>
          <div className="relative w-full h-[450px]">
            <img
              className="absolute top-[9.5rem] left-[3.5rem] border-4 border-white w-[120px] h-[120px] rounded-full object-cover z-[99]"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bc6_alejo-reinoso-XTy860zgUkc-unsplash%202.webp"
              alt="Plant"
            />
            <img
              className="absolute top-[60px] left-[100px] w-[180px] h-[180px] rounded-full object-cover border-4 border-white"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fa82ba5e3369363b8_3-p-500.avif"
              alt="Person"
            />
            <img
              className="absolute top-[130px] right-[10px] w-[300px] h-[300px] rounded-full object-cover border-4 border-white"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fa82ba5e3369363b8_3-p-500.avif"
              alt="Jars"
            />
          </div>
          <Heading75 className="mt-[50px]">
            XShack is a trusted one-stop-shop for all cannabis-related activities for users and dispensaries alike.
          </Heading75>
          <p className="text-xsm text-gray-700 mt-5 w-[342px]">
            From recreational to medical, we make it easy to access cannabis and find the high life you’re searching for.
          </p>
          <div className="w-full mt-[40px]">
            <img 
              className="w-[300px] rounded-t-[20px]" 
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e96b5d1ce3b83752600c_Rewards-p-500.avif" 
            />
          </div>
          <Heading75 className="mt-[70px] w-[500px]">
            We add value to the marijuana journey from the very first trip.
          </Heading75>
          <p className="text-xsm text-gray-700 mt-5 w-[342px]">
            Whether you’re new to cannabis or an experienced user, our app offers a range of benefits for everyone: from personalized shopping and real-time navigation, to supply updates and loyalty programs.
          </p>
          <div className="relative w-full h-[450px]">
            <img
              className="absolute top-[-100px] right-[6rem] w-[120px] h-[120px] rounded-full object-cover"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bc6_alejo-reinoso-XTy860zgUkc-unsplash%202.webp"
              alt="Plant"
            />
            <img
              className="absolute top-[-30px] right-[2rem] w-[140px] h-[140px] rounded-full object-cover"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233fa82ba5e3369363b8_3-p-500.avif"
              alt="Person"
            />
            <img
              className="absolute top-[160px] right-[180px] w-[250px] object-cover"
              src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c26_Xshack%2520Phone-p-500.png"
              alt="Jars"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitScroll;
