import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { Challenge } from "./challenge";
import { HomeCarousel } from "./carousel";
import { useRouter } from "next/router";
import { isAdminAtom } from "@/utils/atom";
import { useAtom } from "jotai";

export const HomeChallenge: NextPage = () => {
  const router = useRouter();
  const [isAdmin] = useAtom(isAdminAtom);

  return (
    <FlexBox direction="col" className="w-full items-start gap-2 p-4">
      <div className="h1">
        {isAdmin ? "우리 센터에서 진행 중인 챌린지" : "참여 중인 챌린지"}
      </div>
      <HomeCarousel />
      <Challenge />
      <Challenge />
      <div
        className="w-full text-center bg-main-100 rounded-lg py-2 h2 text-gray-700"
        onClick={() => router.push("/challenge/join")}
      >
        {isAdmin ? "새 프로그램 등록" : "참여 프로그램 추가"}
      </div>
    </FlexBox>
  );
};
