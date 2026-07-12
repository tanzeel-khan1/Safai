import { motion } from 'framer-motion';

const items = [
  'Premium Fragrances',
  'Luxury Packaging',
  'Long Lasting',
  'Affordable Luxury',
  'Fast Delivery',
  'Crafted with Care',
  'Signature Scents',
  'Order via WhatsApp',
];

export default function LuxuryMarquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-5 bg-charcoal overflow-hidden border-y border-gold/20">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-sm tracking-[0.3em] uppercase text-warm-white/80 font-light">
            {item}
            <span className="text-gold text-xs">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
