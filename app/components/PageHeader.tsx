interface PageHeaderProps {
  title: string;
  children: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <section className="px-6 xl:pl-24 pt-10">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 text-left">
        {title}
      </h1>

      <div className="text-lg leading-relaxed text-left mb-12 max-w-5xl">
        {children}
      </div>
    </section>
  );
}
