import { NextPage } from "next";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import FlexBox from "@/components/Flexbox";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const lottieRef = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("@/public/lotties/Error.json"),
    });
  });
  return (
    <FlexBox direction="col" className="w-full h-full justify-center">
      <div className="w-1/5 aspect-square" ref={lottieRef} />
      <div className="h4 text-center mb-12">
        오류가 발생했습니다. 다시 시도해주세요.
      </div>
      <div className="w-full px-6">
        <Button
          text="홈으로"
          style="bg-main-100 text-grey-900"
          onClick={() => router.push("/")}
        />
      </div>
    </FlexBox>
  );
};

export default ErrorPage;
