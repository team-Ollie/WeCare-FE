import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export interface TextInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  errorText?: string;
  isSuccess: boolean;
  placeholder?: string;
}

export default function NicknameInput({
  value,
  setValue,
  isError,
  errorText,
  isSuccess,
  placeholder = "",
}: TextInputProps) {
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const borderStyle = () => {
    if (isSuccess) return "border-green-600";
    else if (isError) return "border-red-500";
    return "border-transparent";
  };

  return (
    <div className="w-full relative">
      <div
        className={`w-full border ${borderStyle()} bg-gray-100 rounded-lg p-2`}
      >
        <input
          className="w-full outline-none border-none bg-gray-100 h4"
          value={value}
          onChange={(event) => onChangeText(event)}
          placeholder={placeholder}
        />
      </div>
      {!isSuccess && isError && (
        <div className="text-red-500 h5 px-2 absolute">{errorText}</div>
      )}
      {isSuccess && (
        <div className="text-green-600 h5 px-2 absolute">
          사용 가능한 닉네임입니다.
        </div>
      )}
    </div>
  );
}
