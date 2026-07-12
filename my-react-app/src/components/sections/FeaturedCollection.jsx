import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import ImageLightbox from '../ui/ImageLightbox';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';
import { products } from '../../data/products';

export default function FeaturedCollection() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null, alt: '' });

  const handleImageClick = (product) => {
    setLightbox({ isOpen: true, image: product.image, alt: product.name });
  };

  return (
    <section id="collection" className="py-28 md:py-36 bg-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 bg-luxury-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <SectionTitle
          subtitle="Our Collection"
          title="Featured Fragrances"
          description="Each fragrance is a carefully composed symphony of notes — designed to evoke emotion, inspire confidence, and create lasting memories."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} onImageClick={handleImageClick} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ImageLightbox
        image={lightbox.image}
        alt={lightbox.alt}
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ isOpen: false, image: null, alt: '' })}
      />
    </section>
  );
}
