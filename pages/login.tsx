import HeadFunction from "@/components/HeadFunction";
import { useState, useEffect, useCallback, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import LogoLetterIcon from "@/public/svgs/LogoLetter.svg";

const Login: NextPage = () => {
  const router = useRouter();

  const [idValue, setIDValue] = useState<string>("");
  const [pwValue, setPWValue] = useState<string>("");
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  //input 함수
  //onChange
  const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIDValue(e.target.value);
  };

  const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPWValue(e.target.value);
  };

  //onSubmit
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      //입력한 값이 없을 때 alert 추가
      if (idValue.trim() == "") {
        alert("아이디를 입력해주세요.");
      } else if (pwValue.trim() == "") {
        // createChatting(inputValue);
        alert("비밀번호를 입력해주세요.");
      } else {
        //api
      }
    },
    [idValue, pwValue],
  );

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <HeadFunction title="로그인" />
      <form
        onSubmit={onSubmit}
        className="h-screen justify-center items-center flex flex-col gap-9"
      >
        <LogoLetterIcon />
        <div className="flex flex-col gap-3">
          <input
            placeholder="아이디를 입력하세요"
            ref={idInputRef}
            value={idValue}
            onChange={onChangeID}
            className="h-[3rem] w-[19.5rem] rounded-xl border border-solid border-semantic-grey-2 pl-[1rem]"
          />

          <input
            placeholder="비밀번호를 입력하세요"
            ref={pwInputRef}
            value={pwValue}
            onChange={onChangePW}
            className="h-[3rem] w-[19.5rem] rounded-xl border border-solid border-semantic-grey-2 pl-[1rem]"
          />
        </div>
        <button type="submit" className="w-full">
          <Button
            text="로그인"
            style="w-full bg-main-100 py-[0.8rem] h2 text-gray-700"
            onClick={() => {}}
          />
        </button>
      </form>
    </div>
  );
};

export default Login;
