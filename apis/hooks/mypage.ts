import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getMyInfo,
  patchLogout,
  patchPasswordChange,
  patchQuitAccount,
} from "../mypage";
import { useRouter } from "next/router";
import { InputError } from "@/pages/mypage/password";

function useGetMyInfo() {
  const { data } = useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMyInfo,
  });

  return { data };
}

function usePatchLogout() {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["patchLogout"],
    mutationFn: patchLogout,
    onSuccess: () => {
      localStorage.removeItem("access_token");
      router.push("/main");
    },
    onError: () => router.push("/404"),
  });

  return { mutate };
}

function usePatchQuitAccount(
  setPwError: React.Dispatch<React.SetStateAction<InputError>>,
) {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["patchQuitAccount"],
    mutationFn: (password: string) => patchQuitAccount(password),
    onSuccess: () => router.push("/main"),
    onError: () =>
      setPwError({ status: true, text: "비밀번호가 올바르지 않습니다." }),
  });

  return { mutate };
}

function usePatchPasswordChange() {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["patchPasswordChange"],
    mutationFn: (body: { password: string; newPassword: string }) =>
      patchPasswordChange(body),
    onSuccess: () => router.push("/mypage/password/success"),
    onError: () => router.push("/404"),
  });

  return { mutate };
}

export {
  useGetMyInfo,
  usePatchLogout,
  usePatchQuitAccount,
  usePatchPasswordChange,
};
