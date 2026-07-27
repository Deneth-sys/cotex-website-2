import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Configuration
    const particleCount = 85; // Number of floating nodes
    const connectionDistance = 140; // How close nodes need to be to link up
    const mouseConnectionDistance = 220; // How far the cursor reaches to pull nodes
    let mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Node Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6; // Speed X
        this.vy = (Math.random() - 0.5) * 0.6; // Speed Y
        this.radius = Math.random() * 1.5 + 0.5;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off walls smoothly
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 204, 255, 0.4)'; // Cyan nodes
        ctx.fill();
      }
    }

    // Initialize the network
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Main Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw mathematical lines between nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect Node to Node
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(0, 204, 255, ${opacity * 0.15})`; // Subtle Cyan web
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect Node to Mouse (Interactive highlight)
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseConnectionDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const opacity = 1 - (distMouse / mouseConnectionDistance);
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.4})`; // Vibrant Violet cursor link
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#030306]">
      {/* 1. Ambient Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#00ccff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
      
      {/* 2. Interactive Canvas Network */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full opacity-70" 
      />
      
      {/* 3. Cinematic Vignette (Darkens the edges so UI cards stand out) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030306_100%)] opacity-[0.85]" />
    </div>
  );
}