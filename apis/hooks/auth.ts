import { useQuery, useMutation } from "@tanstack/react-query";
import { getCenterList } from "../auth";
import { useRouter } from "next/router";

function useGetCenterList() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["getCenterList"],
    queryFn: getCenterList,
    onError: () => {
      window.alert("새로고침 해주세요.");
    },
  });

  return { data };
}

export { useGetCenterList };

// export const useSignUp = async () => {
//   const router = useRouter();

//   const { data } = useQuery({
//     queryKey: [""],
//     queryFn: ,
//     onSuccess: () => {
//       window.alert("회원가입 성공");
//     },
//     onError: () => {
//       window.alert("다시 회원가입해주세요.");
//       router.push("/404");
//     },
//   });

//   return { data };
// };
