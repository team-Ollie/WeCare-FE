import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import { NextPage } from "next";
import { useState } from "react";
import { InputError } from "./password";
import Button from "@/components/Button";
import FlexBox from "@/components/Flexbox";
import { usePatchQuitAccount } from "@/apis/hooks/mypage";

const QuitAccount: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [pwError, setPwError] = useState<InputError>({
    status: false,
    text: "비밀번호가 일치하지 않습니다.",
  });

  const { mutate } = usePatchQuitAccount(setPwError);

  const onClickQuitBtn = () => {
    mutate(password);
  };

  return (
    <div>
      <HeadFunction title="회원 탈퇴하기" />
      <FlexBox direction="col" className="w-full px-4 pt-8 gap-6">
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="비밀번호를 입력해주세요."
          isError={pwError.status}
          errorText={pwError.text}
        />
        <Button
          text="회원 탈퇴하기"
          onClick={onClickQuitBtn}
          style={`${
            password.length === 0
              ? "bg-gray-300 text-gray-500"
              : "bg-main-color text-white"
          }`}
          disabled={password.length === 0}
        />
      </FlexBox>
    </div>
  );
};

export default QuitAccount;
