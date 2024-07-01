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
  // console.log("challengeData", response.data.result);
  return response.data.result;
}

export { getMyChallengeList, getChallengDetail };
