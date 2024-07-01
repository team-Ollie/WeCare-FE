import { useMutation } from "@tanstack/react-query";
import { Program, postAttendanceCode, postProgram } from "../admin";
import { useRouter } from "next/router";

function usePostProgram() {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["postProgram"],
    mutationFn: (body: Program) => postProgram(body),
    onSuccess: () => {
      window.alert("프로그램이 성공적으로 등록되었습니다.");
      router.push("/");
    },
  });

  return { mutate };
}

export { usePostAttendanceCode, usePostProgram };
