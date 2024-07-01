import { usePostProgram } from "@/apis/hooks/admin";
import Button from "@/components/Button";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import NavBar from "@/components/NavBar";
import ChallengeInput from "@/components/challenge/ChallengeInput";
import dayjs from "dayjs";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import "dayjs/locale/ko";
dayjs.locale("ko");

const AddChallenge: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [host, setHost] = useState<string>("");

  const { mutate } = usePostProgram();

  const registerProgram = () => {
    mutate({
      name,
      dueDate: {
        year: Number(dayjs(endDate).format("YYYY")),
        month: Number(dayjs(endDate).format("M")),
        day: Number(dayjs(endDate).format("D")),
      },
      startDate: {
        year: Number(dayjs(startDate).format("YYYY")),
        month: Number(dayjs(startDate).format("M")),
        day: Number(dayjs(startDate).format("D")),
      },
      location: location,
      host: "임시host",
      schedule: dayjs(endDate).format("ddd"),
      description:
        detail.trim().length === 0
          ? `담당자 전화번호: ${phoneNum}`
          : detail.concat("\n담당자 전화번호: ${phoneNum}"),
    });
  };

  return (
    <div className="w-full">
      <HeadFunction title="프로그램 등록" />
      <FlexBox className="w-full px-4 gap-8 pb-8" direction="col">
        <FlexBox className="w-full gap-4 mt-4" direction="col">
          <ChallengeInput
            title="프로그램 이름"
            inputType="text"
            value={name}
            setValue={setName}
            isError={false}
          />
          <ChallengeInput
            title="진행 기간"
            inputType="calendar"
            value={startDate}
            setValue={setStartDate}
            value2={endDate}
            setValue2={setEndDate}
            isError={false}
          />
          <ChallengeInput
            title="위치"
            inputType="text"
            value={location}
            setValue={setLocation}
            isError={false}
            placeholder="기관명 또는 도로명주소"
          />
          <ChallengeInput
            title="태그"
            inputType="dropdown"
            value={location}
            setValue={setLocation}
            value2={endDate}
            setValue2={setEndDate}
            isError={false}
            placeholder="기관명 또는 도로명주소"
          />
          <ChallengeInput
            title="주최 기관"
            inputType="text"
            value={host}
            setValue={setHost}
            isError={false}
          />
          <ChallengeInput
            title="담당자 전화번호"
            inputType="text"
            value={phoneNum}
            setValue={setPhoneNum}
            isError={false}
            type="tel"
            placeholder="숫자만 입력 ( - 제외)"
          />
          <ChallengeInput
            title="추가 사항(선택)"
            inputType="textarea"
            value={detail}
            setValue={setDetail}
            isError={false}
            placeholder="추가할 내용이 있다면 이 곳에 적어주세요"
          />
        </FlexBox>
        <Button
          text="등록하기"
          onClick={registerProgram}
          style="bg-main-color text-white h3 disabled:bg-grey-300 disabled:text-grey-500"
          disabled={
            name.length === 0 ||
            startDate.length === 0 ||
            endDate.length === 0 ||
            location.length === 0 ||
            phoneNum.length === 0
          }
        />
      </FlexBox>
      <NavBar />
    </div>
  );
};

export default AddChallenge;
