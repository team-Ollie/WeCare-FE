interface DividerProps {
  height: number;
}

export default function Divider({ height }: DividerProps) {
  return (
    <div
      className="border-t border-grey-100 bg-grey-100 w-full"
      style={{ height: `${height}px` }}
    />
  );
}
