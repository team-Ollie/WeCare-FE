import Divider from "@/components/Divider";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import Profile from "@/components/mypage/profile";
import { NextPage } from "next";
import { useRouter } from "next/router";

const infoList = [
  {
    name: "일반설정",
    path: "/mypage/setting",
  },
  {
    name: "관리자 인증",
    path: "/mypage/admin",
  },
  {
    name: "개인정보 처리방침",
    path: "/mypage/term",
  },
  {
    name: "서비스 이용약관",
    path: "/mypage/service",
  },
  {
    name: "로그아웃",
    path: "/",
  },
];

const MyPage: NextPage = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <HeadFunction title="마이페이지" leftIcon={false} />
      <Profile />
      <Divider height={2} />
      <FlexBox direction="col" className="w-full gap-2">
        {infoList.map((info) => (
          <div
            className="w-full py-4 px-6"
            onClick={() => router.push(info.path)}
          >
            {info.name}
          </div>
        ))}
      </FlexBox>
      <NavBar />
    </div>
  );
};

export default MyPage;
