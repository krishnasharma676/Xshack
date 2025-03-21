import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const borderRef = useRef(null);
    const containerRef = useRef(null);
    const rightSectionRef = useRef(null);
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
        "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
        "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
        "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670503dbd608d95ff656c9b5_66f4dc4dbf8de9c34310ccbf_bag-green-brown-marijuana-is-filled-with-green-brown.avif",
        "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
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
                            const progress = self.progress * (totalImages - 1);
                            const index = Math.min(Math.round(progress), totalImages - 1);
                            setActiveImage(index);

                            gsap.to(rightSectionRef.current, {
                                x: `-${index * 100}%`,
                                duration: 0.5,
                                ease: "power2.out",
                            });
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
            className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 sm:px-10 py-16 relative overflow-hidden"
        >
            {/* Left Section - Heading */}
            <div className="w-full lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0 z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    HOW IT <span className="text-green-400">WORKS</span>
                </h2>
                <p className="mt-4 text-gray-400 text-base sm:text-lg">
                    Discover the process, step by step, in an immersive and visual experience.
                </p>
            </div>

            {/* Middle Section - Circular Progress */}
            <div className="relative w-full lg:w-1/3 flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px]">
                <svg width="100%" height="100%" viewBox="0 0 600 600" className="absolute">
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
                        strokeWidth="3"
                        strokeDasharray="1570, 1570"
                        strokeDashoffset="1570"
                        strokeLinecap="round"
                        transform="rotate(-90 300 300)"
                    />
                </svg>
                <img
                    src={images[activeImage]}
                    alt={`Step ${activeImage + 1}`}
                    className="absolute w-28 sm:w-36 md:w-44 lg:w-52 transition-opacity duration-500"
                />
            </div>

            {/* Right Section - Image Carousel */}
            <div className="w-full lg:w-1/3 flex items-center justify-center overflow-hidden">
                <div
                    ref={rightSectionRef}
                    className="flex space-x-6 transition-transform duration-500 ease-out"
                >
                    {images.slice(1).map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Step ${index + 1}`}
                            className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-xl transition-all duration-500 ${
                                index === activeImage
                                    ? "opacity-100 scale-110"
                                    : "opacity-40 scale-90"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
