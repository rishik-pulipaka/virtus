interface Props {
  children: string;
}

export default function PageSectionTitle({ children }: Props) {
  return (
    <h2 className="px-6 xl:pl-24 text-xl font-medium mb-8 text-left">
      {children}
    </h2>
  );
}
