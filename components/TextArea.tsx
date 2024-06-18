import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

export interface TextInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  errorText?: string;
  placeholder?: string;
}

export default function TextArea({
  value,
  setValue,
  isError,
  placeholder = "",
  errorText,
}: TextInputProps) {
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full relative">
      <div
        className={`w-full border ${
          isError ? "border-red-500" : "border-transparent"
        } bg-gray-100 rounded-lg p-2`}
      >
        <textarea
          className="w-full outline-none border-none bg-gray-100 h4"
          value={value}
          onChange={(event) => onChangeText(event)}
          placeholder={placeholder}
          style={{ resize: "none" }}
        />
      </div>
      {isError && (
        <div className="text-red-500 h5 px-2 absolute">{errorText}</div>
      )}
    </div>
  );
}
