import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import { NextPage } from "next";

const CertifyAdmin: NextPage = () => {
  return (
    <div className="w-full h-full">
      <HeadFunction title="관리자 인증" />
      <FlexBox className="w-full h-[calc(100%-60px-4rem)] justify-center items-center overflow-hidden">
        <div className="text-center h4">
          <span className="underline mr-1">wecare@gmail.com</span>
          으로 관련 서류를 보내주시면
          <br />
          2-3일 내에 인증이 완료됩니다.
        </div>
      </FlexBox>
      <NavBar />
    </div>
  );
};

export default CertifyAdmin;
