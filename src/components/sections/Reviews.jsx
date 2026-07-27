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
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-[#00ccff]">Client Feedback</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-2">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <TiltedCard key={idx}>
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(rev.stars)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
              "{rev.text}"
            </p>
            <div className="border-t border-white/10 pt-4 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                <p className="text-xs text-gray-500">{rev.role}</p>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00ccff]/10 text-[#00ccff] border border-[#00ccff]/20">
                {rev.service}
              </span>
            </div>
          </TiltedCard>
        ))}
      </div>
    </section>
  );
}