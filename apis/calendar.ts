import client, { ResponseBody } from "./client";

interface GetMonthCalendarResponse extends ResponseBody {
  result: MonthCalendarProps[];
}

export interface MonthCalendarProps {
  programIdx: number;
  name: string;
  category: string | null;
  location: string | null;
  openDate: {
    year: number;
    month: number;
    day: number;
  };
  dueDate: {
    year: number;
    month: number;
    day: number;
  };
}

export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

interface GetProgramDetailBody {
  programIdx: number;
  name: string;
  openDate: CalendarDate;
  dueDate: CalendarDate;
  location: string;
  host: string;
  schedule: string;
  description: string;
}

// 챌린지 월별 조회
export const getMonthCalendar = async (): Promise<GetMonthCalendarResponse> => {
  const response = await client.get("/programs/list");
  return response.data.result;
};

export const getProgramDetail = async (
  programIdx: number,
): Promise<GetProgramDetailBody> => {
  const response = await client.get(`/programs/${programIdx}`);
  return response.data.result;
};
