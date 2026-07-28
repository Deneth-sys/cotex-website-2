import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for navbar position

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Floating Capsule Header */}
      <header className="fixed top-6 inset-x-0 z-50 w-[92%] max-w-4xl mx-auto pointer-events-none">
        <div className="flex items-center justify-between px-6 py-3 rounded-full bg-[#0a0a12]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] pointer-events-auto">
          
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold tracking-wider text-white z-50">
            C<span className="text-[#00ccff]">o</span>tex
          </a>

          {/* Animated Active Pill Nav (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = active === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className="relative px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#00ccff]/20 border border-[#00ccff]/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side: Magnetic Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Magnet magnetism={0.4}>
                <a
                  href="#contact"
                  className="px-4 py-2 text-xs font-semibold rounded-full bg-[#00ccff] text-[#050508] block"
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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Responsive Mobile & Tablet Drawer */}
      <div 
        className={`fixed inset-0 bg-[#050508]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center w-full max-w-xs px-6">
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setIsOpen(false);
                }}
                className={`text-2xl font-bold transition-colors ${
                  isActive ? 'text-[#00ccff]' : 'text-white hover:text-[#00ccff]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-4 w-full">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#00ccff] text-[#050508] font-bold text-xs shadow-[0_0_20px_rgba(0,204,255,0.4)] block text-center"
            >
              Start Project
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}