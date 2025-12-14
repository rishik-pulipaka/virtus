interface PlaceholderGridProps {
  columns?: number;
  rows?: number;
}

export default function PlaceholderGrid({
  columns = 3,
  rows = 2,
}: PlaceholderGridProps) {
  return (
    <div className="px-6 xl:pl-24 mb-24">
      <div
        className="grid gap-8"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: columns * rows }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            {/* Image placeholder */}
            <div className="w-full aspect-square bg-gray-300" />

            {/* Name placeholder */}
            <div className="h-4 w-32 bg-gray-200" />

            {/* Role placeholder */}
            <div className="h-3 w-40 bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
