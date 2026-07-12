import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { StaggerContainer, StaggerItem } from '../ui/AnimatedSection';

const features = [
  {
    icon: PackageIcon,
    title: 'Luxury Packaging',
    description:
      'Every bottle arrives in exquisite packaging — a gift-worthy presentation that reflects the premium quality within.',
  },
  {
    icon: LeafIcon,
    title: 'Premium Ingredients',
    description:
      'We source the finest natural and synthetic ingredients from renowned perfumeries to ensure exceptional quality.',
  },
  {
    icon: ClockIcon,
    title: 'Long Lasting Fragrance',
    description:
      'Our concentrated formulas ensure your scent lingers beautifully from morning to evening.',
  },
  {
    icon: DiamondIcon,
    title: 'Affordable Luxury',
    description:
      'Experience world-class fragrances without the designer price tag. Premium quality, accessible elegance.',
  },
  {
    icon: TruckIcon,
    title: 'Fast Delivery',
    description:
      'Quick and secure delivery across Pakistan. Your fragrance arrives safely, beautifully packaged.',
  },
  {
    icon: HeartIcon,
    title: 'Customer Satisfaction',
    description:
      'Your delight is our priority. Dedicated WhatsApp support ensures a seamless ordering experience.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-safai" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionTitle
          subtitle="The Safaï Difference"
          title="Why Choose Safaï"
          description="We combine artisanal craftsmanship with modern luxury to deliver an experience that exceeds expectations."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="bg-white rounded-2xl p-8 md:p-10 border border-beige shadow-soft h-full group"
                whileHover={{ y: -6, boxShadow: '0 16px 64px rgba(45, 45, 45, 0.1)' }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-ivory border border-beige flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-500">
                  <feature.icon />
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">{feature.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PackageIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 9l10 13L22 9 12 2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h4m-4 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0M3 16h10m0 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
