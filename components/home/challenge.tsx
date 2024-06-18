import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { isAdminAtom } from "@/utils/atom";

interface ChallengeProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge: NextPage<ChallengeProps> = ({ setIsModalVisible }) => {
  const router = useRouter();
  const [isAdmin] = useAtom(isAdminAtom);

  return (
    <FlexBox direction="col" className="p-4 w-full rounded-lg border gap-4">
      <FlexBox
        direction="col"
        className="w-full gap-1"
        onClick={isAdmin ? null : () => router.push("/challenge")}
      >
        <FlexBox className="w-full justify-between items-start">
          <div className="h2">풍물패 두드림</div>
          <div className="h4 text-gray-500">12명 참여 중</div>
        </FlexBox>
        <div className="h4 self-start">서울시립도서관 4층 | 월 16시</div>
      </FlexBox>
      <FlexBox direction="col" className="w-full gap-1">
        <FlexBox
          className="w-full items-start justify-between"
          onClick={isAdmin ? null : () => router.push("/challenge")}
        >
          {!isAdmin && (
            <FlexBox className="gap-1">
              <div className="h5 text-gray-500">개인달성률</div>
              <div className="h3">100%</div>
            </FlexBox>
          )}
          <FlexBox className="gap-1">
            <div className="h5 text-gray-500">전체달성률</div>
            <div className="h3">100%</div>
          </FlexBox>
        </FlexBox>
        <div
          className="w-full border border-main-color rounded-lg py-2 text-center text-main-color h2"
          onClick={
            isAdmin
              ? () => router.push("/challenge")
              : () => setIsModalVisible(true)
          }
        >
          {isAdmin ? "현황 보러가기" : "인증하기"}
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
