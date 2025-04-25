import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const borderRef = useRef(null);
    const containerRef = useRef(null);
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "https://solguruz.com/_next/image/?url=https%3A%2F%2Fassets.solguruz.com%2Fcasestudy%2Fleafbis%2Fcannabis-delivery-app-categories-screen-of-customer-app.webp&w=750&q=75",
        "https://solguruz.com/_next/image/?url=https%3A%2F%2Fassets.solguruz.com%2Fcasestudy%2Fleafbis%2Fcannabis-delivery-app-categories-screen-of-customer-app.webp&w=750&q=75",
        "https://solguruz.com/_next/image/?url=https%3A%2F%2Fassets.solguruz.com%2Fcasestudy%2Fleafbis%2Fcannabis-delivery-app-categories-screen-of-customer-app.webp&w=750&q=75",
        "https://solguruz.com/_next/image/?url=https%3A%2F%2Fassets.solguruz.com%2Fcasestudy%2Fleafbis%2Fcannabis-delivery-app-categories-screen-of-customer-app.webp&w=750&q=75",
        "https://solguruz.com/_next/image/?url=https%3A%2F%2Fassets.solguruz.com%2Fcasestudy%2Fleafbis%2Fcannabis-delivery-app-categories-screen-of-customer-app.webp&w=750&q=75",
    ];

    const steps = [
        "Browse Products",
        "Add to Cart",
        "Secure Checkout",
        "Track Order",
        "Receive Item",
    ];

    const totalImages = images.length;

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                borderRef.current,
                { strokeDashoffset: 1570 },
                {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${containerRef.current.offsetHeight}px`,
                        scrub: 1,
                        pin: true,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            const index = Math.min(Math.floor(progress * totalImages), totalImages - 1);
                            setActiveImage(index);
                        },
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [totalImages]);

    return (
        <div
            ref={containerRef}
            className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white px-6 sm:px-10 py-16 relative overflow-hidden"
        >
            {/* Left Section - Heading */}
            <motion.div
                className="w-full lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    HOW IT <span className="text-green-400">WORKS</span>
                </h2>
                <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-md">
                    Discover the process, step by step, in an immersive and visual experience.
                </p>
            </motion.div>

            {/* Middle Section - Circular Progress */}
            <div className="relative w-full lg:w-1/3 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
                <svg width="100%" height="100%" viewBox="0 0 600 600" className="absolute drop-shadow-xl">
                    <circle
                        cx="300"
                        cy="300"
                        r="250"
                        fill="none"
                        stroke="#333"
                        strokeWidth="2"
                        transform="rotate(-90 300 300)"
                    />
                    <circle
                        ref={borderRef}
                        cx="300"
                        cy="300"
                        r="250"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="4"
                        strokeDasharray="1570, 1570"
                        strokeDashoffset="1570"
                        strokeLinecap="round"
                        transform="rotate(-90 300 300)"
                        className="drop-shadow-[0_0_12px_#22c55e]"
                    />
                </svg>
                <motion.img
                    key={activeImage}
                    src={images[activeImage]}
                    alt={`Step ${activeImage + 1}`}
                    className="absolute w-28 sm:w-36 md:w-44 lg:w-52 transition-opacity duration-500 drop-shadow-lg"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Right Section - Vertical Steps */}
            <div className="w-full lg:w-1/3 flex flex-col items-start justify-center space-y-6 mt-10 lg:mt-0">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex items-center space-x-4 transition-all duration-300 ${
                            index === activeImage ? "text-green-400 scale-105" : "text-gray-400"
                        }`}
                    >
                        <div
                            className={`w-4 h-4 rounded-full border-2 ${
                                index === activeImage ? "bg-green-400 border-green-400" : "border-gray-500"
                            }`}
                        />
                        <p className="text-base sm:text-lg font-medium">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
