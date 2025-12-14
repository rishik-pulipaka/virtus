interface Props {
  children: string;
}

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="content-left text-xl font-medium mb-8">
      {children}
    </h2>
  );
}
