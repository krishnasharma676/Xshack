import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const RocketSectionScrollEffect = () => {
    const borderRef = useRef(null);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const { scrollYProgress } = useScroll();


    const yLeft = useTransform(scrollYProgress, [0, 2], [-3000, 3000]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-3000, 3000]);

    useEffect(() => {
        // Animate Circle Stroke as per Scroll
        const strokeAnimation = gsap.fromTo(
            borderRef.current,
            { strokeDashoffset: 2200 },
            {
                strokeDashoffset: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "bottom bottom",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );

        // **Change Horizontal Scroll to Vertical Scroll**
        const verticalScroll = gsap.to(contentRef.current, {
            y: "-100%", // Moves content **upward** while scrolling
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                scrub: 1,
            },
        });

        return () => {
            strokeAnimation.kill();
            verticalScroll.kill();
        };
    }, []);

    return (
        <>
            <div
                ref={sectionRef}
                className="w-screen h-screen text-white relative flex items-center justify-center overflow-hidden"
            >
                {/* Diagonal Line */}
                <div
                    className="absolute w-[1700px] h-[47px] border-b transform translate-y-[-20px] translate-x-[5px] rotate-[25deg]"
                    style={{ borderColor: "#301d25" }}
                ></div>


                {/* Enlarged Circular Stroke */}
                <svg width="150%" height="150%" viewBox="0 0 800 800" className="absolute">
                    <circle
                        ref={borderRef}
                        cx="400"
                        cy="400"
                        r="350"
                        fill="none"
                        stroke="#301d25"
                        strokeWidth="2"
                        strokeDasharray="2200, 2200"
                        strokeDashoffset="2200"
                        strokeLinecap="round"
                        transform="rotate(-90 400 400)"
                    />
                </svg>
            </div>
            <div ref={contentRef} className="absolute text-4xl flex flex-col space-y-10 w-screen">
                <div className="space-y-20">
                    {/* Second Section */}
                    <div className="mb-[30px] text-center">
                        <h1 className="text-4xl md:text-8xl font-bold text-white">SIGN UP</h1>
                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.img
                                className="w-[300px]"
                                src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17baa87bd3c38ebbcfad_Phone-1.webp"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: false }}
                            />
                        </motion.div>
                    </div>

                    {/* Third Section */}
                    <div className="mb-[30px] text-center">
                        <h1 className="text-4xl md:text-8xl font-bold text-white">PRODUCT</h1>
                        <motion.div
                            className="flex flex-col items-center space-y-4"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <motion.img
                                className="w-[200px]"
                                src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/660c17ba216a480527b6a6d6_top-rip.png"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: false }}
                            />
                            <motion.img
                                className="w-[300px]"
                                src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670503dbd608d95ff656c9b5_66f4dc4dbf8de9c34310ccbf_bag-green-brown-marijuana-is-filled-with-green-brown.avif"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: false }}
                            />
                        </motion.div>
                    </div>
                    <div className="mb-[30px] text-center">
                        <motion.img
                            src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4ddcd49a9ddbca44b2b69_73392380-7efa-4365-9999-ef57e118056c%20(1)-p-500.avif"
                            alt="Left Image"
                            className="absolute left-10 top-1/2 transform -translate-y-1/2 w-60 h-auto"
                            style={{ y: yLeft }}
                        />


                        {/* Right Image */}
                        <motion.img
                            src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4ddcd49a9ddbca44b2b69_73392380-7efa-4365-9999-ef57e118056c%20(1)-p-500.avif"
                            alt="Right Image"
                            className="absolute right-10 top-1/2 transform -translate-y-1/2 w-60 h-auto"
                            style={{ y: yRight }}
                        />
                    </div>
                </div>


            </div>
        </>
    );
};

export default RocketSectionScrollEffect;
