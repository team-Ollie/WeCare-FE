import { NextPage } from "next";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import FlexBox from "@/components/Flexbox";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const SignupSuccess: NextPage = () => {
  const router = useRouter();
  const lottieRef = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("@/public/lotties/Check.json"),
    });
  });

  return (
    <div className="w-screen h-screen flex flex justify-center items-center">
      <FlexBox
        direction="col"
        className="w-[90%] h-full items-center justify-center"
      >
        <div className="w-1/5 aspect-square" ref={lottieRef} />
        <div className="h4 text-center mb-12">회원가입을 완료하였습니다!</div>

        <Button
          text="로그인하러 가기"
          style="bg-main-100 text-grey-900"
          onClick={() => router.push("/main")}
        />
      </FlexBox>
    </div>
  );
};

export default SignupSuccess;
