import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnet from '../reactbits/Magnet';

const navItems = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Process', href: '#process', id: 'process' },
  { name: 'Reviews', href: '#reviews', id: 'reviews' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Ref to prevent the scroll listener from pulling active state back mid-glide
  const isManualScroll = useRef(false);
  const lockTimeout = useRef(null);

  // Active tab switcher with lock synced to the smooth scroll
  const handleNavClick = (itemName) => {
    setActive(itemName);
    isManualScroll.current = true;

    if (lockTimeout.current) clearTimeout(lockTimeout.current);

    lockTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 550);
  };

  // Track active section and scroll state for dynamic capsule styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (isManualScroll.current) return;

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lockTimeout.current) clearTimeout(lockTimeout.current);
    };
  }, []);

  // Prevent body background scrolling when the mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fontshare Satoshi Font Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap');
        .font-satoshi {
          font-family: 'Satoshi', sans-serif;
        }
      `}} />

      {/* Floating Capsule Header with Animated Gradient Border */}
      <header className="fixed top-6 inset-x-0 z-50 w-[92%] max-w-4xl mx-auto pointer-events-none">
        <div className={`relative p-[1px] rounded-full transition-all duration-500 pointer-events-auto bg-gradient-to-r from-[#00ccff]/40 via-white/10 to-[#8b5cf6]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:from-[#00ccff] hover:to-[#8b5cf6]`}>
          
          <div className={`flex items-center justify-between px-6 rounded-full bg-[#07070e]/90 backdrop-blur-2xl transition-all duration-300 ${
            isScrolled ? 'py-2.5 bg-[#050508]/95' : 'py-3.5'
          }`}>
            
            {/* Logo with Emblem Font & Gradient Glow (Untouched) */}
            <a 
              href="#hero" 
              onClick={() => handleNavClick('Home')}
              className="font-logo logo-text-glow text-base sm:text-lg font-black uppercase tracking-[0.18em] pl-[0.18em] z-50 hover:opacity-90 transition-opacity"
            >
              COTEX
            </a>

            {/* Animated Active Pill Nav (Desktop) using Fontshare Satoshi */}
            <nav className="hidden md:flex items-center space-x-1 font-satoshi">
              {navItems.map((item) => {
                const isActive = active === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.name)}
                    className="relative px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-[#00ccff]/20 border border-[#00ccff]/40 rounded-full shadow-[0_0_15px_rgba(0,204,255,0.25)]"
                        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side: Magnetic Button & Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block font-satoshi">
                <Magnet magnetism={0.4}>
                  <a
                    href="#contact"
                    onClick={() => handleNavClick('Contact')}
                    className="px-4 py-2 text-xs font-semibold rounded-full bg-[#00ccff] text-[#050508] block shadow-[0_0_20px_rgba(0,204,255,0.4)] hover:shadow-[0_0_25px_rgba(0,204,255,0.7)] transition-all"
                  >
                    Start Project
                  </a>
                </Magnet>
              </div>

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gray-300 hover:text-white p-1.5 focus:outline-none z-50 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={24} className="text-[#00ccff]" /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Mobile & Tablet Drawer with Staggered Entrance */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#050508]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden font-satoshi"
          >
            <motion.nav 
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.1,
                  }
                }
              }}
              className="flex flex-col items-center gap-6 text-center w-full max-w-xs px-6"
            >
              {navItems.map((item) => {
                const isActive = active === item.name;
                return (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => {
                        handleNavClick(item.name);
                        setIsOpen(false);
                      }}
                      className={`text-2xl font-bold transition-colors block ${
                        isActive ? 'text-[#00ccff] drop-shadow-[0_0_15px_rgba(0,204,255,0.4)]' : 'text-white hover:text-[#00ccff]'
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                );
              })}

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pt-4 w-full"
              >
                <a
                  href="#contact"
                  onClick={() => {
                    handleNavClick('Contact');
                    setIsOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full bg-[#00ccff] text-[#050508] font-bold text-xs shadow-[0_0_25px_rgba(0,204,255,0.5)] block text-center"
                >
                  Start Project
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}