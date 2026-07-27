import SpotlightCard from '../reactbits/SpotlightCard';
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
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-[#00ccff]">Methodology</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">A Structured Workflow</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <SpotlightCard key={idx} spotlightColor="rgba(0, 204, 255, 0.15)">
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00ccff]/10 border border-[#00ccff]/30 flex items-center justify-center text-[#00ccff]">
                  <IconComponent size={22} />
                </div>
                <span className="text-2xl font-bold font-mono text-white/20">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}