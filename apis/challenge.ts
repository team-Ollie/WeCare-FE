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

export { getMyChallengeList };
