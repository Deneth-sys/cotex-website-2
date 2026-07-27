import React from 'react';
import DecryptedText from '../reactbits/DecryptedText';
import ShinyText from '../reactbits/ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ccff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#8b5cf6]/10 rounded-full blur-[120px] pointer-events-none" />

      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ccff] mb-4">
        Premium Digital Agency
      </p>

      <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white mb-4">
        <DecryptedText text="COTEX" speed={30} />
      </h1>

      <div className="text-xl sm:text-2xl font-medium mb-4">
        <ShinyText text="Premium IT Solutions & Digital Services" speed={2.5} />
      </div>

      <p className="text-gray-400 max-w-lg mb-8 text-sm md:text-base leading-relaxed">
        We craft cutting-edge digital experiences — from stunning CVs to enterprise software.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <a
          href="#services"
          className="px-8 py-3.5 rounded-full bg-[#00ccff] text-[#050508] font-semibold hover:shadow-[0_0_30px_rgba(0,204,255,0.5)] transition-all"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:border-[#00ccff] hover:bg-[#00ccff]/10 transition-all"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}