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
    <div className="relative bg-[#030306] text-white min-h-screen selection:bg-[#00ccff] selection:text-[#030306]">
      {/* Liquid Mesh & Film Grain Background */}
      <Background />

      {/* Main UI Sections */}
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