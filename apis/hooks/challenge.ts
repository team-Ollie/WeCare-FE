import {
  getChallengeAds,
  getChallengeSearch,
  getMyChallengeList,
  postNewChallenge,
} from "../challenge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetMyChallengeList() {
  const { data } = useQuery({
    queryKey: ["getMyChallengeList"],
    queryFn: getMyChallengeList,
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

export {
  useGetMyChallengeList,
  useGetChallengeAds,
  useGetChallengeSearch,
  usePostNewChallenge,
};
