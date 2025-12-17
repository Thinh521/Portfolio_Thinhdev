interface HeadingProps {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-gray-400">
          <span className="flex-1 h-px bg-white/10" />
          <span>{subtitle}</span>
          <span className="flex-1 h-px bg-white/10" />
        </div>
      )}
    </div>
  );
}
