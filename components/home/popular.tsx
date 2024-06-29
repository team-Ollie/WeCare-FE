import { NextPage } from "next";
import FlexBox from "../Flexbox";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Challenge } from "@/apis/challenge";

interface PopularChallengeProps {
  challengeInfo: Challenge;
  type:
    | "mostParticipatedChallenge"
    | "mostAttendancedChallenge"
    | "mostRecentlyStartedChallenge";
}

export default function PopularChallenge({
  challengeInfo,
  type,
}: PopularChallengeProps) {
  const returnTitle = () => {
    switch (type) {
      case "mostAttendancedChallenge":
        return "출석률이 가장 높은 챌린지 🔥";
        break;
      case "mostParticipatedChallenge":
        return "참여자가 가장 많은 챌린지 🔥";
        break;
      case "mostRecentlyStartedChallenge":
        return "가장 최근에 개설된 챌린지 🔥";
        break;
    }
  };

  return (
    <FlexBox
      direction="col"
      className="w-full bg-gray-100 items-start p-4 min-w-0 flex-[0_0_100%]"
    >
      <div className="h5 text-gray-700">{returnTitle()}</div>
      <div className="h2">{challengeInfo?.name}</div>
    </FlexBox>
  );
}
