import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Program, postAttendanceCode, postProgram } from "../admin";
import { useRouter } from "next/router";

function usePostProgram() {
  const router = useRouter();
  const queryclient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["postProgram"],
    mutationFn: (body: Program) => postProgram(body),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["getMyChallengeList"],
      });
      window.alert("프로그램이 성공적으로 등록되었습니다.");
      router.push("/");
    },
    onError: () => router.push("/404"),
  });

  return { mutate };
}

export { usePostAttendanceCode, usePostProgram };
