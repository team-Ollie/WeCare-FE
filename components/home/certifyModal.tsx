import { InputError } from "@/pages/mypage/password";
import FlexBox from "../Flexbox";
import TextInput from "../Input";
import { useState } from "react";
import CloseIcon from "@/public/svgs/Close.svg";
import { usePostAttendance } from "@/apis/hooks/challenge";
import { useAtom } from "jotai";
import { challengeIdxAtom } from "@/utils/atom";

interface CertifyModalProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  notify: (msg: string) => void;
}

export default function CertifyModal({
  setIsModalVisible,
  notify,
}: CertifyModalProps) {
  const [number, setNumber] = useState<string>("");
  const [numError, setNumError] = useState<InputError>({
    status: false,
    text: "",
  });

  const [challengeIdx] = useAtom(challengeIdxAtom);
  const { mutate } = usePostAttendance(challengeIdx);

  const onCertify = () => {
    if (number.length === 0)
      setNumError({
        status: true,
        text: "인증번호가 입력되지 않았습니다.",
      });
    else {
      mutate(number);
      setIsModalVisible(false);
    }
  };

  return (
    <>
      <FlexBox className="justify-between items-start">
        <div className="h3 mb-4">챌린지 인증하기</div>
        <div onClick={() => setIsModalVisible(false)}>
          <CloseIcon width={20} height={20} />
        </div>
      </FlexBox>
      <FlexBox className="w-full gap-1 mb-3">
        <TextInput
          value={number}
          setValue={setNumber}
          isError={numError.status}
          errorText={numError.text}
          placeholder="인증번호를 입력하세요"
        />
        <button
          className="shrink-0 p-2 bg-main-color text-white rounded-lg h3"
          onClick={onCertify}
        >
          인증
        </button>
      </FlexBox>
    </>
  );
}
