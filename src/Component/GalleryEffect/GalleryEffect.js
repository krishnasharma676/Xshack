import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GalleryEffect = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scale: 0.5, // Scale image down
      duration: 1.5, // Duration of the transition
      ease: "power2.out", // Ease for smooth scaling
      scrollTrigger: {
        trigger: containerRef.current, // The scroll container element
        start: "top center", // When the top of the container reaches the center of the viewport
        end: "center center", // When the center of the container reaches the center of the viewport
        scrub: true, // Make the animation tied to the scroll position
        toggleActions: "play none none reverse", // Reverse the animation when scrolling back up
        onEnter: () => {
          // Pause the animation when the component is in the center
          gsap.to(imageRef.current, {
            scale: 0.5,
            filter: "grayscale(0%)", // Change from grayscale (black and white) to colored
            duration: 1.5,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          // Reset the animation when scrolling back up
          gsap.to(imageRef.current, {
            scale: 1,
            filter: "grayscale(100%)", // Change to grayscale (black and white)
            duration: 1.5,
            ease: "power2.out",
          });
        },
      },
    });

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (

    <div ref={containerRef} className="flex h-screen w-full relative">

    {/* Main Background Image */}
    <div className="absolute inset-0 z-10">
      <img
        ref={imageRef}
        src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670639dbae39c46d0d5b0734_11.avif"
        alt="Main Background Image"
        className="w-full h-full object-cover"
      />
    </div>
  
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1 text-white relative overflow-hidden">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233f07893279d4d563d6_6.avif" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-white">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e125bfc12ceb1feee177_raugraf_a_model_browsing_in_a_canabis_dispensary_3665e24c-432a-4eac-9ada-89df1ef89150-p-800.avif" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
    </div>
  
    <div className="flex-[2] flex flex-col relative">
      <div className="flex-1 text-white relative overflow-hidden">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e14a6d8d681f65bc9c7e_23.avif" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
      <div className="flex-[2] text-white relative overflow-hidden"></div>
      <div className="flex-1 text-white relative overflow-hidden">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4283cac0a73c842e08a3a_16.avif" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
    </div>
  
    <div className="flex-1 flex flex-col relative">
      <div className="flex-1 text-white relative overflow-hidden">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bf9_clear-cannabis-DtOtpCVkuoQ-unsplash.webp" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-white relative overflow-hidden">
        <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash-p-800.png" alt="Image" className="p-1 w-full h-full object-cover" />
      </div>
    </div>
  </div>
  
  );
};

export default GalleryEffect;










// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GalleryEffect = () => {
//   const imageRef = useRef(null);
//   const containerRef = useRef(null);
//   const topLeftRef = useRef(null);
//   const topRightRef = useRef(null);
//   const bottomLeftRef = useRef(null);
//   const bottomLeftRef2 = useRef(null);
//   const bottomRightRef = useRef(null);
//   const bottomRightRef2 = useRef(null);
//   const bottomImage = useRef(null);

//   useEffect(() => {
//     // Animate the main image
//     gsap.to(imageRef.current, {
//       scale: 0.5,
//       duration: 1.5,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Function to animate extra images
//     const animateExtraImage = (ref) => {
//       gsap.to(ref.current, {
//         opacity: 1,
//         scale: 4,
//         duration: 1.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           toggleActions: "play none none reverse",
//         },
//       });
//     };

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "bottom bottom",
//       onEnter: () => {
//         document.body.style.overflow = "hidden";
//         setTimeout(() => {
//           document.body.style.overflow = "auto";
//         }, 1000);
//       },
//     });

//     // Animate all four extra images
//     animateExtraImage(topLeftRef);
//     animateExtraImage(topRightRef);
//     animateExtraImage(bottomLeftRef);
//     animateExtraImage(bottomRightRef);
//     animateExtraImage(bottomLeftRef2);
//     animateExtraImage(bottomRightRef2);
//     animateExtraImage(bottomImage);
//   }, []);

//   return (
//     <div ref={containerRef} className="h-screen  flex justify-center items-center relative overflow-hidden bg-[#1e1e1e]">
//       {/* Main Image */}
//       <img
//         ref={imageRef}
//         src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/670639dbae39c46d0d5b0734_11.avif"
//         alt="Gallery"
//         className="h-screen w-screen object-cover transition-transform duration-700 ease-in-out"
//       />

//       {/* Extra Images in Separate Divs */}
//       <div
//         ref={topLeftRef}
//         className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 scale-0 transition-all duration-700 ease-in-out"
//       >
//         <img
//           src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4283cac0a73c842e08a3a_16.avif"
//           alt="Top Left"
//           className="w-[64px] sm:w-[170px] md:w-[200px] lg:w-[250px] xl:w-[300px] h-[40px] sm:h-[px] max-w-full object-cover"
//         />
//       </div>


//       <div ref={bottomRightRef} className="absolute top-10 right-10 w-[110px] h-[30px] opacity-0 scale-0 transition-all duration-700 ease-in-out">
//         <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e125bfc12ceb1feee177_raugraf_a_model_browsing_in_a_canabis_dispensary_3665e24c-432a-4eac-9ada-89df1ef89150-p-800.avif" alt="Top Right" className="w-32 h-32 object-cover" />
//       </div>

//       <div ref={bottomRightRef2} className="absolute bottom-20 right-10 w-[110px] h-[30px] opacity-0 scale-0 transition-all duration-700 ease-in-out">
//         <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4e14a6d8d681f65bc9c7e_23.avif" alt="Top Right" className="w-32 h-32 object-cover" />
//       </div>

//       <div ref={bottomLeftRef} className="absolute left-10 top-10 w-[110px] h-[30px] opacity-0 scale-0 transition-all duration-700 ease-in-out">
//         <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4233f07893279d4d563d6_6.avif" alt="Top Right" className="w-32 h-32 object-cover" />
//       </div>

//       <div ref={bottomLeftRef2} className="absolute bottom-20 left-10 w-[110px] h-[30px] opacity-0 scale-0 transition-all duration-700 ease-in-out">
//         <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2bf9_clear-cannabis-DtOtpCVkuoQ-unsplash.webp" alt="Top Right" className="w-32 h-32 object-cover" />
//       </div>

//       <div ref={bottomImage} className="absolute h-[40px] w-[200px] bottom-10 left-[60] opacity-0 scale-0 transition-all duration-700 ease-in-out">
//           <img src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c21_grav-4FOQ-3P6Up0-unsplash-p-800.png" alt="Top Left" className="w-full h-full object-cover" />
//       </div>

//     </div>
//   );
// };

// export default GalleryEffect;
