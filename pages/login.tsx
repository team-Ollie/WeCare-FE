import HeadFunction from "@/components/HeadFunction";
import { useState, useCallback, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import LogoLetterIcon from "@/public/svgs/LogoLetter.svg";
import { useMutation } from "@tanstack/react-query";
import { setTokenFromLocalStorage } from "@/apis/client";

import { atom, useAtom } from "jotai";
import { centerNameAtom, isAdminAtom } from "@/utils/atom";
import AuthInput from "@/components/auth/AuthInput";
import { SignIn } from "@/apis/auth";

interface userProps {
  loginId: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const [, setIsAdmin] = useAtom(isAdminAtom);
  const [, setCenterName] = useAtom(centerNameAtom);

  const [userInfo, setUserInfo] = useState<userProps>({
    loginId: "",
    password: "",
  });

  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);

  //input 함수
  //onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //onSubmit
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      signInMutation.mutate({
        loginId: userInfo.loginId,
        password: userInfo.password,
      });
    },
    [userInfo],
  );

  const signInMutation = useMutation({
    mutationKey: ["SignIn"],
    mutationFn: SignIn,
    onSuccess: async (data) => {
      const accessToken = data.result.accessToken;
      const refreshToken = data.result.refreshToken;
      const isAdmin = data.result.isAdmin;
      if (isAdmin) setCenterName(data.result.centerName);
      setIsAdmin(isAdmin);
      setTokenFromLocalStorage(accessToken);

      router.push("/");
      alert("로그인에 성공하였습니다");
    },
    onError: (error) => {
      alert("아이디나 비밀번호가 틀렸습니다.");
    },
  });

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <HeadFunction title="로그인" />
      <form
        onSubmit={onSubmit}
        className="h-screen justify-center items-center flex flex-col gap-9"
      >
        <LogoLetterIcon />
        <div className="flex flex-col gap-3">
          <AuthInput
            placeholder="아이디를 입력하세요"
            name="loginId"
            ref={idInputRef}
            value={userInfo.loginId}
            onChange={onChange}
          />

          <AuthInput
            placeholder="비밀번호를 입력하세요"
            type="password"
            name="password"
            ref={pwInputRef}
            value={userInfo.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="w-[20rem]">
          <Button
            text="로그인"
            style="w-full bg-main-100 py-[0.6rem] text-grey-700"
            onClick={() => {}}
          />
        </button>
      </form>
    </div>
  );
};

export default Login;
