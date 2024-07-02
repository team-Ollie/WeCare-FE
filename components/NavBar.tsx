import HomeIcon from "@/public/svgs/HomeIcon.svg";
import CalenderIcon from "@/public/svgs/CalendarIcon.svg";
import MypageIcon from "@/public/svgs/MypageIcon.svg";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";
import { useEffect } from "react";
import FlexBox from "./Flexbox";

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full min-h-[4rem]" />
      <div
        className="flex flex-basis h-[4rem] w-full fixed inset-x-0 bottom-0 z-20"
        style={{
          borderTop: "0.5px solid rgba(112, 115, 124, 0.16)",
          backgroundColor: "#ffffff",
        }}
      >
        <FlexBox className="w-full justify-between">
          <NavBarItem
            isActive={pathname === "/"}
            text="홈"
            onClick={() => handleNavigate("/")}
            iconType="home"
          >
            <HomeIcon />
          </NavBarItem>
          <NavBarItem
            isActive={pathname === "/calendar"}
            text="캘린더"
            onClick={() => handleNavigate("/calendar")}
            iconType="calendar"
          >
            <CalenderIcon />
          </NavBarItem>
          <NavBarItem
            isActive={pathname === "/mypage"}
            text="마이페이지"
            onClick={() => handleNavigate("/mypage")}
            iconType="mypage"
          >
            <MypageIcon />
          </NavBarItem>
        </FlexBox>
      </div>
    </>
  );
};

export default NavBar;
