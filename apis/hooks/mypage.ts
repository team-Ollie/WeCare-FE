import { useQuery, useMutation } from "@tanstack/react-query";
import { getMyInfo, patchLogout } from "../mypage";
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

export { useGetMyInfo, usePatchLogout };
