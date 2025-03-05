import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, MeshBasicMaterial, Points } from "three";

function MouseParticles() {
  const [mouse, setMouse] = useState([0, 0]);
  const particlesRef = useRef(null);

  // Handle mouse movement
  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse([x, y]);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create particle system
  const createParticles = () => {
    const particleCount = 500;
    const geometry = new BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }

    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

    const material = new MeshBasicMaterial({
      color: 0xFFFFFF,
      size: 0.1,
      transparent: true,
    });

    return new Points(geometry, material);
  };

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.05 + mouse[0] * 0.2;
        positions[i + 1] += (Math.random() - 0.5) * 0.05 + mouse[1] * 0.2;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive ref={particlesRef} object={createParticles()} />
    </Canvas>
  );
}

export default MouseParticles;
