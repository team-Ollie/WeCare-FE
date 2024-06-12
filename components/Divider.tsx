interface DividerProps {
  height: number;
}

export default function Divider({ height }: DividerProps) {
  return (
    <div
      className="border-t border-gray-100 bg-gray-100 w-full"
      style={{ height: `${height}px` }}
    />
  );
}
