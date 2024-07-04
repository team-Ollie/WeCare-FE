import { centerProps, userProps } from "@/apis/auth";
import { useGetCenterList, usePostIdCheck, useSignUp } from "@/apis/hooks/auth";
import Button from "@/components/Button";
import HeadFunction from "@/components/HeadFunction";
import AuthInput from "@/components/auth/AuthInput";
import { TextLine } from "@/components/calendar/CalendarModal";
import { NextPage } from "next";
import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@/public/svgs/Check.svg";
import FlexBox from "@/components/Flexbox";
import { usePostNicknameCheck } from "@/apis/hooks/mypage";
import { InputError } from "./mypage/password";
import NicknameInput from "@/components/mypage/NicknameInput";

const SignUp: NextPage = () => {
  //input용

  const [userInfo, setUserInfo] = useState<userProps>({
    loginId: "",
    password: "",
    nickname: "",
    identifier: "",
    centerIdx: 1,
  });

  //inputRef설정 함수
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const idfInputRef = useRef<HTMLInputElement>(null);

  //onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //onSubmit
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signUpMutate();
    },
    [userInfo],
  );

  //api 호출
  const { data } = useGetCenterList();
  const { mutate: signUpMutate } = useSignUp(userInfo);

  //중복 확인
  //닉네임 중복
  const [tempName, setTempName] = useState<string>("");
  const [nameError, setNameError] = useState<InputError>({
    status: false,
    text: "",
  });

  const onClickCheckBtn = () => {
    if (checkNicknameValidity()) nameCheckMutate();
  };

  const checkNicknameValidity = () => {
    setTempName(userInfo.nickname);
    if (userInfo.nickname.length > 8) {
      setNameError({
        status: true,
        text: "닉네임 최대 길이는 8자입니다.",
      });
      return false;
    }

    const regex = /^[가-힣a-zA-Z0-9\s]*$/;
    if (!regex.test(userInfo.nickname)) {
      setNameError({
        status: true,
        text: "닉네임은 영어, 한글, 숫자로만 구성할 수 있습니다.",
      });
      return false;
    }

    return true;
  };

  const { mutate: nameCheckMutate } = usePostNicknameCheck(
    userInfo.nickname,
    setNameError,
  );

  //아이디 중복
  const [tempId, setTempId] = useState<string>("");
  const [idError, setIdError] = useState<InputError>({
    status: false,
    text: "",
  });

  const checkIdValidity = () => {
    setTempId(userInfo.loginId);
    if (userInfo.loginId.length > 16) {
      setIdError({
        status: true,
        text: "아이디 최대 길이는 16자입니다.",
      });
      return false;
    }

    const regex = /^[a-zA-Z0-9\s]*$/;
    if (!regex.test(userInfo.loginId)) {
      setIdError({
        status: true,
        text: "아이디는 영어, 숫자로만 구성할 수 있습니다.",
      });
      return false;
    }

    return true;
  };

  const { mutate: idCheckMutate } = usePostIdCheck(
    userInfo.loginId,
    setIdError,
  );

  const onClickIdBtn = () => {
    if (checkIdValidity()) idCheckMutate();
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <HeadFunction title="회원가입" />
      <form
        onSubmit={onSubmit}
        className="h-screen w-full items-center flex flex-col gap-9 overflow-auto scrollbar-hide mt-5"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <TextLine children={"아이디"} className="pl-1" />

            <FlexBox className="w-full gap-2">
              <AuthInput
                placeholder="아이디를 입력하세요"
                name="loginId"
                ref={idInputRef}
                value={userInfo.loginId}
                onChange={onChange}
                maxLength={16}
                className="flex-grow"
                isSuccess={
                  !(
                    tempId.length === 0 ||
                    idError.status ||
                    userInfo.loginId.length === 0
                  )
                }
                isError={idError.status}
                errorText={idError.text}
              />
              <button
                className="shrink-0 px-3 py-2.5 border border-main-color text-main-color rounded-lg h5"
                onClick={(e) => {
                  e.preventDefault();
                  onClickIdBtn();
                }}
              >
                중복
              </button>
            </FlexBox>
          </div>

          <div className="flex flex-col gap-2">
            <TextLine children={"비밀번호"} className="pl-1" />

            <AuthInput
              placeholder="비밀번호를 입력하세요"
              name="password"
              ref={pwInputRef}
              value={userInfo.password}
              onChange={onChange}
              className={"w-[19.5rem]"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextLine children={"닉네임"} className="pl-1" />
            <FlexBox className="w-full gap-2">
              <AuthInput
                placeholder="한글, 영어, 숫자 포함 최대 8자"
                name="nickname"
                ref={nicknameInputRef}
                value={userInfo.nickname}
                onChange={onChange}
                maxLength={8}
                className="flex-grow"
                isSuccess={
                  !(
                    tempName.length === 0 ||
                    nameError.status ||
                    userInfo.nickname.length === 0
                  )
                }
                isError={nameError.status}
                errorText={nameError.text}
              />

              <button
                className="shrink-0 px-3 py-2.5 border border-main-color text-main-color rounded-lg h5"
                onClick={(e) => {
                  e.preventDefault();
                  onClickCheckBtn();
                }}
              >
                중복
              </button>
            </FlexBox>
          </div>

          <div className="flex flex-col gap-2">
            <TextLine children={"식별번호"} className="pl-1" />
            <AuthInput
              placeholder="이름과 전화번호 뒷자리 4개를 입력해주세요."
              name="identifier"
              ref={idfInputRef}
              value={userInfo.identifier}
              maxLength={10}
              onChange={onChange}
              className={"w-[19.5rem]"}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextLine children={"소속센터"} className="pl-1" />
            {data && (
              <select
                className="border h-9 rounded-xl px-2"
                value={userInfo.centerIdx}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    centerIdx: parseInt(e.target.value, 10),
                  })
                }
              >
                {data.map((center: centerProps) => (
                  <option key={center.centerIdx} value={center.centerIdx}>
                    {center.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <button type="submit" className="w-[20rem] absolute bottom-[3.75rem]">
          <Button
            text="회원가입"
            style="bg-main-100 py-[0.6rem] text-grey-700"
            onClick={() => {}}
          />
        </button>
      </form>
    </div>
  );
};

export default SignUp;
