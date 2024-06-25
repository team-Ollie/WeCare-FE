import client, { ResponseBody } from "./client";

interface GetMyChallengeListResponse extends ResponseBody {
  result: Challenge[];
}

export interface Challenge {
  challengeIdx: number;
  name: string;
  participantsNum: number;
  location: string;
  schedule: string;
  attendanceRate: number;
  totalAttendanceRate: number;
}
interface GetChallengeAdsResponse extends ResponseBody2 {
  result: {
    mostParticipatedChallenge: Challenge;
    mostAttendancedChallenge: Challenge;
    mostRecentlyStartedChallenge: Challenge;
  };
}

async function getMyChallengeList(): Promise<GetMyChallengeListResponse> {
  const { data } = await client.get(`/challenges`);
  return data;
}

async function getChallengeAds(): Promise<GetChallengeAdsResponse> {
  const { data } = await client.get(`/challenges/ads`);
  return data;
}

export { getMyChallengeList, getChallengeAds };
