import FlexBox from "@/components/Flexbox";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import { useState, useEffect, useCallback, useRef } from "react";
import FilterBox from "@/components/calendar/FilterBox";
import InfoCalendar from "@/components/calendar/InfoCalendar";
import { NextPage } from "next";

interface DropProps {
  categoryDrop: boolean;
  regionDrop: boolean;
}

const options = ["Option 1", "Option 2", "Option 3"];

const CalendarPage: NextPage = () => {
  const date = new Date();
  console.log(date);

  const [isDrop, setIsDrop] = useState<DropProps>({
    categoryDrop: false,
    regionDrop: false,
  });

  return (
    <div className="flex flex-col w-full h-screen pb-[4rem]">
      <HeadFunction title="캘린더" />
      <div className="flex flex-col flex-grow pt-[1.5rem] items-center overflow-auto scrollbar-hide">
        <div className="h-fit w-full flex flex-row justify-start items-end px-[2rem] gap-3">
          <FilterBox
            filterName="카테고리"
            onClick={() => {
              setIsDrop(!isDrop);
            }}
          />
          {isDrop ? (
            <ul className="absolute">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-gray-200 p-2"
                  onClick={() => {}}
                >
                  {option}
                </li>
              ))}
            </ul>
          ) : null}
          <FilterBox
            filterName="지역"
            onClick={() => {
              console.log("지역");
            }}
          />
        </div>

        <div className="flex w-full">
          <InfoCalendar />
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default CalendarPage;
