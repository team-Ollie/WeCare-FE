import React, { ReactNode } from "react";

interface NavBarItemProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
  iconType: "home" | "calendar" | "mypage";
  children: ReactNode;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  isActive,
  children,
  text,
  onClick,
}) => {
  // 활성화 및 비활성화 클래스
  const activeClasses = isActive ? "text-main-color" : "text-grey-500";
  // 공통 클래스
  const commonClasses =
    "flex flex-col items-center justify-center hover:cursor-pointer w-[6rem]";
  // 텍스트 클래스
  const textClasses = "mt-1 text-xs";

  // 조합된 클래스
  const combinedClasses = `${commonClasses} ${activeClasses}`;

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
      <span className={textClasses}>{text}</span>
    </div>
  );
};

export default NavBarItem;
