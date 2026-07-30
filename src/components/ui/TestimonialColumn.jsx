import React from "react";
import { motion } from "motion/react";
import { Star } from 'lucide-react';

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((rev, i) => (
              <div 
                key={i}
                className="liquid-glass rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group flex flex-col justify-between w-full max-w-sm"
              >
                {/* Top Specular Edge Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500" />

                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.stars || 5)].map((_, starIdx) => (
                      <Star key={starIdx} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-3">
                    {rev.image && (
                      <img
                        src={rev.image}
                        alt={rev.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-white text-sm font-heading">{rev.name}</h4>
                      <p className="text-xs text-gray-500">{rev.role}</p>
                    </div>
                  </div>
                  {rev.service && (
                    <span className="liquid-glass-icon text-[10px] font-semibold px-3 py-1 rounded-full text-[#00ccff] shrink-0">
                      {rev.service}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};