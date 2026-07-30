import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltedCard from '../reactbits/TiltedCard';

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    desc: "We analyze project requirements, define scope parameters, and align on core strategic objectives."
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Prototyping",
    desc: "Our team crafts responsive visual frameworks and user experience models tailored to target audiences."
  },
  {
    icon: Code2,
    step: "03",
    title: "Engineering & QA",
    desc: "We write maintainable, high-performance code and conduct rigorous testing across all target platforms."
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deployment & Support",
    desc: "Your solution is successfully deployed with comprehensive handover documentation and post-launch maintenance."
  },
];

export default function Process() {
  return (
    <section id="process" className="pt-36 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative">
      {/* Header Badge & Title */}
      <div className="text-center mb-20 space-y-3">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block shadow-[0_0_15px_rgba(0,204,255,0.2)]">
          Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
          A Structured <span className="text-[#00ccff]">Workflow</span>
        </h2>
      </div>

      {/* Grid Container with Integrated Pipeline Connector */}
      <div className="relative">
        
        {/* Glowing Horizontal Pipeline Track (Desktop Only) */}
        <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#00ccff]/50 to-transparent z-0 pointer-events-none">
          {/* Animated data flow pulse along the track */}
          <motion.div 
            animate={{ x: ['0%', '100%'], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00ccff] to-transparent shadow-[0_0_12px_#00ccff]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <TiltedCard
                key={idx}
                maxTilt={10}
                scale={1.03}
                perspective={1000}
                className="bg-transparent border-none shadow-none w-full h-full"
              >
                {/* Added min-h-[340px] to enforce equal uniform heights regardless of content */}
                <div className="liquid-glass liquid-glass-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col w-full h-full min-h-[340px] xl:min-h-[360px]">
                  
                  {/* Top Specular Edge Highlight */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500" />

                  {/* Top Section (Icon & Pill) */}
                  <div className="flex justify-between items-center mb-8 relative">
                    <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center text-[#00ccff] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,204,255,0.4)] transition-all duration-300">
                      <IconComponent size={22} />
                    </div>

                    {/* Step Number Pill */}
                    <span className="liquid-glass px-3 py-1 rounded-full text-xs font-mono font-bold text-[#00ccff] border border-white/10 shadow-[0_0_10px_rgba(0,204,255,0.15)]">
                      {item.step}
                    </span>
                  </div>

                  {/* Bottom Section (Text) */}
                  <div className="flex flex-col flex-grow">
                    {/* min-h-[3.5rem] ensures 1-line titles match 2-line titles perfectly */}
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00ccff] transition-colors min-h-[3.5rem] flex items-start">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </TiltedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}