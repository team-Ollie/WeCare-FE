import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import { NextPage } from "next";
import { useState } from "react";
import { InputError } from "../password";
import {
  usePatchNicknameChange,
  usePostNicknameCheck,
} from "@/apis/hooks/mypage";
import Button from "@/components/Button";
import NicknameInput from "@/components/mypage/NicknameInput";

const ChangeNickName: NextPage = () => {
  const [newName, setNewname] = useState<string>("");
  const [tempName, setTempName] = useState<string>(""); // onClickCheckBtn를 가장 마지막 실행했을 때의 닉네임
  const [nameError, setNameError] = useState<InputError>({
    status: false,
    text: "",
  });

  const { mutate: nameCheckMutate } = usePostNicknameCheck(
    newName,
    setNameError,
  );
  const { mutate: nameChangeMutate } = usePatchNicknameChange(newName);

  const checkNicknameValidity = () => {
    setTempName(newName);
    if (newName.length > 8) {
      setNameError({
        status: true,
        text: "닉네임 최대 길이는 8자입니다.",
      });
      return false;
    }

    const regex = /^[가-힣a-zA-Z0-9\s]*$/;
    if (!regex.test(newName)) {
      setNameError({
        status: true,
        text: "닉네임은 영어, 한글, 숫자로만 구성할 수 있습니다.",
      });
      return false;
    }

    return true;
  };

  const onClickCheckBtn = () => {
    if (checkNicknameValidity()) nameCheckMutate();
  };

  const onClickChangeBtn = () => {
    nameChangeMutate();
  };

  return (
    <div className="w-full">
      <HeadFunction title="닉네임 변경하기" />
      <div className="w-full px-4">
        <div className="mb-2 mt-8 h3">새 닉네임</div>
        <FlexBox className="w-full gap-2">
          <NicknameInput
            value={newName}
            setValue={setNewname}
            isError={nameError.status}
            errorText={nameError.text}
            placeholder="한글, 영어, 숫자 포함 최대 8자"
            isSuccess={
              !(
                tempName.length === 0 ||
                nameError.status ||
                newName.length === 0
              )
            }
          />
          <button
            className="shrink-0 p-2 border border-main-color text-main-color rounded-lg h4"
            onClick={onClickCheckBtn}
          >
            중복 확인
          </button>
        </FlexBox>
        <Button
          text="변경하기"
          onClick={onClickChangeBtn}
          style="bg-main-color text-white mt-6 disabled:bg-grey-300 disabled:text-grey-500"
          disabled={
            tempName.length === 0 || nameError.status || newName.length === 0
          }
        />
      </div>
    </div>
  );
};

export default ChangeNickName;
