interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-block text-brand-600 text-sm font-semibold tracking-wider uppercase mb-3 bg-brand-50 px-3 py-1 rounded-full">
        {tag}
      </span>
      <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      <div className="section-divider mx-auto mb-5" />
      <p className="text-gray-500 leading-relaxed">{subtitle}</p>
    </div>
  );
}
