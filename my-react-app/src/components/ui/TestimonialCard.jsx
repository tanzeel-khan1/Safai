import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.blockquote
      className="relative bg-white rounded-2xl p-9 md:p-11 border border-beige/80 shadow-soft h-full flex flex-col overflow-hidden group"
      whileHover={{ y: -8, boxShadow: '0 24px 80px rgba(45, 45, 45, 0.12)' }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

      <span className="font-serif text-6xl text-gold/20 leading-none mb-4">&ldquo;</span>

      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="text-charcoal-light text-base leading-relaxed flex-1 mb-8 font-light">
        {testimonial.text}
      </p>

      <footer className="pt-6 border-t border-beige/80">
        <cite className="not-italic flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-ivory border border-beige flex items-center justify-center font-serif text-gold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-serif text-xl text-charcoal font-medium">{testimonial.name}</p>
            <p className="text-[11px] text-gold tracking-[0.2em] uppercase mt-0.5">{testimonial.location}</p>
          </div>
        </cite>
      </footer>
    </motion.blockquote>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
