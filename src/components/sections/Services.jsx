import RotatingText from '../reactbits/RotatingText';
import SpotlightCards from '../ui/SpotlightCards';
import { Code, FileText, Cpu, Layout, PenTool, ShieldCheck } from 'lucide-react';

const serviceList = [
  {
    icon: Code,
    title: "Web Development",
    description: "Blazing fast, responsive websites and web apps built with modern stacks.",
    color: "#00ccff", // Electric Cyan
    link: "#contact"
  },
  {
    icon: Layout,
    title: "UI & UX Design",
    description: "Intuitive, visually stunning interfaces designed for optimal engagement.",
    color: "#a855f7", // Vivid Violet
    link: "#contact"
  },
  {
    icon: Cpu,
    title: "Custom Softwares",
    description: "Tailor-made software solutions engineered to scale business workflows.",
    color: "#10b981", // Emerald Green
    link: "#contact"
  },
  {
    icon: FileText,
    title: "CV Designing",
    description: "ATS-optimized, modern resumes that get you noticed and hired.",
    color: "#f59e0b", // Amber Gold
    link: "#contact"
  },
  {
    icon: PenTool,
    title: "Assignment Writing",
    description: "Top-tier academic research and professional technical writing services.",
    color: "#ec4899", // Hot Pink
    link: "#contact"
  },
  {
    icon: ShieldCheck,
    title: "Custom Enterprise Engagements",
    description: "Have a specialized project architecture requirement? Let's discuss a custom-tailored scope.",
    color: "#6366f1", // Indigo / Electric Blue
    link: "#contact",
    isButton: true,
    buttonText: "Book Consultation"
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
        <SpotlightCards 
          items={serviceList}
          eyebrow="What We Do"
          heading={
            <>
              Engineered Excellence in{' '}
              <span className="text-[#00ccff] drop-shadow-[0_0_20px_rgba(0,204,255,0.4)] inline-flex flex-wrap justify-center align-middle my-1 sm:my-0">
                <RotatingText words={rotatingCapabilities} interval={3000} />
              </span>
            </>
          }
          description="Rigorous technical execution meets high-end digital architecture to deliver solutions designed for performance and growth."
        />
      </div>
    </section>
  );
}