import { GetProgramDetailBody } from "@/apis/calendar";
import { useGetProgramDetail } from "@/apis/hooks/calendar";
import Close from "@/public/svgs/Close.svg";

const CalendarModal = ({
  programIdx,
  toggleModal,
}: {
  programIdx: number;
  toggleModal: () => void;
}) => {
  const { data }: { data: GetProgramDetailBody } =
    useGetProgramDetail(programIdx);

  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-center fixed bg-[rgba(1,0,0,0.4)] z-10"
      key={programIdx}
    >
      <div className="flex flex-col relative items-center justify-center w-[80%] h-[60%] bg-white z-10 rounded-xl py-5 px-8 gap-3">
        <Close className="absolute right-3 top-3" onClick={toggleModal} />
        <div className="h0 text-main-color h-fit">{data.name}</div>
        <div className="flex flex-col mt-3 flex-grow h-full w-full gap-3 overflow-auto scrollbar-hide">
          {data.locatedPlace && (
            <TextLine title="위치" className="" children={data.locatedPlace} />
          )}

          <TextLine title="기간">
            {data.openDate.year}년 {data.openDate.month}월 {data.openDate.day}일
            {" ~ "}
            {data.dueDate.year}년 {data.dueDate.month}월 {data.dueDate.day}일
          </TextLine>

          <TextLine title="주관센터" className="" children={data.host} />
          <TextLine
            title="활동 요일"
            className=""
            children={data.schedule}
            addExpFront="매주 "
            addExpBack="요일마다"
          />
          {data.location && (
            <TextLine title="지역" className="" children={data.location} />
          )}
          <TextLine
            title="기타 사항"
            className=""
            children={data.description}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;

interface TextProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  addExpFront?: string;
  addExpBack?: string;
}

function TextLine({
  title,
  className,
  children,
  addExpFront,
  addExpBack,
}: TextProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="h3">{title}</div>
      <div className={`flex h4 ${className}`}>
        {addExpFront}
        {children}
        {addExpBack}
      </div>
    </div>
  );
}
