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
      const targetElementLink = e.target.closest('a[href^="#"], [data-scroll^="#"]');
      if (!targetElementLink) return;

      const targetId = targetElementLink.getAttribute('href') || targetElementLink.getAttribute('data-scroll');
      if (!targetId || targetId === '#') return;

      const destinationElement = document.querySelector(targetId);
      e.preventDefault();

      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const navbarOffset = 80; // Offset for floating capsule header

      const targetPosition = (destinationElement && targetId !== '#hero')
        ? destinationElement.getBoundingClientRect().top + startPosition - navbarOffset
        : 0;

      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      const duration = 500; // 500ms snappy & visible glide

      const animation = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Ease-Out Cubic: Snappy start, silky smooth deceleration landing
        const ease = 1 - Math.pow(1 - progress, 3);

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

      {/* 2. Optimized Mobile Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#00ccff]/20 blur-[80px] sm:blur-[130px]" />
        <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#8b5cf6]/20 blur-[80px] sm:blur-[130px]" />
        <div className="absolute top-[70%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-[#0055ff]/15 blur-[80px] sm:blur-[130px]" />
      </div>

      {/* 3. Main Content */}
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