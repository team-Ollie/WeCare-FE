import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import { Challenge } from "@/components/home/challenge";
import { HomeCarousel } from "@/components/home/carousel";
import { HomeChallenge } from "@/components/home/challengeBox";
import { HomeHeader } from "@/components/home/header";
import FlexBox from "@/components/Flexbox";

const Home: NextPage = () => {
  return (
    <FlexBox direction="col" className="w-full h-full justify-between">
      <HomeChallenge />
      <NavBar />
    </FlexBox>
  );
};

export default Home;
