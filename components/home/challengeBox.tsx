import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { Challenge } from "./challenge";
import { HomeCarousel } from "./carousel";
import { useRouter } from "next/router";
import { isAdminAtom } from "@/utils/atom";
import { useAtom } from "jotai";
import CertifyModal from "./certifyModal";
import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";

export const HomeChallenge: NextPage = () => {
  const router = useRouter();
  const [isAdmin] = useAtom(isAdminAtom);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onClickCertifyBtn = () => {
    setIsOpen(false);
  };

  return (
    <FlexBox direction="col" className="w-full items-start gap-2 p-4">
      <div className="h1">
        {isAdmin ? "우리 센터에서 진행 중인 챌린지" : "참여 중인 챌린지"}
      </div>
      <HomeCarousel />
      <Challenge />
      <Challenge />
      <div
        className="w-full text-center bg-main-100 rounded-lg py-2 h2 text-gray-700"
        onClick={() => router.push("/challenge/join")}
      >
        {isAdmin ? "새 프로그램 등록" : "참여 프로그램 추가"}
      </div>
      <ReactModal isOpen={isOpen} style={modalStyle}>
        <CertifyModal onClick={onClickCertifyBtn} />
      </ReactModal>
    </FlexBox>
  );
};

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
  },
  content: {
    width: "80%",
    height: "fit-content",
    zIndex: 100,
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 12,
    padding: 16,
  },
};
