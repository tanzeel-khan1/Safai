import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import LuxuryDivider from '../ui/LuxuryDivider';
import { brand } from '../../data/brand';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import logoo from '../../assets/logoo.png';
const HERO_IMAGE =
  './logoo.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-white grain-overlay">
      <div className="absolute inset-0 bg-luxury-pattern opacity-60 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-[8%] w-72 h-72 rounded-full bg-gold/8 blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-[3%] w-96 h-96 rounded-full bg-gold/6 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-28 pb-16 md:pt-36 md:pb-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 lg:hidden"
            >
              <Logo size="md" showTagline />
            </motion.div>

            <motion.p
              className="text-gold text-xs font-medium tracking-[0.4em] uppercase mb-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="h-px w-10 bg-gold/50" />
              Haute Parfumerie
            </motion.p>

            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-charcoal leading-[1.02] tracking-tight mb-8 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafted to Leave a{' '}
              <span className="italic text-gold-gradient">Lasting</span>{' '}
              Impression
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mb-8"
            >
              <LuxuryDivider className="!justify-start" />
            </motion.div>

            <motion.p
              className="text-charcoal-light text-lg md:text-xl leading-relaxed font-light max-w-md mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              Enter the world of Safaï — where every fragrance is an invitation to
              elegance, confidence, and unforgettable presence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button href="#collection">Explore Collection</Button>
              <Button
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via WhatsApp
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute -inset-4 md:-inset-6 border border-gold/20 rounded-[2rem] pointer-events-none" />
            <div className="absolute -inset-8 md:-inset-10 border border-gold/10 rounded-[2.5rem] pointer-events-none hidden md:block" />

            <motion.div
              className="relative gold-frame rounded-[1.75rem] overflow-hidden shadow-luxury aspect-[4/5] max-w-md mx-auto lg:max-w-none bg-ivory"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={HERO_IMAGE}
                alt="Safaï luxury perfume"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-gold/5" />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 md:-bottom-8 md:-left-8 bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-luxury border border-beige hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <p className="font-serif text-3xl text-charcoal">6+</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold mt-1">
                Signature Scents
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-5 md:-top-8 md:-right-8 bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-luxury border border-beige hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <p className="font-serif text-3xl text-gold-gradient">100%</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold mt-1">
                Premium Quality
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
