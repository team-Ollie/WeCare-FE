interface AwardProps {
  style?: string;
  text: string;
  percent: string;
}

export default function AwardBox({ style, text, percent }: AwardProps) {
  return (
    <p
      className={`${style} font-normal text-transparent text-base tracking-[-0.32px] leading-10`}
    >
      <span className="h2 text-main-color tracking-[-0.05px]">
        {text}
        <br />
      </span>
      <span className="font-bold text-black text-[28px] tracking-[-0.09px]">
        {percent}
      </span>
    </p>
  );
}
