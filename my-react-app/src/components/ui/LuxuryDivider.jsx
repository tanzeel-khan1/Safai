export default function LuxuryDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold/60" />
      <svg className="w-3 h-3 text-gold" viewBox="0 0 12 12" fill="currentColor">
        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" />
      </svg>
      <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
