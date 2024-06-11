import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { Challenge } from "./challenge";

export const HomeChallenge: NextPage = () => {
  return (
    <FlexBox direction="col" className="w-full items-start gap-2">
      <div className="h1">참여 중인 챌린지</div>
      <Challenge />
      <div className="w-full text-center bg-main-100 rounded-lg py-2 h2 text-gray-700">
        참여 프로그램 추가
      </div>
    </FlexBox>
  );
};
