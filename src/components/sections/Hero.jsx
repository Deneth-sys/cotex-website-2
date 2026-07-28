import React from 'react';
import DecryptedText from '../reactbits/DecryptedText';
import ShinyText from '../reactbits/ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#00ccff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Tagline Badge */}
      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#00ccff] mb-4">
        Premium Digital Agency
      </p>

      {/* Brand Title with DecryptedText */}
      <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white mb-4">
        <DecryptedText text="COTEX" speed={30} />
      </h1>

      {/* FIX: High-Contrast Visible Subtitle with ShinyText */}
      <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-gray-100 mb-4 px-2 max-w-2xl leading-snug">
        <ShinyText 
          text="Premium IT Solutions & Digital Services" 
          speed={2.5} 
          className="text-gray-100 font-semibold drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
        />
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-lg mb-8 text-xs sm:text-sm md:text-base leading-relaxed px-2">
        We craft cutting-edge digital experiences — from stunning CVs to enterprise software.
      </p>

      {/* Responsive Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto px-4">
        <a
          href="#services"
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#00ccff] text-[#050508] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,204,255,0.6)] hover:bg-[#33d6ff] transition-all text-center"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:border-[#00ccff] hover:bg-[#00ccff]/10 transition-all text-center"
        >
          Start a Project
        </a>
      </div>

    </section>
  );
}