import Divider from "@/components/Divider";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter();
  const navigateToPasswordChange = () => {
    router.push("/mypage/password");
  };

  return (
    <FlexBox direction="col">
      <HeadFunction title="계정 정보" />
      <FlexBox className="w-full pt-3 pb-8 justify-center">
        <div className="w-[88px] h-[88px] rounded-full bg-gray-100" />
      </FlexBox>
      <FlexBox className="w-full px-6 py-4 justify-between">
        <div className="h4">닉네임</div>
        <div className="h4 text-gray-700">위케어 매니저</div>
      </FlexBox>
      <FlexBox className="w-full px-6 py-4 justify-between">
        <div className="h4">이메일 주소</div>
        <div className="h4 text-gray-700">email@wecare.com</div>
      </FlexBox>
      <Divider height={8} />
      <FlexBox direction="col" className="w-full items-end gap-2 px-6">
        <div
          className="underline h5 text-gray-500 pt-4 pb-2"
          onClick={navigateToPasswordChange}
        >
          비밀번호 수정
        </div>
        <div className="underline h5 text-gray-500 py-2">회원 탈퇴하기</div>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
