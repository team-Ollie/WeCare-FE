import HeadFunction from "@/components/HeadFunction";
import { useState, useEffect, useCallback, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import LogoLetterIcon from "@/public/svgs/LogoLetter.svg";
import { useMutation } from "@tanstack/react-query";
import {
  ResponseBody,
  setIsAdminAtLocalStorage,
  setTokenFromLocalStorage,
} from "@/apis/client";
import { SignIn } from "@/apis/auth";
import { atom, useAtom } from "jotai";
import { isAdminAtom } from "@/utils/atom";

interface userProps {
  loginId: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useAtom(isAdminAtom);

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
      console.log(data);
      const accessToken = data.result.accessToken;
      const refreshToken = data.result.refreshToken;
      const isAdmin = data.result.isAdmin;
      setIsAdmin(isAdmin);
      setIsAdminAtLocalStorage(isAdmin);
      setTokenFromLocalStorage(accessToken);

      router.push("/");
      alert("로그인에 성공하였습니다");
    },
    onError: (error) => {
      alert("로그인에 실패하였습니다");
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
          <input
            placeholder="아이디를 입력하세요"
            name="loginId"
            ref={idInputRef}
            value={userInfo.loginId}
            onChange={onChange}
            required
            className="h-[3rem] w-[19.5rem] rounded-xl border border-solid border-semantic-grey-2 pl-[1rem]"
          />

          <input
            placeholder="비밀번호를 입력하세요"
            name="password"
            ref={pwInputRef}
            value={userInfo.password}
            onChange={onChange}
            required
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
