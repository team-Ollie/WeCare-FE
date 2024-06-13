import { InputError } from "@/pages/mypage/password";
import FlexBox from "../Flexbox";
import TextInput from "../Input";
import { useState } from "react";

interface CertifyModalProps {
  onClick: () => void;
}

export default function CertifyModal({ onClick }: CertifyModalProps) {
  const [number, setNumber] = useState<string>("");
  const [numError, setNumError] = useState<InputError>({
    status: false,
    text: "",
  });

  return (
    <>
      <div className="h3 mb-4">풍물패 두드림 챌린지 인증하기</div>
      <FlexBox className="w-full gap-1  mb-3">
        <TextInput
          value={number}
          setValue={setNumber}
          isError={numError.status}
          errorText={numError.text}
          placeholder="인증번호를 입력하세요"
        />
        <button
          className="shrink-0 p-2 bg-main-color text-white rounded-lg h3"
          onClick={onClick}
        >
          인증
        </button>
      </FlexBox>
    </>
  );
}
