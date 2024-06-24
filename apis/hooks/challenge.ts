import { getMyChallengeList } from "../challenge";
import { useQuery } from "@tanstack/react-query";

function useGetMyChallengeList() {
  const { data } = useQuery({
    queryKey: ["getMyChallengeList"],
    queryFn: getMyChallengeList,
  });

  return { data };
}

export { useGetMyChallengeList };
