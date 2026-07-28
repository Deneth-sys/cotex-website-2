import { Search, Palette, Code2, Rocket } from 'lucide-react';

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
    <section id="process" className="pt-36 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Header Badge & Title */}
      <div className="text-center mb-16 space-y-3">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block">
          Methodology
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
          A Structured Workflow
        </h2>
      </div>

      {/* Grid matching Services.jsx */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {steps.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={idx}
              className="liquid-glass liquid-glass-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between h-full"
            >
              {/* Top Specular Edge Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500" />

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  {/* Liquid Glass Icon Puck */}
                  <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center text-[#00ccff] group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={22} />
                  </div>
                  {/* Step Counter Pill */}
                  <span className="liquid-glass px-3 py-1 rounded-full text-xs font-mono font-bold text-[#00ccff]/70 border border-white/10">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00ccff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}