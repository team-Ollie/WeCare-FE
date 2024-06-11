import { useRouter } from "next/router";
import FlexBox from "./Flexbox";
import Image from "next/image";

interface Props {
  type?: "back" | "cancel";
  title?: string;
  onClickIcon?: () => void;
}

export default function HeadFunction({
  type = "back",
  title,
  onClickIcon,
}: Props) {
  const router = useRouter();
  return (
    <FlexBox className="w-full h-[60px] px-4">
      <div
        className="w-5 h-5 shrink-0 items-center align-center"
        onClick={router.back}
      >
        <Image src="/svgs/LeftArrow.svg" width={20} height={20} />
      </div>
      <FlexBox className="w-full h-full justify-center">
        <div className="h2">{title}</div>
      </FlexBox>
      <div className="w-5 shrink-0" />
    </FlexBox>
  );
}
