import { useGetMyInfo } from "@/apis/hooks/mypage";
import Divider from "@/components/Divider";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter();
  const { data } = useGetMyInfo();

  return (
    <FlexBox direction="col">
      <HeadFunction title="계정 정보" />
      <FlexBox className="w-full pt-3 pb-8 justify-center">
        <div className="w-[88px] h-[88px] rounded-full bg-gray-100" />
      </FlexBox>
      <FlexBox className="w-full px-6 py-4 justify-between">
        <div className="h4">닉네임</div>
        <div className="h4 text-gray-700">{data?.result.nickname}</div>
      </FlexBox>
      <FlexBox className="w-full px-6 py-4 justify-between">
        <div className="h4">아이디</div>
        <div className="h4 text-gray-700">{data?.result.loginId}</div>
      </FlexBox>
      <Divider height={8} />
      <FlexBox direction="col" className="w-full items-end gap-2 px-6">
        <div
          className="underline h5 text-gray-500 pt-4 pb-2"
          onClick={() => router.push("/mypage/password")}
        >
          닉네임 변경
        </div>
        <div
          className="underline h5 text-gray-500 py-2"
          onClick={() => router.push("/mypage/password")}
        >
          비밀번호 변경
        </div>
        <div
          className="underline h5 text-gray-500 py-2"
          onClick={() => router.push("/mypage/quit")}
        >
          회원 탈퇴하기
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export default Profile;
