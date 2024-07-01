import { usePatchPasswordChange } from "@/apis/hooks/mypage";
import Button from "@/components/Button";
import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface InputError {
  status: boolean;
  text: string;
}

const Password: NextPage = () => {
  const router = useRouter();
  const { mutate } = usePatchPasswordChange();

  const [password, setPassword] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [newPw2, setNewPw2] = useState<string>("");

  const [pwError, setPwError] = useState<InputError>({
    status: false,
    text: "",
  });
  const [newPwError, setNewPwError] = useState<InputError>({
    status: false,
    text: "",
  });
  const [newPw2Error, setNewPw2Error] = useState<InputError>({
    status: false,
    text: "",
  });

  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

  const checkPasswordError = () => {
    if (password.length === 0) {
      setPwError({ status: false, text: "" });
      return;
    }
    // db에 있는 비밀번호와 일치하지 않는 경우
    setPwError({ status: false, text: "" });
  };
  const checkNewPwError = () => {
    if (newPw.length === 0) {
      setNewPwError({ status: false, text: "" });
      return;
    }
    if (newPw === password) {
      setNewPwError({ status: true, text: "기존 비밀번호와 동일합니다" });
      return;
    }
    // 비밀번호 형식에 맞지 않는 경우
    setNewPwError({ status: false, text: "" });
  };
  const checkNewPw2Error = () => {
    if (newPw2.length === 0) {
      setNewPw2Error({ status: false, text: "" });
      return;
    }
    if (newPw2 !== newPw) {
      setNewPw2Error({ status: true, text: "새 비밀번호가 일치하지 않습니다" });
      return;
    }
    setNewPw2Error({ status: false, text: "" });
  };

  useEffect(checkPasswordError, [password]);
  useEffect(checkNewPwError, [newPw]);
  useEffect(checkNewPw2Error, [newPw2]);
  useEffect(() => {
    setPassword("");
    setNewPw("");
    setNewPw2("");
  }, []);
  useEffect(() => {
    if (password.length === 0 || newPw.length === 0 || newPw2.length === 0)
      setIsBtnDisabled(true);
    else if (pwError.status || newPwError.status || newPw2Error.status)
      setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  }, [
    password,
    newPw,
    newPw2,
    pwError.status,
    newPwError.status,
    newPw2Error.status,
  ]);

  const changePassword = () => {
    mutate({ password, newPassword: newPw });
  };

  return (
    <div>
      <HeadFunction title="비밀번호 수정" />
      <FlexBox direction="col" className="gap-8 px-4 w-full pt-4">
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="기존 비밀번호"
          isError={pwError.status}
          errorText={pwError.text}
        />
        <TextInput
          value={newPw}
          setValue={setNewPw}
          placeholder="새 비밀번호"
          isError={newPwError.status}
          errorText={newPwError.text}
        />
        <TextInput
          value={newPw2}
          setValue={setNewPw2}
          placeholder="새 비밀번호 확인"
          isError={newPw2Error.status}
          errorText={newPw2Error.text}
        />
        <Button
          disabled={isBtnDisabled}
          style={`${
            isBtnDisabled
              ? "bg-grey-300 text-grey-500"
              : "bg-main-color text-white"
          }`}
          onClick={changePassword}
          text="새 비밀번호 저장"
        />
      </FlexBox>
    </div>
  );
};

export default Password;
