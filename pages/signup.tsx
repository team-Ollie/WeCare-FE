import Button from "@/components/Button";
import HeadFunction from "@/components/HeadFunction";
import TextInput from "@/components/Input";
import AuthInput from "@/components/auth/AuthInput";
import { TextLine } from "@/components/calendar/CalendarModal";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useRef } from "react";

interface userProps {
  loginId: string;
  password: string;
  nickname: string;
  identifier: string;
  centerIdx: number;
}

const SignUp: NextPage = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState<userProps>({
    loginId: "",
    password: "",
    nickname: "",
    identifier: "",
    centerIdx: 0,
  });

  //input 함수

  //inputRef설정 함수
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const idfInputRef = useRef<HTMLInputElement>(null);
  const cidInputRef = useRef<HTMLInputElement>(null);

  //onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(userInfo);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //onSubmit
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    [userInfo],
  );

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <HeadFunction title="회원가입" />
      <form
        onSubmit={onSubmit}
        className="h-screen justify-center flex flex-col gap-9 overflow-auto scrollbar-hide"
      >
        <div className="flex flex-col gap-3">
          <TextLine children={"아이디"} className="pl-1" />

          <AuthInput
            placeholder="아이디를 입력하세요"
            name="loginId"
            ref={idInputRef}
            value={userInfo.loginId}
            onChange={onChange}
            maxLength={16}
          />

          <TextLine children={"비밀번호"} className="pl-1" />

          <AuthInput
            placeholder="비밀번호를 입력하세요"
            name="password"
            ref={pwInputRef}
            value={userInfo.password}
            onChange={onChange}
          />

          <TextLine children={"닉네임"} className="pl-1" />

          <AuthInput
            placeholder="한글, 영어, 숫자 포함 최대 8자"
            name="nickname"
            ref={nicknameInputRef}
            value={userInfo.nickname}
            onChange={onChange}
            maxLength={8}
          />

          <TextLine children={"식별번호"} className="pl-1" />

          <AuthInput
            placeholder="이름과 전화번호 뒷자리 4개를 입력해주세요."
            name="identifier"
            ref={idfInputRef}
            value={userInfo.identifier}
            maxLength={10}
            onChange={onChange}
          />

          <TextLine children={"소속센터"} className="pl-1" />
        </div>
        <button type="submit">
          <Button
            text="회원가입"
            style="w-[20rem] bg-main-100 py-[0.8rem] h2 text-grey-700"
            onClick={() => {}}
          />
        </button>
      </form>
    </div>
  );
};

export default SignUp;
