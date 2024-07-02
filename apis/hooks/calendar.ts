import { useQuery } from "@tanstack/react-query";
import { getMonthCalendar, getProgramDetail } from "../calendar";

const useGetMonthCalendar = () => {
  const { data } = useQuery({
    queryKey: ["getMonthCalendar"],
    queryFn: getMonthCalendar,
  });
  return { data };
};

const useGetProgramDetail = (programIdx: number) => {
  const { data } = useQuery({
    queryKey: ["getProgramDetail"],
    queryFn: () => getProgramDetail(programIdx),
  });
  return { data };
};

export { useGetMonthCalendar, useGetProgramDetail };
