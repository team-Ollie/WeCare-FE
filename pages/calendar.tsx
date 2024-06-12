import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import FilterBox from "@/components/calendar/FilterBox";
import { NextPage } from "next";

const CalendarPage: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <HeadFunction title="캘린더" />
      <div className="flex-grow flex flex-col px-[1rem] py-[0.5rem] items-center overflow-auto">
        <div className="h-fit w-full flex flex-row justify-start items-end px-[1rem] gap-3">
          <FilterBox filterName="카테고리" />
          <FilterBox filterName="지역" />
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default CalendarPage;
