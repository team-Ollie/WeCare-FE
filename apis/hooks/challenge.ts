import {
  AttendanceRequestBody,
  getChallengeAds,
  getChallengeSearch,
  getMyChallengeList,
  postAttendance,
  postNewChallenge,
  getChallengDetail,
} from "../challenge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetMyChallengeList() {
  const { data } = useQuery({
    queryKey: ["getMyChallengeList"],
    queryFn: getMyChallengeList,
  });

  return { data };
}

function useGetChallengeDetail() {
  const { data } = useQuery({
    queryKey: ["getChallengeDetail"],
    queryFn: getChallengDetail,
  });
  return { data };
}

function useGetChallengeAds() {
  const { data } = useQuery({
    queryKey: ["getChallengeAds"],
    queryFn: getChallengeAds,
  });

  return { data };
}

function useGetChallengeSearch(keyword: string) {
  const { data } = useQuery({
    queryKey: ["getChallengeSearch", keyword],
    queryFn: () => getChallengeSearch(keyword),
    enabled: keyword.trim().length !== 0,
  });

  return { data };
}

function usePostNewChallenge(
  challengeIdx: number,
  challengeName: string,
  notify: (title: string) => void,
) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["postNewChallenge", challengeIdx],
    mutationFn: () => postNewChallenge(challengeIdx),
    onSuccess: () => {
      notify(challengeName);
      queryClient.invalidateQueries({
        queryKey: ["getChallengeSearch"],
      });
    },
  });

  return { mutate };
}

function usePostAttendance(challengeIdx: number) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["postAttendance", challengeIdx],
    mutationFn: (attendanceCode: string) =>
      postAttendance({ challengeIdx, attendanceCode }),
    onSuccess: () => window.alert("챌린지가 성공적으로 인증되었습니다."),
    onError: () => window.alert("다시 시도해주세요."),
  });

  return { mutate };
}

export {
  useGetMyChallengeList,
  useGetChallengeAds,
  useGetChallengeSearch,
  usePostNewChallenge,
  usePostAttendance,
  useGetChallengeDetail,
};
