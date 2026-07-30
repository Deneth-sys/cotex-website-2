import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils"; // Adjust path to your utils if necessary

const TILT_MAX = 9;
const TILT_SPRING = { stiffness: 300, damping: 28 };
const GLOW_SPRING = { stiffness: 180, damping: 22 };

function Card({ item, dimmed, onHoverStart, onHoverEnd }) {
  const Icon = item.icon;
  const cardRef = useRef(null);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

  return (
    <motion.div
      animate={{
        scale: dimmed ? 0.96 : 1,
        opacity: dimmed ? 0.5 : 1,
      }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-6 sm:p-8 border",
        "border-white/10 bg-[#06060f]/60 backdrop-blur-xl shadow-2xl",
        "transition-[border-color] duration-300",
        "hover:border-[#00ccff]/50"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {/* Static accent tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[2rem]"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}10, transparent 65%)`,
        }}
      />

      {/* Hover glow layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[2rem]"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${item.color}25, transparent 65%)`,
        }}
      />

      {/* Top Specular Edge Highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-[#00ccff] transition-colors duration-500 z-20" />

      <div className="relative z-10 space-y-6">
        {/* Icon container */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `${item.color}18`,
            boxShadow: `inset 0 0 0 1px ${item.color}40`,
          }}
        >
          <Icon size={22} style={{ color: item.color }} />
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-lg text-white font-heading tracking-tight group-hover:text-[#00ccff] transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      <div className="pt-8 mt-auto relative z-10">
        {item.isButton ? (
          <a
            href={item.link || "#contact"}
            className="w-full py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
            style={{
              background: item.color,
              color: "#030306",
              boxShadow: `0 0 20px ${item.color}40`,
            }}
          >
            <span>{item.buttonText || "Book Consultation"}</span>
          </a>
        ) : (
          <a
            href={item.link || "#contact"}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 group-hover:text-[#00ccff] transition-colors"
          >
            <span>Inquire about this</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>

      {/* Accent bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full z-20"
        style={{
          background: `linear-gradient(to right, ${item.color}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function SpotlightCards({ items, eyebrow, heading, description }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-3 sm:space-y-4">
        {eyebrow && (
          <span className="liquid-glass rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block">
            {eyebrow}
          </span>
        )}
        {heading && (
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight leading-snug sm:leading-tight px-2">
            {heading}
          </h2>
        )}
        {description && (
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed px-2">
            {description}
          </p>
        )}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {items.map((item) => (
          <Card
            dimmed={hoveredTitle !== null && hoveredTitle !== item.title}
            item={item}
            key={item.title}
            onHoverEnd={() => setHoveredTitle(null)}
            onHoverStart={() => setHoveredTitle(item.title)}
          />
        ))}
      </div>
    </div>
  );
}