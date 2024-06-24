import Image from "next/image";
import FlexBox from "../Flexbox";
import { useRouter } from "next/router";

interface ProfileProps {
  nickname: string;
  level: number;
}

export default function Profile({ nickname, level }: ProfileProps) {
  const router = useRouter();
  return (
    <FlexBox
      className="w-full py-7 px-6 justify-between"
      onClick={() => router.push("/mypage/profile")}
    >
      <FlexBox className="gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="h2">{nickname}</div>
        <Image src={"/svgs/badges/3.svg"} width={24} height={24} />
      </FlexBox>
      <Image src={"/svgs/RightArrow.svg"} width={20} height={20} />
    </FlexBox>
  );
}
