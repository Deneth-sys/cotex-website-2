import TiltedCard from '../reactbits/TiltedCard';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alex M.",
    role: "Technology Consultant",
    service: "CV Architecture",
    text: "Cotex reconstructed my executive resume with exceptional precision. The refined formatting and keyword optimization significantly improved response rates from executive recruiters.",
    stars: 5,
  },
  {
    name: "Samantha R.",
    role: "Managing Director",
    service: "Web Engineering",
    text: "The web application developed by Cotex exceeded our expectations. Deliverables were completed on schedule, and the interactive UI elements significantly improved platform engagement.",
    stars: 5,
  },
  {
    name: "Devin K.",
    role: "Academic Researcher",
    service: "Technical Writing",
    text: "The research assistance provided was thorough, rigorous, and fully compliant with all specified academic criteria. Communication was exemplary throughout the process.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="pt-36 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Header Badge & Title */}
      <div className="text-center mb-16 space-y-3">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
          Testimonials
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {reviews.map((rev, idx) => (
          <TiltedCard 
            key={idx}
            containerClassName="w-full h-full bg-transparent border-0 p-0 shadow-none"
            className="w-full h-full bg-transparent border-0 p-0 shadow-none"
          >
            {/* Transparent Liquid Glass Card (Matches Services.jsx) */}
            <div className="liquid-glass liquid-glass-hover rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between h-full bg-transparent">
              {/* Top Specular Edge Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                <div>
                  <h4 className="font-bold text-white text-sm font-heading">{rev.name}</h4>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
                <span className="liquid-glass-icon text-[10px] font-semibold px-3 py-1 rounded-full text-[#00ccff]">
                  {rev.service}
                </span>
              </div>
            </div>
          </TiltedCard>
        ))}
      </div>
    </section>
  );
}