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
  const { data, isLoading } = useQuery({
    queryKey: ["getProgramDetail"],
    queryFn: () => getProgramDetail(programIdx),
  });
  return { data, isLoading };
};

export { useGetMonthCalendar, useGetProgramDetail };
