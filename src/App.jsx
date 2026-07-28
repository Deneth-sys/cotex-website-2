import { useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  useEffect(() => {
    const handleGlobalSmoothScroll = (e) => {
      // Catch any anchor tag or element with a data-scroll attribute starting with '#'
      const targetElementLink = e.target.closest('a[href^="#"], [data-scroll^="#"]');
      if (!targetElementLink) return;

      const targetId = targetElementLink.getAttribute('href') || targetElementLink.getAttribute('data-scroll');
      if (!targetId || targetId === '#') return;

      const destinationElement = document.querySelector(targetId);

      // Prevent instant browser jump
      e.preventDefault();

      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const navbarOffset = 90; // Height offset so content isn't covered by fixed header

      // Calculate target Y coordinate (scrolling to top if target is #hero)
      const targetPosition = (destinationElement && targetId !== '#hero')
        ? destinationElement.getBoundingClientRect().top + startPosition - navbarOffset
        : 0;

      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      const duration = 2200; // 2.2 seconds luxurious glide

      const animation = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Smooth easeInOutQuad curve
        const ease = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    document.addEventListener('click', handleGlobalSmoothScroll);
    return () => document.removeEventListener('click', handleGlobalSmoothScroll);
  }, []);

  return (
    <div className="relative bg-[#030306] text-white min-h-screen selection:bg-[#00ccff] selection:text-[#030306] overflow-x-hidden">
      
      {/* 1. Base Canvas / Particle Background Layer */}
      <Background />

      {/* 2. Vibrant Aurora Glow Layer (Sits above base canvas, below content) */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {/* Top Left Cyan Glow */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#00ccff]/25 blur-[100px] sm:blur-[130px] animate-pulse" 
          style={{ animationDuration: '5s' }} 
        />
        {/* Mid-Right Electric Purple Glow */}
        <div 
          className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#8b5cf6]/25 blur-[100px] sm:blur-[130px] animate-pulse" 
          style={{ animationDuration: '8s', animationDelay: '1s' }} 
        />
        {/* Lower Left Deep Blue Glow */}
        <div 
          className="absolute top-[70%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-[#0055ff]/20 blur-[100px] sm:blur-[130px] animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '2s' }} 
        />
      </div>

      {/* 3. Main Interactive UI Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Process />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}