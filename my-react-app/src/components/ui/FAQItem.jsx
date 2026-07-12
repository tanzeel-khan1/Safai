import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-beige last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors duration-300 pr-8">
          {item.question}
        </span>
        <motion.span
          className="shrink-0 w-10 h-10 rounded-full border border-beige flex items-center justify-center text-gold group-hover:border-gold transition-colors duration-300"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 md:pb-8 text-charcoal-light leading-relaxed font-light pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQList({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  return (
    <div className="bg-white rounded-2xl border border-beige shadow-soft px-6 md:px-10">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
