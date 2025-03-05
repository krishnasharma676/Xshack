import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
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
            // Circle animation with ScrollTrigger
            gsap.fromTo(
                borderRef.current,
                { strokeDashoffset: 1570 },
                {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${containerRef.current.offsetHeight}px`, // Dynamically calculate scroll trigger end
                        scrub: 1,
                        pin: true,
                        onUpdate: (self) => {
                            const progress = self.progress * (totalImages - 1);
                            const index = Math.min(Math.round(progress), totalImages - 1);
                            setActiveImage(index);

                            // Synchronize horizontal scroll for images with active index
                            gsap.to(rightSectionRef.current, {
                                x: `-${index * 100}%`, // Shift the images horizontally
                                duration: 0.5,
                                ease: "power2.out",
                            });
                        },
                    },
                }
            );
        }, containerRef); // Bind GSAP to containerRef for cleanup

        return () => ctx.revert(); // Cleanup function for GSAP
    }, [totalImages]);

    return (
        <div
            ref={containerRef}
            className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-10 relative"
        >
            {/* Left Section - Heading */}
            <div className="relative w-full lg:w-1/3 flex flex-col justify-center items-start">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900">
                    HOW IT <span className="text-green-500">WORKS</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">Discover the process step by step.</p>
            </div>

            {/* Middle Section - Circular Progress with Image */}
            <div className="flex items-center justify-center w-full lg:w-1/3 z-10 ">
                <svg width="100%" height="100%" viewBox="0 0 600 600" className="absolute">
                    <circle
                        cx="300"
                        cy="300"
                        r="250"
                        fill="none"
                        stroke="#e5e7eb"
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
                        strokeWidth="2"
                        strokeDasharray="1570, 1570"
                        strokeDashoffset="1570"
                        strokeLinecap="round"
                        transform="rotate(-90 300 300)"
                    />
                </svg>
                <img
                    src={images[activeImage]}
                    alt={`Step ${activeImage + 1}`}
                    className="absolute w-36 md:w-48 lg:w-56 xl:w-64 transition-opacity duration-500"
                />
            </div>

            {/* Right Section - Horizontal Scroll */}
            <div className="w-full lg:w-1/3 flex items-center relative mx-auto overflow-hidden">
                <div
                    ref={rightSectionRef}
                    className="flex space-x-4 transition-transform duration-500 ease-out"
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Step ${index + 1}`}
                            className={`w-64 h-64 object-cover rounded-lg shadow-md transition-all duration-500 ${
                                index === activeImage ? "opacity-100 scale-110" : "opacity-50 scale-90"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
