import client, { ResponseBody } from "./client";

interface GetMonthCalendarResponse extends ResponseBody {
  result: MonthCalendarProps[];
}

export interface MonthCalendarProps {
  programIdx: number;
  name: string;
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

// 챌린지 월별 조회
export const getMonthCalendar = async (): Promise<GetMonthCalendarResponse> => {
  const response = await client.get("/programs", {});
  // console.log("calenderData", response.data.result);
  return response.data.result;
};
