import { Challenge } from "@/apis/challenge";
import FlexBox from "../Flexbox";
import { usePostNewChallenge } from "@/apis/hooks/challenge";

interface SearchResultProps {
  notify: (title: string) => void;
  challengeInfo: Challenge;
}

export default function SearchResult({
  notify,
  challengeInfo,
}: SearchResultProps) {
  const { mutate } = usePostNewChallenge(
    challengeInfo.challengeIdx,
    challengeInfo.name,
    notify,
  );

  const onClick = () => mutate();

  return (
    <FlexBox className="w-full border-b p-2 justify-between">
      <FlexBox direction="col" className="gap-1 items-start">
        <div className="h3">{challengeInfo.name}</div>
        <div className="h4 text-grey-700">
          {challengeInfo.locatedPlace ? `${challengeInfo.locatedPlace} | ` : ""}{" "}
          매주 {challengeInfo.schedule}요일
        </div>
      </FlexBox>
      <div className="h2 text-main-color p-2" onClick={onClick}>
        참여
      </div>
    </FlexBox>
  );
}
