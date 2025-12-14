interface ContentBlockProps {
  title?: string;
  children: React.ReactNode;
}

export default function ContentBlock({ title, children }: ContentBlockProps) {
  return (
    <section className="content-left pt-10">
      {title && (
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          {title}
        </h1>
      )}

      <div className="text-lg leading-relaxed max-w-5xl">
        {children}
      </div>
    </section>
  );
}
