import { useQuery, useMutation } from "@tanstack/react-query";
import { SignUp, getCenterList, postIdCheck, userProps } from "../auth";
import { useRouter } from "next/router";

function useGetCenterList() {
  const { data } = useQuery({
    queryKey: ["getCenterList"],
    queryFn: getCenterList,
  });
  return { data };
}

function useSignUp(userData: userProps) {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: () => SignUp(userData),
    onSuccess: () => {
      router.push("/success");
    },
    onError: (error: Error) => {
      window.alert("다시 회원가입해주세요.");
      router.push("/main");
    },
  });

  return { mutate };
}

function usePostIdCheck(
  loginId: string,
  setIdError: React.Dispatch<React.SetStateAction<InputError>>,
) {
  const { mutate } = useMutation({
    mutationKey: ["postIdCheck", loginId],
    mutationFn: () => postIdCheck(loginId),
    onSuccess: () => setIdError({ status: false, text: "" }),
    onError: () => {
      setIdError({ status: true, text: "이미 사용 중인 아이디입니다." });
    },
  });

  return { mutate };
}

export { useGetCenterList, useSignUp, usePostIdCheck };
