interface DividerProps {
  height: number;
}

export default function Divider({ height }: DividerProps) {
  return <div className={`w-full h-2 border-${8} bg-gray-100`} />;
}
