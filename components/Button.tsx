interface ButtonProps {
  style?: string;
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  style,
  text,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`${style} w-full rounded-lg text-center p-2 h4`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
