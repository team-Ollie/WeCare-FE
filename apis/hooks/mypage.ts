import { useQuery, useMutation } from "@tanstack/react-query";
import { getMyInfo, patchLogout, patchPasswordChange } from "../mypage";
import { useRouter } from "next/router";

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
    onSuccess: () => router.push("/main"),
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

export { useGetMyInfo, usePatchLogout, usePatchPasswordChange };
