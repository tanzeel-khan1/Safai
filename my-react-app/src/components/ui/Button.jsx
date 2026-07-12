import { motion } from 'framer-motion';

const baseStyles =
  'relative inline-flex items-center justify-center gap-2 px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 rounded-full border cursor-pointer shimmer-btn';

const variants = {
  primary:
    'bg-white text-charcoal border-gold hover:bg-gold hover:text-white hover:border-gold shadow-soft hover:shadow-gold',
  gold: 'bg-gold text-white border-gold hover:bg-gold-dark hover:border-gold-dark shadow-gold hover:shadow-luxury',
  ghost:
    'bg-transparent text-charcoal border-beige hover:border-gold hover:text-gold',
  whatsapp:
    'bg-white text-charcoal border-gold hover:bg-[#25D366] hover:text-white hover:border-[#25D366] shadow-soft hover:shadow-medium w-full',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  target,
  rel,
  ...props
}) {
  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
