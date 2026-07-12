import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { brand } from '../../data/brand';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

const contactMethods = [
  {
    label: 'WhatsApp',
    value: 'Order & Inquiries',
    href: brand.whatsappLink,
    icon: WhatsAppIcon,
  },
  {
    label: 'Instagram',
    value: '@safai',
    href: brand.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    value: '@safai',
    href: brand.tiktok,
    icon: TikTokIcon,
  },
  {
    label: 'Email',
    value: brand.email,
    href: `mailto:${brand.email}`,
    icon: EmailIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionTitle
          subtitle="Get in Touch"
          title="Contact Safaï"
          description="We'd love to hear from you. Reach out via WhatsApp for orders, or connect with us on social media."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={method.label} delay={index * 0.1}>
              <motion.a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-8 border border-beige shadow-soft text-center group h-full"
                whileHover={{ y: -6, boxShadow: '0 16px 64px rgba(45, 45, 45, 0.1)' }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-ivory border border-beige flex items-center justify-center text-gold mx-auto mb-6 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-500">
                  <method.icon />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                  {method.label}
                </p>
                <p className="font-serif text-xl text-charcoal">{method.value}</p>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <div className="bg-white rounded-3xl p-10 md:p-16 border border-beige shadow-soft max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Ready to Experience Safaï?
            </h3>
            <p className="text-charcoal-light font-light mb-8 leading-relaxed">
              Browse our collection and order directly via WhatsApp. Our team will guide you
              through payment and delivery.
            </p>
            <Button
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Order
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 0010.86 4.46V9.12a8.16 8.16 0 005.58 2.2V7.87a4.85 4.85 0 01-1-.18z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
