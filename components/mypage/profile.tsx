import FlexBox from "../Flexbox";
import { useRouter } from "next/router";
import RightArrowIcon from "@/public/svgs/RightArrow.svg";
import Level1Icon from "@/public/svgs/badges/1.svg";
import Level2Icon from "@/public/svgs/badges/2.svg";
import Level3Icon from "@/public/svgs/badges/3.svg";
import Level4Icon from "@/public/svgs/badges/4.svg";
import Level5Icon from "@/public/svgs/badges/5.svg";
import Level6Icon from "@/public/svgs/badges/6.svg";

interface ProfileProps {
  nickname: string;
  level: number;
}

export default function Profile({ nickname, level }: ProfileProps) {
  const router = useRouter();

  const returnBadge = () => {
    switch (level) {
      case 1:
        return <Level1Icon width={24} height={24} />;
        break;
      case 2:
        return <Level2Icon width={24} height={24} />;
        break;
      case 3:
        return <Level3Icon width={24} height={24} />;
        break;
      case 4:
        return <Level4Icon width={24} height={24} />;
        break;
      case 5:
        return <Level5Icon width={24} height={24} />;
        break;
      case 6:
      default:
        return <Level6Icon width={24} height={24} />;
        break;
    }
  };
  return (
    <FlexBox
      className="w-full py-7 px-6 justify-between"
      onClick={() => router.push("/mypage/profile")}
    >
      <FlexBox className="gap-2">
        <div className="w-10 h-10 rounded-full bg-grey-200" />
        <div className="h2">{nickname}</div>
        {returnBadge()}
      </FlexBox>
      <RightArrowIcon width={20} height={20} />
    </FlexBox>
  );
}
