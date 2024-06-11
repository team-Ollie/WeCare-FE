import { NextPage } from "next";
import FlexBox from "../Flexbox";
import Image from "next/image";
import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ value, setValue }: SearchBarProps) {
  const onPressResetBtn = () => {
    setValue("");
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full px-4 pb-4">
      <FlexBox className="rounded-lg bg-gray-100 py-2 px-4 gap-2">
        <Image src={"/svgs/Search.svg"} width={24} height={24} />
        <input
          type="text"
          className="w-full outline-none border-none bg-gray-100 text-h4"
          value={value}
          onChange={(event) => onChangeText(event)}
          placeholder="프로그램 이름을 검색해보세요!"
        />
        <div onClick={onPressResetBtn}>
          <Image src={"/svgs/Close.svg"} width={16} height={16} />
        </div>
      </FlexBox>
    </div>
  );
}
