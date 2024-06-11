interface DividerProps {
  height: number;
}

export default function Divider({ height }: DividerProps) {
  return <div className={`w-full h-0 border-${height} bg-gray-100`} />;
}
