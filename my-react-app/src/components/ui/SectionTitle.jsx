import AnimatedSection from './AnimatedSection';
import LuxuryDivider from './LuxuryDivider';

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right ml-auto';

  const dividerClass =
    align === 'center' ? '' : align === 'left' ? '!justify-start' : '!justify-end';

  return (
    <AnimatedSection className={`max-w-3xl mb-16 md:mb-24 ${alignClass} ${className}`}>
      {subtitle && (
        <p className="text-gold text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-5">
          {subtitle}
        </p>
      )}
      <LuxuryDivider className={`mb-8 ${dividerClass}`} />
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-charcoal leading-[1.05] tracking-tight mb-8">
        {title}
      </h2>
      {description && (
        <p className={`text-charcoal-light text-base md:text-lg leading-relaxed font-light max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
