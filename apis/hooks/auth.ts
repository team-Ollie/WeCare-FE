import { useQuery, useMutation } from "@tanstack/react-query";
import { SignUp, getCenterList, userProps } from "../auth";
import { useRouter } from "next/router";

function useGetCenterList() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["getCenterList"],
    queryFn: getCenterList,
    onError: (error: Error) => {
      window.alert("새로고침 해주세요.");
      console.error(error);
    },
  });

  return { data };
}

function useSignUp(userData: userProps) {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: () => SignUp(userData),
    onSuccess: () => {
      router.push("/login");
    },
    onError: () => {
      window.alert("다시 회원가입해주세요.");
      router.push("/main");
    },
  });

  return { mutate };
}

export { useGetCenterList, useSignUp };
