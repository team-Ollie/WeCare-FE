import { useQuery } from "@tanstack/react-query";
import { getMonthCalendar } from "../calendar";

const useGetMonthCalendar = () => {
  const { data } = useQuery({
    queryKey: ["getMonthCalendar"],
    queryFn: getMonthCalendar,
  });
  // console.log("isLoading", isLoading);
  console.log("Query Data", data);
  return { data };
};

export { useGetMonthCalendar };
