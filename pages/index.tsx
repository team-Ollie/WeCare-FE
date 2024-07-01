import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import Challenge from "@/components/home/challenge";
import HomeCarousel from "@/components/home/carousel";
import HomeChallenge from "@/components/home/challengeBox";
import FlexBox from "@/components/Flexbox";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@/public/svgs/Check.svg";
import { atom, useAtomValue } from "jotai";
import { isAdminAtom } from "@/utils/atom";

const Home: NextPage = () => {
  const notify = (msg: string) => {
    toast.success(msg, {
      position: "bottom-center",
      icon: ({ theme, type }) => <CheckIcon width={24} height={24} />,
    });
  };

  //isAdmin
  const isAdmin = useAtomValue(isAdminAtom);
  console.log("atom: ", isAdmin);

  return (
    <FlexBox direction="col" className="w-full h-full justify-between">
      <HomeChallenge onNotify={notify} />
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
