import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const RocketSectionScrollEffect = () => {
    const borderRef = useRef(null);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            title: "SIGN UP",
            img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17baa87bd3c38ebbcfad_Phone-1.webp",
        },
        {
            title: "PRODUCT",
            img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4ddcd49a9ddbca44b2b69_73392380-7efa-4365-9999-ef57e118056c%20(1)-p-500.avif",
        },
        {
            title: "FEATURES",
            img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670503dbd608d95ff656c9b5_66f4dc4dbf8de9c34310ccbf_bag-green-brown-marijuana-is-filled-with-green-brown.avif",
        },
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Animate the circular stroke
            gsap.fromTo(
                borderRef.current,
                { strokeDashoffset: 2200 }, // Start hidden
                {
                    strokeDashoffset: 0, // Fully drawn
                    ease: "power2.out",
                    duration: 3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=300%",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        onUpdate: (self) => {
                            let progress = self.progress * (sections.length - 1);
                            let index = Math.round(progress);
                            setActiveIndex(index);
                        },
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
             {/* Top-left ➝ Bottom-right */}
            <div className="absolute w-[2000px] h-[200.5%] border border-[#543241] rotate-45 origin-top-left top-0 left-0"></div>

            {/* Top-right ➝ Bottom-left */}
            <div className="absolute w-[2000px] h-[200.5%] border border-[#543241] -rotate-45 origin-top-right top-0 right-0"></div>

            {/* Bottom-left ➝ Top-right */}
            <div className="absolute w-[2000px] h-[200.5%] border border-[#543241] -rotate-45 origin-bottom-left bottom-0 left-0"></div>

            {/* Bottom-right ➝ Top-left */}
            <div className="absolute w-[2000px] h-[200.5%] border border-[#543241] rotate-45 origin-bottom-right bottom-0 right-0"></div>


            {/* Circular Stroke */}
            <svg width="100%" height="150%" viewBox="0 0 800 800" className="absolute overflow-hidden">
                <circle
                    ref={borderRef}
                    cx="400"
                    cy="400"
                    r="350"
                    fill="none"
                    stroke="#543241"
                    strokeWidth="1"
                    strokeDasharray="2200, 2200"
                    strokeDashoffset="2200"
                    strokeLinecap="round"
                    transform="rotate(-90 400 400)"
                />
            </svg>

            {/* Content Inside the Circle */}
            <div ref={contentRef} className="absolute text-center text-white">
                <motion.h1
                    className="text-2xl md:text-6xl font-bold"
                    key={sections[activeIndex].title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {sections[activeIndex].title}
                </motion.h1>
                <motion.img
                    className="w-[300px] mt-4"
                    key={sections[activeIndex].img}
                    src={sections[activeIndex].img}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default RocketSectionScrollEffect;


