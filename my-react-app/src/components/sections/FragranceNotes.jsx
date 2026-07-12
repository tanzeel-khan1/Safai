import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

const notes = [
  {
    type: 'Top Notes',
    subtitle: 'The First Impression',
    description:
      'Light, fresh, and immediately captivating. Top notes are the first scents you experience upon application — bright citrus, delicate florals, and crisp herbs that create an inviting opening.',
    examples: 'Bergamot, Mandarin, Neroli, Lavender',
    icon: SparkleIcon,
    color: 'from-amber-50 to-ivory',
  },
  {
    type: 'Heart Notes',
    subtitle: 'The Soul of the Fragrance',
    description:
      'Emerging as the top notes fade, heart notes form the core character of the perfume. These rich, full-bodied scents — florals, spices, and fruits — define the fragrance\'s true personality.',
    examples: 'Rose, Jasmine, Iris, Cinnamon',
    icon: HeartNoteIcon,
    color: 'from-rose-50 to-ivory',
  },
  {
    type: 'Base Notes',
    subtitle: 'The Lasting Memory',
    description:
      'Deep, warm, and enduring. Base notes anchor the fragrance, lingering on the skin for hours. Woods, musks, and resins create the foundation that makes each Safaï scent unforgettable.',
    examples: 'Sandalwood, Musk, Amber, Vanilla',
    icon: AnchorIcon,
    color: 'from-stone-100 to-ivory',
  },
];

export default function FragranceNotes() {
  return (
    <section id="notes" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionTitle
          subtitle="The Art of Perfumery"
          title="Understanding Fragrance Notes"
          description="Every Safaï fragrance is a carefully orchestrated journey through three layers of scent — each revealing itself in perfect harmony."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {notes.map((note, index) => (
            <AnimatedSection key={note.type} delay={index * 0.15}>
              <motion.div
                className={`relative bg-gradient-to-b ${note.color} rounded-2xl p-8 md:p-10 border border-beige shadow-soft h-full group overflow-hidden`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-beige flex items-center justify-center text-gold mb-8 shadow-soft">
                    <note.icon />
                  </div>

                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">
                    {note.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl text-charcoal mb-4">{note.type}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed font-light mb-6">
                    {note.description}
                  </p>
                  <div className="pt-6 border-t border-beige">
                    <p className="text-xs tracking-wider uppercase text-gold mb-2">Examples</p>
                    <p className="text-sm text-charcoal-light italic">{note.examples}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function HeartNoteIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function AnchorIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}
