import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { useRouter } from "next/router";
import { Challenge as ChallengeType } from "@/apis/challenge";

interface ChallengeProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  challengeInfo: ChallengeType;
}

const Challenge: NextPage<ChallengeProps> = ({
  setIsModalVisible,
  challengeInfo,
}) => {
  const router = useRouter();

  return (
    <FlexBox direction="col" className="p-4 w-full rounded-lg border gap-4">
      <FlexBox
        direction="col"
        className="w-full gap-1"
        onClick={() => router.push("/challenge")}
      >
        <FlexBox className="w-full justify-between items-start">
          <div className="h2">{challengeInfo.name}</div>
          <div className="h4 text-gray-500">
            {challengeInfo.participantsNum}명 참여 중
          </div>
        </FlexBox>
        <div className="h4 self-start">
          {challengeInfo.location} | {challengeInfo.schedule}
        </div>
      </FlexBox>
      <FlexBox direction="col" className="w-full gap-1">
        <FlexBox
          className="w-full items-start justify-between"
          onClick={() => router.push("/challenge")}
        >
          <FlexBox className="gap-1">
            <div className="h5 text-gray-500">개인달성률</div>
            <div className="h3">{challengeInfo.attendanceRate}%</div>
          </FlexBox>
          <FlexBox className="gap-1">
            <div className="h5 text-gray-500">전체달성률</div>
            <div className="h3">{challengeInfo.totalAttendanceRate}%</div>
          </FlexBox>
        </FlexBox>
        <div
          className="w-full border border-main-color rounded-lg py-2 text-center text-main-color h2"
          onClick={() => setIsModalVisible(true)}
        >
          인증하기
        </div>
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
