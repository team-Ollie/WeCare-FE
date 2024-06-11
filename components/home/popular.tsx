import { NextPage } from "next";
import FlexBox from "../Flexbox";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export const PopularChallenge: NextPage = () => {
  return (
    <FlexBox
      direction="col"
      className="w-full bg-gray-100 items-start p-4 min-w-0 flex-[0_0_100%]"
    >
      <div className="h5 text-gray-700">참여자가 가장 많은 챌린지 🔥</div>
      <div className="h2">레전드 영화보기 챌린지</div>
    </FlexBox>
  );
};
