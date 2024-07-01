import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { InputError } from "./password";
import Button from "@/components/Button";
import FlexBox from "@/components/Flexbox";
import { usePatchQuitAccount } from "@/apis/hooks/mypage";

const QuitAccount: NextPage = () => {
  const [password, setPassword] = useState<string>("");
  const [pwError, setPwError] = useState<InputError>({
    status: false,
    text: "",
  });

  const { mutate } = usePatchQuitAccount(setPwError);

  const onClickQuitBtn = () => {
    mutate(password);
  };

  useEffect(() => {
    password.length === 0 &&
      setPwError({
        status: false,
        text: "",
      });
  }, [password]);

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
              ? "bg-grey-300 text-grey-500"
              : "bg-main-color text-white"
          }`}
          disabled={password.length === 0}
        />
      </FlexBox>
    </div>
  );
};

export default QuitAccount;
