import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "../mypage";

function useGetMyInfo() {
  const { data } = useQuery({
    queryKey: ["getMyInfo"],
    queryFn: getMyInfo,
  });

  return { data };
}

export { useGetMyInfo };
