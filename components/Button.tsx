interface ButtonProps {
  style?: string;
  text: string;
  onClick: () => void;
}

export default function Button({ style, text, onClick }: ButtonProps) {
  return (
    <div
      className={`${style} w-full rounded-lg text-center p-2 h4`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
