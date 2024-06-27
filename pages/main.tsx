import Button from "@/components/Button";
import SplashIcon from "@/public/svgs/SplashIcon.svg";
import { NextPage } from "next";
import { useRouter } from "next/router";

const OnBoardingMain: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <SplashIcon />
      <div className="flex w-[80%] flex-col h-fit absolute gap-[0.5rem] bottom-12">
        <Button
          text="회원가입"
          style="w-full bg-main-100 py-[0.8rem] h2 text-gray-700"
          onClick={() => router.push("./signup")}
        />
        <Button
          text="로그인"
          style="w-full bg-main-100 py-[0.8rem] h2 text-gray-700"
          onClick={() => router.push("./login")}
        />
      </div>
    </div>
  );
};

export default OnBoardingMain;
