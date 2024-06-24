import AwardBox from "@/components/challenge/AwardBox";
import ChallengeCalendar from "@/components/challenge/ChallengeCalendar";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import BackIcon from "@/public/svgs/Back.svg";
import { NextPage } from "next";

const Challenge: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <HeadFunction title="챌린지" />
      <div className="flex-grow flex flex-col px-[1rem] py-[0.5rem] items-center overflow-auto mt-[1.5rem] scrollbar-hide">
        <div className="h-fit w-full flex flex-row justify-between items-end px-[1rem]">
          <span className="h-[1.5rem] text-[1.5rem] h0 tracking-[-0.32px] leading-[21px]">
            아크릴 유화 기초
          </span>
          <div className="text-black text-[1rem] tracking-[0.38px] leading-[20.0px]">
            8명 참여중
          </div>
        </div>

        <div className="flex mt-[3rem]">
          <ChallengeCalendar />
        </div>

        <div className="w-full flex flex-col justify-center px-[1rem]">
          <div className="w-[212px] h1 text-[#3a3a3c] tracking-[0] leading-[normal] mt-[0.25rem] mb-[1rem]">
            챌린지 달성률
          </div>
          <div className="flex flex-row justify-between w-[75%]">
            <AwardBox text="전체 달성률" percent="50%" />
            <AwardBox text="개인 달성률" percent="50%" />
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Challenge;
