import { useQuery, useMutation } from "@tanstack/react-query";
import { SignUp, getCenterList, userProps } from "../auth";
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
      route.push("/success");
    },
    onError: (error: Error) => {
      window.alert("다시 회원가입해주세요.");
      router.push("/main");
    },
  });

  return { mutate };
}

export { useGetCenterList, useSignUp };
