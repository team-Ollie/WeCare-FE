import { NextPage } from "next";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import FlexBox from "@/components/Flexbox";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const NicknameChangeSuccess: NextPage = () => {
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
    <FlexBox direction="col" className="w-full h-full justify-center">
      <div className="w-1/5 aspect-square" ref={lottieRef} />
      <div className="h4 text-center mb-12">
        닉네임이 성공적으로 변경되었습니다!
      </div>
      <div className="grid grid-cols-2 gap-2 w-full px-6">
        <Button
          text="홈"
          style="bg-main-100 text-grey-900"
          onClick={() => router.push("/")}
        />
        <Button
          text="마이페이지"
          style="bg-main-100 text-grey-900"
          onClick={() => router.push("/mypage")}
        />
      </div>
    </FlexBox>
  );
};

export default NicknameChangeSuccess;
