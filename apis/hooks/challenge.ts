import { getChallengeAds, getMyChallengeList } from "../challenge";
import { useQuery } from "@tanstack/react-query";

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

export { useGetMyChallengeList, useGetChallengeAds };
