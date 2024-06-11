import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { Challenge } from "./challenge";
import { HomeCarousel } from "./carousel";
import { useRouter } from "next/router";

export const HomeChallenge: NextPage = () => {
  const router = useRouter();

  return (
    <FlexBox direction="col" className="w-full items-start gap-2 p-4">
      <div className="h1">참여 중인 챌린지</div>
      <HomeCarousel />
      <Challenge />
      <Challenge />
      <div
        className="w-full text-center bg-main-100 rounded-lg py-2 h2 text-gray-700"
        onClick={() => router.push("/challenge/join")}
      >
        참여 프로그램 추가
      </div>
    </FlexBox>
  );
};
