import { useGetMyInfo, usePatchLogout } from "@/apis/hooks/mypage";
import Divider from "@/components/Divider";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import Profile from "@/components/mypage/profile";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyPage: NextPage = () => {
  const router = useRouter();
  const { data } = useGetMyInfo();
  const { mutate } = usePatchLogout();

  const notify = () => {
    toast.info("이미 관리자 인증을 완료하셨습니다.", {
      position: "bottom-center",
    });
  };

  const certifyAdmin = () => {
    if (data.result.isAdmin) notify();
    else router.push("/mypage/admin");
  };

  const logout = () => {
    mutate();
  };

  return (
    <div className="w-full">
      <HeadFunction title="마이페이지" leftIcon={false} />
      <Profile nickname={data?.result.nickname} level={data?.result.level} />
      <Divider height={16} />
      <FlexBox direction="col" className="w-full gap-2">
        <div
          className="w-full py-4 px-6"
          // onClick={() => router.push("/mypage/setting")}
        >
          일반 설정
        </div>
        <div className="w-full py-4 px-6" onClick={certifyAdmin}>
          관리자 인증
        </div>
        <div
          className="w-full py-4 px-6"
          // onClick={() => router.push("/mypage/term")}
        >
          개인정보 처리방침
        </div>
        <div
          className="w-full py-4 px-6"
          // onClick={() => router.push("/mypage/service")}
        >
          서비스 이용약관
        </div>
        <div className="w-full py-4 px-6" onClick={logout}>
          로그아웃
        </div>
      </FlexBox>
      <NavBar />
      <ToastContainer
        hideProgressBar={true}
        autoClose={1000}
        closeButton={false}
        transition={Zoom}
        pauseOnFocusLoss={false}
        limit={1}
      />
    </div>
  );
};

export default MyPage;
