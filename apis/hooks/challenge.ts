import { getMyChallengeList, getChallengDetail } from "../challenge";
import { useQuery } from "@tanstack/react-query";

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

export { useGetMyChallengeList, useGetChallengeDetail };
