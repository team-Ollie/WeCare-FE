import { NextPage } from "next";
import FlexBox from "../Flexbox";
import { useRouter } from "next/router";
import { Challenge as ChallengeType } from "@/apis/challenge";
import { usePostAttendanceCode } from "@/apis/hooks/admin";

interface ChallengeProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  challengeInfo: ChallengeType;
}

const AdminChallenge: NextPage<ChallengeProps> = ({
  setIsModalVisible,
  challengeInfo,
}) => {
  const router = useRouter();
  const { mutate } = usePostAttendanceCode(challengeInfo.challengeIdx);

  const showAttendanceCode = () => mutate();

  return (
    <FlexBox direction="col" className="p-4 w-full rounded-lg border gap-4">
      <FlexBox direction="col" className="w-full gap-1">
        <FlexBox className="w-full justify-between items-start">
          <div className="h2">{challengeInfo.name}</div>
        </FlexBox>
        <div className="h4 self-start">
          {challengeInfo.location} | {challengeInfo.schedule}
        </div>
      </FlexBox>
      <FlexBox direction="col" className="w-full gap-2">
        <FlexBox className="gap-1 w-full">
          <div className="h5 text-grey-500">전체달성률</div>
          <div className="h3">
            {challengeInfo.totalAttendanceRate}%(
            {challengeInfo.participantsNum}명)
          </div>
        </FlexBox>
        <FlexBox className="w-full gap-2">
          <div
            className="w-full border border-main-color rounded-lg py-2 text-center text-main-color h3"
            onClick={showAttendanceCode}
          >
            인증번호 보기
          </div>
          <div
            className="w-full border border-main-color rounded-lg py-2 text-center text-main-color h3"
            onClick={() => router.push("/challenge")}
          >
            현황 보러가기
          </div>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default AdminChallenge;
