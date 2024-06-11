import HomeIcon from "@/public/svgs/HomeIcon.svg";
import CalenderIcon from "@/public/svgs/CalendarIcon.svg";
import MypageIcon from "@/public/svgs/MypageIcon.svg";
import { useRouter } from "next/router";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div className="min-h-[4rem] w-full" />
      <div
        className="flex flex-basis h-[4rem] w-full flex-row justify-between items-center fixed bottom-0 bg-white"
        style={{ borderTop: "0.5px solid rgba(112, 115, 124, 0.16)" }}
      >
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
      </div>
    </>
  );
};

export default NavBar;
