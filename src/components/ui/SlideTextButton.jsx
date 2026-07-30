import { motion } from "motion/react";
import { cn } from "../../lib/utils"; // Adjust path to your utils if necessary

export default function SlideTextButton({
  text = "Explore Services",
  hoverText,
  href = "#services",
  className,
  variant = "default",
  ...props
}) {
  const slideText = hoverText ?? text;
  
  // Custom styling mapped to your site's dark aesthetic and cyan accents
  const variantStyles =
    variant === "ghost"
      ? "border border-white/20 text-white hover:border-[#00ccff] hover:bg-[#00ccff]/10"
      : "bg-[#00ccff] text-[#050508] hover:bg-[#33d6ff] hover:shadow-[0_0_30px_rgba(0,204,255,0.6)]";

  return (
    <motion.div
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="relative w-full sm:w-auto"
      initial={{ x: 200, opacity: 0 }}
    >
      <a
        className={cn(
          "group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full px-8 font-bold text-xs uppercase tracking-wider transition-all duration-300",
          variantStyles,
          className
        )}
        href={href}
        {...props}
      >
        <span className="relative inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          <span className="flex items-center justify-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <span>{text}</span>
          </span>
          <span className="absolute top-full left-0 right-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span>{slideText}</span>
          </span>
        </span>
      </a>
    </motion.div>
  );
}