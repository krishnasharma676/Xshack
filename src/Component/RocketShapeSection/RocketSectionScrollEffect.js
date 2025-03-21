// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, useScroll, useTransform } from 'framer-motion';

// gsap.registerPlugin(ScrollTrigger);

// const RocketSectionScrollEffect = () => {
//     const borderRef = useRef(null);
//     const sectionRef = useRef(null);
//     const contentRef = useRef(null);

//     useEffect(() => {
//         const strokeAnimation = gsap.fromTo(
//             borderRef.current,
//             { strokeDashoffset: 2200 },
//             {
//                 strokeDashoffset: 0,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "bottom bottom",
//                     end: "+=200%",
//                     scrub: 1,
//                     pin: true,
//                     anticipatePin: 1,
//                 },
//             }
//         );

//         const verticalScroll = gsap.to(contentRef.current, {
//             y: "-100%",
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top top",
//                 end: "+=10%",
//                 scrub: 1,
//             },
//         });

//         return () => {
//             strokeAnimation.kill();
//             verticalScroll.kill();
//         };
//     }, []);

//     return (
//         <>
//             <div
//                 ref={sectionRef}
//                 className="w-screen h-screen text-white relative flex items-center justify-center overflow-hidden"
//             >                
//                 <div
//                     className="absolute w-[1700px] h-[47px] border-b transform translate-y-[-20px] translate-x-[5px] rotate-[25deg]"
//                     style={{ borderColor: "#301d25" }}
//                 ></div>

//                 <svg width="150%" height="150%" viewBox="0 0 800 800" className="absolute">
//                     <circle
//                         ref={borderRef}
//                         cx="400"
//                         cy="400"
//                         r="350"
//                         fill="none"
//                         stroke="#301d25"
//                         strokeWidth="2"
//                         strokeDasharray="2200, 2200"
//                         strokeDashoffset="2200"
//                         strokeLinecap="round"
//                         transform="rotate(-90 400 400)"
//                     />
//                 </svg>
//             </div>
//             <div ref={contentRef} className="absolute text-4xl flex flex-col space-y-10 w-screen">
//                 <div className="space-y-20">
//                     <div className="mb-[30px] text-center">
//                         <h1 className="text-4xl md:text-8xl font-bold text-white">SIGN UP</h1>
//                         <motion.div
//                             className="flex flex-col items-center space-y-4"
//                             initial={{ y: 50, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             viewport={{ once: false, amount: 0.2 }}
//                         >
//                             <motion.img
//                                 className="w-[300px]"
//                                 src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17baa87bd3c38ebbcfad_Phone-1.webp"
//                                 initial={{ y: 50, opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.7, ease: "easeOut" }}
//                                 viewport={{ once: false }}
//                             />
//                         </motion.div>
//                     </div>

//                     {/* Third Section */}
//                     <div className="mb-[30px] text-center">
//                         <h1 className="text-4xl md:text-8xl font-bold text-white">PRODUCT</h1>
//                         <motion.div
//                             className="flex flex-col items-center space-y-4"
//                             initial={{ y: 50, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                             viewport={{ once: false, amount: 0.2 }}
//                         >
//                             <motion.img
//                                 className="w-[200px]"
//                                 src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17ba216a480527b6a6d6_top-rip.png"
//                                 initial={{ y: 30, opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.6, ease: "easeOut" }}
//                                 viewport={{ once: false }}
//                             />
//                             <motion.img
//                                 className="w-[300px]"
//                                 src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670503dbd608d95ff656c9b5_66f4dc4dbf8de9c34310ccbf_bag-green-brown-marijuana-is-filled-with-green-brown.avif"
//                                 initial={{ y: 50, opacity: 0 }}
//                                 whileInView={{ y: 0, opacity: 1 }}
//                                 transition={{ duration: 0.7, ease: "easeOut" }}
//                                 viewport={{ once: false }}
//                             />
//                         </motion.div>
//                     </div>
//                 </div>


//             </div>
//         </>
//     );
// };

// export default RocketSectionScrollEffect;


import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const CircleScrollSections = () => {
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
            img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17ba216a480527b6a6d6_top-rip.png",
        },
        {
            title: "FEATURES",
            img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670503dbd608d95ff656c9b5_66f4dc4dbf8de9c34310ccbf_bag-green-brown-marijuana-is-filled-with-green-brown.avif",
        },
        {
            title: "PRICING",
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

export default CircleScrollSections;


