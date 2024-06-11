import { useRouter } from "next/router";
import FlexBox from "./Flexbox";
import Image from "next/image";

interface Props {
  leftIcon?: boolean;
  title?: string;
  onClickIcon?: () => void;
}

export default function HeadFunction({
  leftIcon = true,
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
        {leftIcon && <Image src="/svgs/LeftArrow.svg" width={20} height={20} />}
      </div>
      <FlexBox className="w-full h-full justify-center">
        <div className="h2">{title}</div>
      </FlexBox>
      <div className="w-5 shrink-0" />
    </FlexBox>
  );
}
