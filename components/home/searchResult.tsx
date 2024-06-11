import FlexBox from "../Flexbox";

export default function SearchResult() {
  return (
    <FlexBox className="w-full border-b p-2 justify-between">
      <FlexBox direction="col" className="gap-1 items-start">
        <div className="h3">풍물패 두드림</div>
        <div className="h4 text-gray-700">서울시립도서관 4층 | 월 16시</div>
      </FlexBox>
      <div className="h2 text-main-color p-2">참여</div>
    </FlexBox>
  );
}
