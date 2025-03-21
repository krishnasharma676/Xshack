import { gsap } from "gsap";

const particles = [];

export const setupSmokeEffect = (canvasRef) => {
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

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
  };
};
