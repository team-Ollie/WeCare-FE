import client, { ResponseBody, ResponseBody2 } from "./client";

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

interface getChallengeSearchResponse extends ResponseBody2 {
  result: Challenge[];
}

async function getMyChallengeList(): Promise<GetMyChallengeListResponse> {
  const { data } = await client.get(`/challenges`);
  return data;
}

async function getChallengeAds(): Promise<GetChallengeAdsResponse> {
  const { data } = await client.get(`/challenges/ads`);
  return data;
}

async function getChallengeSearch(
  keyword: string,
): Promise<getChallengeSearchResponse> {
  const { data } = await client.get(`/challenges/search?searchWord=${keyword}`);
  return data;
}

async function postNewChallenge(challengeIdx: number): Promise<ResponseBody> {
  const { data } = await client.post(`/challenges/participation`, {
    challengeIdx,
  });
  return data;
}

export {
  getMyChallengeList,
  getChallengeAds,
  getChallengeSearch,
  postNewChallenge,
};
