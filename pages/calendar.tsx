import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";

import FilterBox from "@/components/calendar/FilterBox";
import InfoCalendar from "@/components/calendar/InfoCalendar";
import { NextPage } from "next";

const CalendarPage: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <HeadFunction title="캘린더" />
      <div className="flex-grow flex flex-col py-[1.5rem] items-center overflow-auto scrollbar-hide">
        <div className="h-fit w-full flex flex-row justify-start items-end px-[2rem] gap-3">
          <FilterBox filterName="카테고리" />
          <FilterBox filterName="지역" />
        </div>

        <div className="flex mt-[0rem]">
          <InfoCalendar />
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default CalendarPage;
