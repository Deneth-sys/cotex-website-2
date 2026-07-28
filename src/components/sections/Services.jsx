import RotatingText from '../reactbits/RotatingText';
import { Code, FileText, Cpu, Layout, PenTool, ArrowRight, ShieldCheck } from 'lucide-react';

const serviceList = [
  {
    icon: <Code size={22} className="text-[#00ccff]" />,
    title: "Web Development",
    description: "Blazing fast, responsive websites and web apps built with modern stacks."
  },
  {
    icon: <Layout size={22} className="text-[#00ccff]" />,
    title: "UI & UX Design",
    description: "Intuitive, visually stunning interfaces designed for optimal engagement."
  },
  {
    icon: <Cpu size={22} className="text-[#00ccff]" />,
    title: "Custom Softwares",
    description: "Tailor-made software solutions engineered to scale business workflows."
  },
  {
    icon: <FileText size={22} className="text-[#00ccff]" />,
    title: "CV Designing",
    description: "ATS-optimized, modern resumes that get you noticed and hired."
  },
  {
    icon: <PenTool size={22} className="text-[#00ccff]" />,
    title: "Assignment Writing",
    description: "Top-tier academic research and professional technical writing services."
  }
];

const rotatingCapabilities = [
  "Web Development",
  "UI & UX Design",
  "Custom Softwares",
  "Executive CVs",
  "Technical Research"
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-32 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00ccff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block">
            What We Do
          </span>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight leading-snug sm:leading-tight px-2">
            Engineered Excellence in{' '}
            <span className="text-[#00ccff] drop-shadow-[0_0_20px_rgba(0,204,255,0.4)] inline-flex flex-wrap justify-center align-middle my-1 sm:my-0">
              <RotatingText words={rotatingCapabilities} interval={3000} />
            </span>
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed px-2">
            Rigorous technical execution meets high-end digital architecture to deliver solutions designed for performance and growth.
          </p>
        </div>

        {/* Services Grid (Liquid Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="liquid-glass liquid-glass-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between h-full"
            >
              {/* Top Specular Edge Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500" />

              <div className="space-y-6">
                {/* Liquid Glass Icon Puck */}
                <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00ccff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 group-hover:text-[#00ccff] transition-colors"
                >
                  <span>Inquire about this</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Callout Card (Featured Liquid Glass Slate) */}
          <div className="liquid-glass liquid-glass-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between h-full border-[#00ccff]/30">
            {/* Top Accent Specular Highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ccff]/60 to-transparent" />

            <div className="space-y-6">
              <div className="liquid-glass-icon w-12 h-12 rounded-2xl flex items-center justify-center text-[#00ccff] bg-[#00ccff]/10">
                <ShieldCheck size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white font-heading">
                  Custom Enterprise Engagements
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  Have a specialized project architecture requirement? Let's discuss a custom-tailored scope.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <a 
                href="#contact" 
                className="w-full py-3.5 px-6 rounded-2xl bg-[#00ccff] text-[#030306] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,204,255,0.6)] hover:bg-[#33d6ff] transition-all duration-300"
              >
                <span>Book Consultation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}