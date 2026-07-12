import { motion } from 'framer-motion';

export default function Logo({ size = 'md', showTagline = false, variant = 'dark', className = '' }) {
  const sizes = {
    sm: { img: 'w-9 h-9', text: 'text-xl', tag: 'text-[9px]' },
    md: { img: 'w-11 h-11', text: 'text-2xl md:text-3xl', tag: 'text-[10px]' },
    lg: { img: 'w-16 h-16', text: 'text-4xl md:text-5xl', tag: 'text-xs' },
    xl: { img: 'w-24 h-24', text: 'text-5xl md:text-6xl', tag: 'text-sm' },
  };

  const s = sizes[size] || sizes.md;
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.img
        src="/logoo.png"
        alt="Safaï logo"
        className={`${s.img} shrink-0`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-col">
        <span
          className={`font-serif ${s.text} font-medium tracking-[0.15em] leading-none ${isLight ? 'text-warm-white' : 'text-charcoal'}`}
        >
          Safa<span className="text-gold">ï</span>
        </span>
        {showTagline && (
          <span className={`${s.tag} tracking-[0.35em] uppercase text-gold mt-1.5 font-medium`}>
            Parfums
          </span>
        )}
      </div>
    </div>
  );
}
