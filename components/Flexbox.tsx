interface FlexBoxProps {
  className?: string;
  direction?: "row" | "col";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function FlexBox({
  className,
  direction,
  children,
  onClick,
}: FlexBoxProps) {
  return (
    <div
      className={`flex ${
        direction === "col" ? "flex-col" : "flex-row"
      } ${className} ${className?.includes("items-") ? "" : "items-center"}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
