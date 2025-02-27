import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Luci", img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp" },
  { name: "Chamomile", img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp" },
  { name: "Rize", img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp" },
  { name: "Octane Mint", img: "https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2c02_1695152527-hh-dream-queen%201.webp" }
];

export default function FindProduct() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(".circle-item", {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear"
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white">
      {/* Floating Video Background */}
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/65dc57b17286ce9d8bea2be8_floating-transcode.webm" type="video/webm" />
        </video>
      </div>
      
      {/* Rotating Product Images */}
      <div ref={containerRef} className="relative w-[500px] h-[500px] flex items-center justify-center">
        {products.map((product, index) => (
          <div key={index} className={`circle-item absolute w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md`} style={{ transform: `rotate(${index * (360 / products.length)}deg) translate(200px) rotate(-${index * (360 / products.length)}deg)` }}>
            <img src={product.img} alt={product.name} className="w-20 h-20 object-cover rounded-full" />
            <p className="absolute bottom-[-20px] text-xs text-center w-full">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
