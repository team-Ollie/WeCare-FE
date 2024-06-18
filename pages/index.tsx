import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Challenge from "@/components/home/challenge";
import { HomeCarousel } from "@/components/home/carousel";
import { HomeHeader } from "@/components/home/header";
import HomeChallenge from "@/components/home/challengeBox";
import FlexBox from "@/components/Flexbox";
import { ToastContainer, Zoom, toast } from "react-toastify";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const notify = () => {
    toast.success("챌린지가 성공적으로 인증되었습니다.", {
      position: "bottom-center",
      icon: ({ theme, type }) => (
        <Image src="/svgs/Check.svg" width={24} height={24} />
      ),
    });
  };

  return (
    <FlexBox direction="col" className="w-full h-full justify-between">
      <HomeChallenge onSuccess={notify} />
      <NavBar />
      <ToastContainer
        hideProgressBar={true}
        autoClose={1000}
        closeButton={false}
        transition={Zoom}
        pauseOnFocusLoss={false}
        limit={1}
      />
    </FlexBox>
  );
};

export default Home;
