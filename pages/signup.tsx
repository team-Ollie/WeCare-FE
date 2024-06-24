import Button from "@/components/Button";
import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useRef } from "react";

const SignUp: NextPage = () => {
  const router = useRouter();

  const [idValue, setIDValue] = useState<string>("");
  const [pwValue, setPWValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  //input 함수
  //onChange
  const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIDValue(e.target.value);
  };

  const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPWValue(e.target.value);
  };

  //inputRef설정 함수
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    inputRef.current?.focus();
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
        className="h-screen justify-center flex flex-col gap-9"
      >
        <div className="flex flex-col gap-3">
          <input
            placeholder="아이디를 입력하세요"
            ref={inputRef}
            value={idValue}
            onChange={onChangeID}
            onClick={handleInputClick}
            className="h-[3rem] w-[19.5rem] rounded-xl border border-solid border-semantic-grey-2 pl-[1rem]"
          />

          <input
            placeholder="비밀번호를 입력하세요"
            ref={inputRef}
            value={pwValue}
            onChange={onChangePW}
            onClick={handleInputClick}
            className="h-[3rem] w-[19.5rem] rounded-xl border border-solid border-semantic-grey-2 pl-[1rem]"
          />
        </div>
        <button type="submit">
          <Button
            text="로그인"
            style="w-[20rem] bg-main-100 py-[0.8rem] h2 text-gray-700"
            onClick={() => {}}
          />
        </button>
      </form>
    </div>
  );
};

export default SignUp;
