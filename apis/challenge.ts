import client, { ResponseBody, ResponseBody2 } from "./client";

interface GetMyChallengeListResponse extends ResponseBody {
  result: Challenge[];
}

export interface Challenge {
  challengeIdx: number;
  name: string;
  participantsCount: number;
  locatedPlace: string;
  schedule: string;
  myAttendanceRate: number;
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

export interface AttendanceRequestBody {
  challengeIdx: number;
  attendanceCode: string;
}

async function getMyChallengeList(): Promise<GetMyChallengeListResponse> {
  const { data } = await client.get(`/challenges`);
  return data;
}

type AttendanceDate = {
  year: number;
  month: number;
  day: number;
};

export interface GetChallengeDetailBody {
  attendanceDate: AttendanceDate;
}

async function getChallengDetail(): Promise<GetChallengeDetailBody> {
  const response = await client.get(
    `/challenges/attendance/2?year=2024&month=6`,
  );
  return response.data.result;
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

async function postAttendance(
  body: AttendanceRequestBody,
): Promise<ResponseBody> {
  const { data } = await client.post(`/challenges/attendance`, body);
  return data;
}

export {
  getMyChallengeList,
  getChallengeAds,
  getChallengeSearch,
  postNewChallenge,
  postAttendance,
  getChallengDetail,
};
