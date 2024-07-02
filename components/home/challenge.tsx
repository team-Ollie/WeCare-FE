import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { useRouter } from "next/router";
import { Challenge as ChallengeType } from "@/apis/challenge";
import { useAtom } from "jotai";
import { challengeIdxAtom } from "@/utils/atom";

interface ChallengeProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  challengeInfo: ChallengeType;
}

const Challenge: NextPage<ChallengeProps> = ({
  setIsModalVisible,
  challengeInfo,
}) => {
  const router = useRouter();
  const [, setChallengeIdx] = useAtom(challengeIdxAtom);

  const onClickCertifyBtn = () => {
    setChallengeIdx(challengeInfo.challengeIdx);
    setIsModalVisible(true);
  };

  return (
    <FlexBox direction="col" className="p-4 w-full rounded-lg border gap-4">
      <FlexBox
        direction="col"
        className="w-full gap-1"
        onClick={() => router.push("/challenge")}
      >
        <FlexBox className="w-full justify-between items-start">
          <div className="h2">{challengeInfo.name}</div>
          <div className="h4 text-grey-500">
            {challengeInfo.participantsCount}명 참여 중
          </div>
        </FlexBox>
        <div className="h4 self-start">
          {challengeInfo.locatedPlace ? `${challengeInfo.locatedPlace} | ` : ""}
          매주 {challengeInfo.schedule}요일
        </div>
      </FlexBox>
      <FlexBox direction="col" className="w-full gap-1">
        <FlexBox
          className="w-full items-start justify-between"
          onClick={() => router.push("/challenge")}
        >
          <FlexBox className="gap-1">
            <div className="h5 text-grey-500">개인달성률</div>
            <div className="h3">{challengeInfo.myAttendanceRate}%</div>
          </FlexBox>
          <FlexBox className="gap-1">
            <div className="h5 text-grey-500">전체달성률</div>
            <div className="h3">{challengeInfo.totalAttendanceRate}%</div>
          </FlexBox>
        </FlexBox>
        <div
          className="w-full border border-main-color rounded-lg py-2 text-center text-main-color h2"
          onClick={onClickCertifyBtn}
        >
          인증하기
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
