import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import { getWhatsAppOrderUrl } from '../../utils/whatsapp';

export default function ProductCard({ product, onImageClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative bg-white rounded-2xl overflow-hidden border border-beige/80 shadow-soft hover:shadow-luxury transition-all duration-700 flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />

      <div
        className="relative aspect-[3/4] overflow-hidden bg-ivory cursor-pointer"
        onClick={() => onImageClick?.(product)}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute top-5 left-5 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase text-white">
          Exclusive
        </div>

        <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-serif text-charcoal border border-beige shadow-soft">
          {product.price}
        </div>

        <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <p className="text-white text-xs tracking-[0.2em] uppercase font-light">
            Click to view
          </p>
        </div>
      </div>

      <div className="p-7 md:p-9 flex flex-col flex-1">
        <div className="mb-5">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-charcoal mb-2 group-hover:text-gold transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-xs text-gold tracking-[0.25em] uppercase font-medium">{product.size}</p>
        </div>

        <p className="text-charcoal-light text-sm leading-relaxed mb-7 flex-1 font-light">
          {product.description}
        </p>

        <div className="space-y-3.5 mb-8 pt-5 border-t border-beige/80">
          <NoteRow label="Top" notes={product.topNotes} />
          <NoteRow label="Heart" notes={product.heartNotes} />
          <NoteRow label="Base" notes={product.baseNotes} />
        </div>

        <Button
          variant="whatsapp"
          href={getWhatsAppOrderUrl(product.name, product.size)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Order on WhatsApp
        </Button>
      </div>
    </motion.article>
  );
}

function NoteRow({ label, notes }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="text-gold font-medium tracking-[0.15em] uppercase w-14 shrink-0 text-xs">
        {label}
      </span>
      <span className="text-charcoal-light font-light">{notes}</span>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
