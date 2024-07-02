import { CalendarDate } from "./calendar";
import client, { ResponseBody, ResponseBody2 } from "./client";

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

interface PostAttendanceCodeBody extends ResponseBody2 {
  result: {
    code: number;
  };
}

async function postAttendanceCode(
  challengeIdx: number,
): Promise<PostAttendanceCodeBody> {
  const { data } = await client.post(`/challenges/attendance/${challengeIdx}`);
  return data;
}

async function postProgram(body: Program): Promise<ResponseBody> {
  const { data } = await client.post(`/programs`, body);
  return data;
}

export { postAttendanceCode, postProgram };
