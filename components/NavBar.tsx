"use client";

// import { HomeIcon, CalendarIcon, MypageIcon } from "@/public/svgs/bottomTab";
import NavBarItem from "./Navbaritem";
import { useRouter } from "next/router";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className="flex flex-basis h-[4rem] w-full flex-row justify-between items-center"
      style={{ borderTop: "0.5px solid rgba(112, 115, 124, 0.16)" }}
    >
      <NavBarItem
        isActive={pathname === "/"}
        text="홈"
        onClick={() => handleNavigate("/")}
        iconType="home"
      >
        {/* <HomeIcon /> */}
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/calendar"}
        text="캘린더"
        onClick={() => handleNavigate("/calendar")}
        iconType="calendar"
      >
        {/* <CalendarIcon /> */}
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/mypage"}
        text="마이페이지"
        onClick={() => handleNavigate("/mypage")}
        iconType="mypage"
      >
        {/* <MypageIcon /> */}
      </NavBarItem>
    </div>
  );
};

export default NavBar;
