import DecryptedText from '../reactbits/DecryptedText';
import ShinyText from '../reactbits/ShinyText';
import SlideTextButton from '../ui/SlideTextButton';
import { Sparkles, Code, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-32 pb-24 overflow-hidden">
      
      {/* Cyberpunk Grid & Multi-layered Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-[#00ccff]/15 to-[#8b5cf6]/15 rounded-full blur-[160px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-[#00ccff]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#8b5cf6]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Live Telemetry Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mb-8 shadow-[0_0_30px_rgba(0,204,255,0.2)] group hover:border-[#00ccff]/50 transition-all cursor-default"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ccff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ccff]"></span>
        </span>
        <span className="text-xs font-semibold tracking-wider uppercase text-gray-200 font-heading">
          Next-Gen Digital Infrastructure & Architecture
        </span>
        <Sparkles size={14} className="text-[#00ccff]" />
      </motion.div>

      {/* Epic Brand Title with Glow Backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00ccff]/30 to-[#8b5cf6]/30 blur-2xl opacity-50 pointer-events-none" />
        <h1 className="font-logo logo-text-glow text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-[0.18em] pl-[0.18em] relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
          <DecryptedText text="COTEX" speed={25} className="font-logo" />
        </h1>
      </motion.div>

      {/* Subtitle with ShinyText */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 px-2 max-w-2xl"
      >
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-snug">
          <ShinyText 
            text="Architecting Elite Software & Immersive Web Systems" 
            speed={2.5} 
            className="font-bold drop-shadow-[0_0_20px_rgba(0,204,255,0.3)]" 
          />
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-400 max-w-xl mb-10 text-sm sm:text-base md:text-lg leading-relaxed px-4 font-normal"
      >
        We fuse high-performance web engineering with striking visual design to build digital platforms that dominate their industry.
      </motion.p>

      {/* Responsive Slide Buttons with Glowing Aura */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-5 z-10 w-full sm:w-auto px-4 items-center justify-center mb-12"
      >
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#00ccff] to-[#8b5cf6] blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
          <div className="relative">
            <SlideTextButton 
              text="Explore Capabilities" 
              hoverText="View What We Do" 
              href="#services" 
              variant="default" 
            />
          </div>
        </div>
        
        <SlideTextButton 
          text="Initialize Project" 
          hoverText="Let's Talk" 
          href="#contact" 
          variant="ghost" 
        />
      </motion.div>

      {/* Floating Related App Icons */}
      <div className="relative w-full max-w-xl h-32 flex items-center justify-center pointer-events-none z-10">
        {/* Left App Icon: Code */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotateZ: [-6, 6, -6],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 sm:left-16 w-16 h-16 rounded-2xl bg-[#071321]/90 border border-[#00ccff]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(0,204,255,0.3)] flex items-center justify-center text-[#00ccff]"
        >
          <Code size={28} />
        </motion.div>

        {/* Center App Icon: Cpu */}
        <motion.div
          animate={{
            y: [12, -12, 12],
            rotateZ: [4, -4, 4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-20 h-20 rounded-3xl bg-[#120b24]/90 border border-[#8b5cf6]/50 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.35)] flex items-center justify-center text-[#8b5cf6]"
        >
          <Cpu size={34} />
        </motion.div>

        {/* Right App Icon: Database */}
        <motion.div
          animate={{
            y: [-8, 12, -8],
            rotateZ: [-5, 5, -5],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-10 sm:right-16 w-16 h-16 rounded-2xl bg-[#081a15]/90 border border-emerald-500/50 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center text-emerald-400"
        >
          <Database size={28} />
        </motion.div>
      </div>

    </section>
  );
}