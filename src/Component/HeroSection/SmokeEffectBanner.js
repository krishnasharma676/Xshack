import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SmokeEffectBanner = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = (x, y) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const particle = {
        x,
        y,
        size: Math.random() * 10 + 10,
        opacity: 1,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
      };
      particles.push(particle);

      gsap.to(particle, {
        opacity: 0,
        size: "+=30",
        duration: 2 + Math.random(),
        ease: "power1.out",
        onComplete: () => {
          particles.splice(particles.indexOf(particle), 1);
        },
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="banner text-white relative flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16" style={{ position: "relative", overflow: "hidden", opacity: "0.8", backgroundImage: "url('https://cdn.prod.website-files.com/65dc57b17286ce9d8bea2bb3/66f4df3295094b4aa22edf0b_21.avif')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
      <div className="text-center z-10 mt-20 sm:mt-32 md:mt-40 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">AN ELEVATED CANNABIS EXPERIENCE</h1>
        <p className="text-xs sm:text-sm md:text-base uppercase text-center text-white opacity-90 tracking-wide mx-auto mt-6 sm:mt-10 md:mt-14">Experience a whole new level of awesomeness. Experience a whole new level of awesomeness. Experience a whole new level of awesomeness!</p>
      </div>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default SmokeEffectBanner;
