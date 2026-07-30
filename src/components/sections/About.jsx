import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const bentoItems = [
  {
    id: "main",
    title: "Engineering digital excellence",
    description: "We architect and develop high-performance web applications and custom software solutions designed for maximum speed, scalability, and impact.",
    href: "#contact",
    feature: "spotlight",
    spotlightItems: [
      "Custom Web Architecture",
      "High-Performance UI/UX",
      "Secure API Integration",
      "Rapid Deployment Cycles",
      "Scalable Cloud Systems"
    ],
    className: "col-span-1 lg:col-span-2 row-span-1",
  },
  {
    id: "stats",
    title: "Core Metrics",
    description: "Proven track record of delivery and client satisfaction.",
    feature: "metrics",
    metrics: [
      { label: "Projects Completed", value: 100, suffix: "+", decimals: 0 },
      { label: "Client Satisfaction", value: 99, suffix: "%", decimals: 0 },
      { label: "Technical Uptime", value: 99.9, suffix: "%", decimals: 1 }
    ],
    className: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "governance",
    title: "Transparent Governance & Delivery Framework",
    description: "We maintain absolute clarity and direct communication across every phase of execution. Our structured lifecycle guarantees complete visibility, rigorous milestone tracking, and dependable accountability from concept to deployment.",
    href: "#contact",
    feature: "timeline",
    timeline: [
      { step: "01", title: "Discovery & Blueprint", desc: "Deep-dive workshops to establish technical scope, UI/UX wireframes, and precise milestones." },
      { step: "02", title: "Agile Development", desc: "Sprint-based iterative coding cycles with regular preview builds and continuous feedback loops." },
      { step: "03", title: "Rigorous QA & Audit", desc: "Comprehensive cross-browser testing, security hardening, and performance optimization." },
      { step: "04", title: "Launch & Evolution", desc: "Zero-downtime deployment backed by ongoing maintenance, analytics tracking, and scaling." }
    ],
    className: "col-span-1 lg:col-span-3 row-span-1",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const SpotlightFeature = ({ items }) => (
  <ul className="mt-4 space-y-2">
    {items.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        className="flex items-center gap-2.5 text-sm text-gray-300"
      >
        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#00ccff]" />
        <span>{item}</span>
      </motion.li>
    ))}
  </ul>
);

const CounterNumber = ({ value, suffix, decimals }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1600;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const increment = end / steps;

      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref} className="text-[#00ccff] font-bold font-mono">
      {displayValue}{suffix}
    </span>
  );
};

const MetricsFeature = ({ metrics }) => (
  <div className="mt-4 space-y-3">
    {metrics.map((metric, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 * index }}
        className="space-y-1"
      >
        <div className="flex items-center justify-between text-xs font-medium text-gray-300">
          <span>{metric.label}</span>
          <CounterNumber value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${metric.value > 100 ? 100 : metric.value}%` }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 * index }}
            className="h-full rounded-full bg-gradient-to-r from-[#00ccff] to-[#8b5cf6]"
          />
        </div>
      </motion.div>
    ))}
  </div>
);

const TimelineFeature = ({ timeline }) => (
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {timeline.map((item, index) => (
      <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
        <div>
          <span className="text-[#00ccff] font-mono text-xs font-bold block mb-2">{item.step}</span>
          <h4 className="text-white text-sm font-semibold mb-1.5">{item.title}</h4>
          <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

const BentoCard = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [2, -2]);
  const rotateY = useTransform(x, [-100, 100], [-2, 2]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="h-full"
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={fadeInUp}
      whileHover={{ y: -4 }}
    >
      <a
        href={item.href || "#"}
        className="group relative flex h-full flex-col justify-between rounded-2xl p-6 liquid-glass liquid-glass-hover block overflow-hidden"
      >
        <div className="relative z-10 w-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-[#00ccff] transition-colors leading-snug">
              {item.title}
            </h3>
            {item.href && (
              <div className="text-gray-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2">
                <ArrowUpRight className="h-5 w-5 text-[#00ccff]" />
              </div>
            )}
          </div>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {item.description}
          </p>

          {item.feature === "spotlight" && <SpotlightFeature items={item.spotlightItems} />}
          {item.feature === "metrics" && <MetricsFeature metrics={item.metrics} />}
          {item.feature === "timeline" && <TimelineFeature timeline={item.timeline} />}
        </div>
      </a>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#00ccff] mb-2">Corporate Profile</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-2xl">
          We deliver digital solutions engineered for <span className="text-[#00ccff]">measurable impact</span>.
        </h2>
      </div>

      {/* Bento Grid Container */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        {bentoItems.map((item) => (
          <div key={item.id} className={item.className}>
            <BentoCard item={item} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}