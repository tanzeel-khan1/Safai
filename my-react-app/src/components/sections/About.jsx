import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=85';

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-warm-white relative overflow-hidden">
      <div className="absolute inset-0 bg-luxury-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <AnimatedSection variant="fadeLeft">
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/15 rounded-3xl pointer-events-none" />
              <div className="relative gold-frame rounded-3xl overflow-hidden shadow-luxury aspect-[4/5] bg-ivory">
                <img
                  src={ABOUT_IMAGE}
                  alt="Safaï brand story"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          <div>
            <SectionTitle
              subtitle="Our Story"
              title="About Safaï"
              align="left"
              className="mb-10 !mx-0"
            />

            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="space-y-7 text-charcoal-light leading-relaxed font-light">
                <p className="text-xl text-charcoal font-serif italic">
                  &ldquo;Safaï was born from the inspiration of Persian elegance&apos;and French fragrance artistry, where timeless traditions meet modern sophistication.&rdquo;
                </p>
                <p>
                  Born from a passion for olfactory artistry, Safaï represents the
                  intersection of tradition and modernity. We believe that a fragrance is
                  more than a scent — it is an invisible accessory that defines your presence.
                </p>
                <p>
                  Every Safaï creation is meticulously crafted using premium ingredients
                  sourced from the finest perfumeries around the world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.4} className="mt-12 pt-10 border-t border-beige">
              <div className="grid grid-cols-3 gap-8">
                <Stat value="50+" label="Premium Notes" />
                <Stat value="6" label="Signature Scents" />
                <Stat value="1000+" label="Happy Clients" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center lg:text-left">
      <p className="font-serif text-3xl md:text-4xl text-gold-gradient font-medium">{value}</p>
      <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal-light mt-2">{label}</p>
    </div>
  );
}
