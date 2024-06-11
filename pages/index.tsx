import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import FlexBox from "@/components/Flexbox";

import { Challenge } from "@/components/home/challenge";
import { HomeCarousel } from "@/components/home/carousel";
import { HomeChallenge } from "@/components/home/challengeBox";
import { HomeHeader } from "@/components/home/header";

const Home: NextPage = () => {
  return (
    <FlexBox direction="col" className="w-full h-full justify-between">
      <div className="w-full px-4">
        <HomeHeader />
        <HomeChallenge />
      </div>
      <div>
        <HomeCarousel />
        <NavBar />
      </div>
    </FlexBox>
  );
};

export default Home;
