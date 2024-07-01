import { CalendarDate } from "./calendar";
import client, { ResponseBody } from "./client";

export interface Program {
  name: string;
  dueDate: CalendarDate;
  openDate: CalendarDate;
  location: string;
  category: string;
  host: string;
  schedule: string;
  description: string;
}

async function postAttendanceCode(challengeIdx: number): Promise<ResponseBody> {
  const { data } = await client.post(`/challenges/attendance/${challengeIdx}`);
  return data;
}

async function postProgram(body: Program): Promise<ResponseBody> {
  const { data } = await client.post(`/programs`, body);
  return data;
}

export { postAttendanceCode, postProgram };
