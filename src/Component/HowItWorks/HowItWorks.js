// import { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//     "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
//     "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
// ];

// export default function HowItWorks() {
//     const borderRef = useRef(null);
//     const sectionRef = useRef(null);
//     const textRef = useRef(null);
//     const carouselRef = useRef(null);
//     const [currentImage, setCurrentImage] = useState(images[0]);

//     useGSAP(() => {
//         gsap.fromTo(
//             textRef.current,
//             { opacity: 0, x: -50 },
//             {
//                 opacity: 1,
//                 x: 0,
//                 duration: 1.2,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: textRef.current,
//                     start: "top 80%",
//                     toggleActions: "play none none reverse",
//                 },
//             }
//         );
//     }, []);

//     useGSAP(() => {
//         gsap.fromTo(
//             borderRef.current,
//             { strokeDasharray: "880, 880", strokeDashoffset: 880 },
//             {
//                 strokeDashoffset: 0,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "bottom bottom",
//                     end: "bottom top",
//                     scrub: 1,
//                     pin: true,
//                     onUpdate: (self) => {
//                         const progress = self.progress;
//                         if (progress > 0.2 && progress <= 0.4) {
//                             setCurrentImage(images[0]);
//                         } else if (progress > 0.4 && progress <= 0.6) {
//                             setCurrentImage(images[1]);
//                         } else if (progress > 0.6 && progress <= 0.8) {
//                             setCurrentImage(images[0]);
//                         } else if (progress > 0.8) {
//                             setCurrentImage(images[1]);
//                         }
//                     },
//                 },
//             }
//         );
//     }, []);

//     useGSAP(() => {
//         gsap.to(carouselRef.current, {
//             x: "-50%",
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "center center",
//                 end: "+=400",
//                 scrub: 1,
//             },
//         });
//     }, []);

//     return (
//         <div
//             ref={sectionRef}
//             className="relative flex flex-col lg:flex-row items-center justify-between h-screen bg-white overflow-hidden p-6 md:p-10"
//         >
//             {/* Left: Animated Heading */}
//             <div
//                 ref={textRef}
//                 className="text-black text-left w-full lg:w-1/3 opacity-0"
//             >
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-700">
//                     How It Works
//                 </h2>
//             </div>

//             <div className="relative flex items-center justify-center w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[1000px] h-auto">
//                 <svg
//                     width="100%"
//                     height="100%"
//                     viewBox="0 0 260 260"
//                     className="absolute"
//                 >
//                     <circle
//                         cx="130"
//                         cy="130"
//                         r="110"
//                         fill="none"
//                         stroke="#e5e7eb"
//                         strokeWidth="1"
//                         transform="rotate(-90 130 130)"
//                     />
//                     <circle
//                         ref={borderRef}
//                         cx="130"
//                         cy="130"
//                         r="110"
//                         fill="none"
//                         stroke="#22c55e"
//                         strokeWidth="1"
//                         strokeDasharray="880, 880"
//                         strokeLinecap="round"
//                         transform="rotate(-90 130 130)"
//                     />
//                     <circle cx="130" cy="20" r="2" fill="#22c55e" />
//                     <circle cx="240" cy="130" r="2" fill="#22c55e" />
//                     <circle cx="130" cy="240" r="2" fill="#22c55e" />
//                     <circle cx="20" cy="130" r="2" fill="#22c55e" /> {/* Left */}
//                 </svg>

//                 <img
//                     src={currentImage}
//                     alt="Phone"
//                     className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 z-10 transition-all duration-500"
//                 />
//             </div>

//             {/* Right: GSAP Animated Steps */}
//             <div className="relative w-full lg:w-1/3 overflow-hidden mt-6 lg:mt-0">
//                 <div ref={carouselRef} className="flex space-x-6">
//                     <div className="p-4 sm:p-6 bg-green-100 rounded-lg shadow-lg w-48 sm:w-60 transition-transform duration-500">
//                         <h3 className="font-bold text-base sm:text-lg">Step 1</h3>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             Discover our platform and its features.
//                         </p>
//                     </div>
//                     <div className="p-4 sm:p-6 bg-blue-100 rounded-lg shadow-lg w-48 sm:w-60 transition-transform duration-500">
//                         <h3 className="font-bold text-base sm:text-lg">Step 2</h3>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             Connect with the right people and tools.
//                         </p>
//                     </div>
//                     <div className="p-4 sm:p-6 bg-yellow-100 rounded-lg shadow-lg w-48 sm:w-60 transition-transform duration-500">
//                         <h3 className="font-bold text-base sm:text-lg">Step 3</h3>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             Use the platform effectively for success.
//                         </p>
//                     </div>
//                     <div className="p-4 sm:p-6 bg-red-100 rounded-lg shadow-lg w-48 sm:w-60 transition-transform duration-500">
//                         <h3 className="font-bold text-base sm:text-lg">Step 4</h3>
//                         <p className="text-gray-700 text-sm sm:text-base">
//                             Engage and grow your network.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
    const borderRef = useRef(null);
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
        "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbEMu6tTEKq-kvyY8_WjD8uxkt1RElBt7A&s",
        "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c0f_Group%252036%2520(1)-p-500.png",
        "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Background-Image.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vbEMu6tTEKq-kvyY8_WjD8uxkt1RElBt7A&s",
    ];

    const totalImages = images.length;
    const totalDots = totalImages;

    useEffect(() => {
        const totalDuration = totalDots * 2; // Each dot takes 2 seconds

        // Animate Circular Progress
        gsap.fromTo(
            borderRef.current,
            { strokeDashoffset: 1570 },
            {
                strokeDashoffset: 0,
                duration: totalDuration,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalDuration * 100}px`,
                    scrub: 1,
                    pin: true,
                    onUpdate: (self) => {
                        const progress = self.progress * totalDots;
                        const index = Math.floor(progress);
                        setActiveImage(index < totalImages ? index : totalImages - 1);
                    },
                },
            }
        );

        // Animate the position of images on scroll (move towards mobile view)
        gsap.utils.toArray(imagesRef.current).forEach((img, index) => {
            gsap.fromTo(
                img,
                { x: 0, scale: 1 },
                {
                    x: -300, // Adjust to your preference for mobile view
                    scale: 0.8, // Shrink images for mobile view
                    scrollTrigger: {
                        trigger: img,
                        start: "top center",
                        end: "bottom top",
                        scrub: true,
                        onUpdate: (self) => {
                            if (self.progress > 0.5) {
                                setActiveImage(index);
                            }
                        },
                    },
                }
            );
        });

        // Create the circular dots to track progress
        gsap.utils.toArray(borderRef.current.querySelectorAll('circle')).forEach((dot, index) => {
            const angle = (index / totalDots) * 360;
            const radians = (angle * Math.PI) / 180;
            const x = 300 + 250 * Math.cos(radians);
            const y = 300 + 250 * Math.sin(radians);

            gsap.fromTo(
                dot,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${totalDuration * 100}px`,
                        scrub: true,
                        onUpdate: (self) => {
                            const progress = self.progress * totalDots;
                            const index = Math.floor(progress);
                            setActiveImage(index);
                        },
                    },
                }
            );
        });
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-10 relative">
            {/* Left Section - Heading */}
            <div className="relative w-full lg:w-1/3 flex flex-col justify-center items-start">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900">
                    HOW IT <span className="text-green-500">WORKS</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Discover the process step by step.
                </p>
            </div>

            {/* Middle Section - Circular Progress with Image */}
            <div className="flex items-center justify-center w-full lg:w-1/3">
                <svg width="100%" height="100%" viewBox="0 0 600 600" className="absolute">
                    {/* Background Circle */}
                    <circle cx="300" cy="300" r="250" fill="none" stroke="#e5e7eb" strokeWidth="2" transform="rotate(-90 300 300)" />
                    
                    {/* Animated Green Progress Circle */}
                    <circle ref={borderRef} cx="300" cy="300" r="250" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="1570, 1570" strokeDashoffset="1570" strokeLinecap="round" transform="rotate(-90 300 300)" />
                    
                    {/* Dots Around Circle */}
                    {[...Array(totalDots)].map((_, index) => {
                        const angle = (index / totalDots) * 360;
                        const radians = (angle * Math.PI) / 180;
                        const x = 300 + 250 * Math.cos(radians);
                        const y = 300 + 250 * Math.sin(radians);
                        return <circle key={index} cx={x} cy={y} r="5" fill="#22c55e" />;
                    })}
                </svg>

                {/* Changing Image */}
                <img
                    src={images[activeImage]}
                    alt={`Step ${activeImage + 1}`}
                    className="absolute w-36 md:w-48 lg:w-56 xl:w-64 transition-opacity duration-500"
                />
            </div>

            {/* Right Section - Centered Images with Horizontal Overflow */}
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center overflow-x-hidden h-96">
                <div className="flex space-x-4">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            ref={(el) => (imagesRef.current[index] = el)}
                            src={src}
                            alt={`Step ${index + 1}`}
                            className={`w-24 h-24 object-cover rounded-lg shadow-md transition-all duration-500 transform ${
                                activeImage === index
                                    ? "scale-110 opacity-100 translate-x-0 z-10" // Active image on top with z-index
                                    : "scale-75 opacity-30 translate-x-10 z-0" // Non-active images behind with z-index
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

