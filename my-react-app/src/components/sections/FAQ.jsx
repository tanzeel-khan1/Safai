import SectionTitle from '../ui/SectionTitle';
import { FAQList } from '../ui/FAQItem';
import { faqItems } from '../../data/faq';

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionTitle
          subtitle="Questions"
          title="Frequently Asked"
          description="Everything you need to know about ordering, delivery, and our fragrances."
        />

        <FAQList items={faqItems} />
      </div>
    </section>
  );
}
