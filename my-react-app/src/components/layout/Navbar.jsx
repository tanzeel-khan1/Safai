import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import { navLinks } from '../../data/brand';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-warm-white/90 backdrop-blur-xl shadow-soft border-b border-beige/80 py-0'
            : 'bg-warm-white/30 backdrop-blur-sm py-1'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-20 md:h-24">
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            <Logo size="sm" showTagline />
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] tracking-[0.2em] uppercase text-charcoal-light hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#collection"
            className="hidden lg:inline-flex items-center px-7 py-3 text-[11px] font-medium tracking-[0.2em] uppercase border border-gold rounded-full text-charcoal hover:bg-gold hover:text-white transition-all duration-500 shimmer-btn"
          >
            Shop Now
          </a>

          <button
            type="button"
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-warm-white border-l border-beige shadow-luxury pt-28 px-8 bg-luxury-pattern"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Logo size="md" showTagline className="mb-10" />
              <ul className="flex flex-col gap-7">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="font-serif text-2xl text-charcoal hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
