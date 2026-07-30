import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnet from '../reactbits/Magnet';
import { 
  ArrowUp, 
  Mail, 
  ShieldCheck, 
  Globe,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Methodology", href: "#process" },
  { name: "Testimonials", href: "#reviews" },
  { name: "Consultation", href: "#contact" },
];

const serviceLinks = [
  { name: "Web Architecture & Engineering", href: "#services" },
  { name: "Custom Software Solutions", href: "#services" },
  { name: "Executive CV Design", href: "#services" },
  { name: "Technical Research & Writing", href: "#services" },
  { name: "UI/UX Design Systems", href: "#services" },
];

const socialLinks = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=cotexfounder@gmail.com",
    icon: <Mail size={16} />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [activeFooter, setActiveFooter] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveFooter(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    const navbarOffset = 80;

    const targetPosition = (targetElement && targetId !== 'hero')
      ? targetElement.getBoundingClientRect().top + startPosition - navbarOffset
      : 0;

    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    const duration = 500;

    const animation = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020205] pt-20 pb-12 overflow-hidden text-gray-400">
      
      {/* 🌟 Floating Ambient Background Elements & Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ccff]/50 to-transparent z-10" />
      
      {/* Floating Glowing Orb 1 (Top Left Drift) */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-[10%] w-72 h-72 bg-[#00ccff]/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Floating Glowing Orb 2 (Right Side Drift) */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-[5%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Bottom Glow Backdrop */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-[#00ccff]/10 via-[#00ccff]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Callout Card with subtle floating hover effect */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group hover:border-[#00ccff]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ccff]/5 rounded-full blur-[90px] pointer-events-none group-hover:bg-[#00ccff]/15 transition-all" />
          
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ccff]/10 border border-[#00ccff]/30 text-[#00ccff] text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,204,255,0.2)]">
              <Sparkles size={13} />
              Ready to Accelerate Your Digital Presence?
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
              Let's engineer your next digital milestone together.
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We turn complex technical requirements into high-converting web architecture and elite digital products.
            </p>
          </div>

          <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cotexfounder@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00ccff] text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(0,204,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              Start a Conversation <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="font-logo logo-text-glow text-2xl sm:text-3xl font-black uppercase tracking-[0.2em] pl-[0.2em] inline-block hover:opacity-90 transition-opacity text-white"
            >
              COTEX
            </a>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Engineered digital solutions, custom web architecture, and specialized career documentation designed to drive organizational and professional growth.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational & Accepting Engagements
            </div>

            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-3 pt-1">
              {socialLinks.map((social) => (
                <Magnet key={social.name} magnetism={0.2}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ccff] hover:border-[#00ccff]/50 hover:bg-[#00ccff]/10 transition-all"
                  >
                    {social.icon}
                  </a>
                </Magnet>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:pl-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5 font-heading">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              {navLinks.map((link) => {
                const isActive = activeFooter === link.name;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className={`transition-colors inline-block py-0.5 ${isActive ? 'text-[#00ccff] font-semibold translate-x-1' : 'text-gray-400 hover:text-[#00ccff] hover:translate-x-1'} transition-transform duration-200`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5 font-heading">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    onClick={(e) => handleSmoothScroll(e, service.href)}
                    className="text-gray-400 hover:text-[#00ccff] transition-colors inline-block py-0.5"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <ShieldCheck size={20} className="text-[#00ccff] shrink-0" />
              <p className="text-[11px] text-gray-400 leading-snug">
                Strict NDA compliance & enterprise-grade encrypted data protection protocols.
              </p>
            </div>
          </div>

        </div>

        {/* Massive Typographic Watermark Banner with slow floating hover feel */}
        <div className="py-12 overflow-hidden text-center select-none pointer-events-none opacity-20 relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="text-[14vw] sm:text-[12vw] font-black font-logo tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-transparent leading-none">
              COTEX
            </h2>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-gray-500 font-medium">
            <span>© {new Date().getFullYear()} Cotex Digital Solutions. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-gray-400"><Globe size={12} className="text-[#00ccff]" /> Global Operations</span>
          </div>

          <Magnet magnetism={0.3}>
            <button
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-white/5 border border-white/10 font-medium text-gray-300 hover:text-white hover:border-[#00ccff]/50 hover:bg-[#00ccff]/10 transition-all cursor-pointer"
            >
              Back to top <ArrowUp size={14} className="text-[#00ccff]" />
            </button>
          </Magnet>
        </div>

      </div>
    </footer>
  );
}