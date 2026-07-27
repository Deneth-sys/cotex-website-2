import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltedCard({ children, className = "" }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Position relative to card center (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate rotation degrees (±20deg range for clear 3D movement)
    const tiltX = (y - 0.5) * -35; 
    const tiltY = (x - 0.5) * 35;  

    setRotateX(tiltX);
    setRotateY(tiltY);
    setGlarePos({ x: x * 100, y: y * 100, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full" style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d16]/90 p-8 backdrop-blur-xl hover:border-[#00ccff]/60 shadow-2xl transition-colors cursor-pointer ${className}`}
      >
        {/* Dynamic Light Glare Overlay */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 204, 255, 0.5), transparent 60%)`,
          }}
        />

        {/* Floating Content Layer */}
        <div style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}