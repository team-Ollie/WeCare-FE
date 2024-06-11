import { NextPage } from "next";
import FlexBox from "../Flexbox";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export const PopularChallenge: NextPage = () => {
  return (
    <FlexBox
      direction="col"
      className="w-full mt-2 bg-gray-100 items-start p-4 min-w-0 flex-[0_0_100%]"
    >
      <div className="h5 text-gray-700">참여자가 가장 많은 챌린지 🔥</div>
      <div className="h2 mb-2">챌린지 이름</div>
      <div className="h4">서대문문화체육회관 축구장 | 수 14시</div>
    </FlexBox>
  );
};
