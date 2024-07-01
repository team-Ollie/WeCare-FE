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

const categories = ["운동", "예술", "학술"];
const locations = ["서울", "경기", "그 외"];

const CalendarPage: NextPage = () => {
  const date = new Date();
  console.log(date);

  const [isDrop, setIsDrop] = useState<DropProps>({
    categoryDrop: false,
    regionDrop: false,
  });

  const toggleDrop = (dropName: string) => {
    setIsDrop((prev: DropProps) => ({ ...prev, [dropName]: !prev[dropName] }));
  };

  return (
    <div className="flex flex-col w-full h-screen pb-[4rem]">
      <HeadFunction title="캘린더" />
      <div className="flex flex-col flex-grow pt-[1.5rem] items-center overflow-auto scrollbar-hide">
        <div className="h-fit w-full flex flex-row justify-start items-end px-[1rem] gap-3">
          <div>
            <FilterBox
              filterName="카테고리"
              onClick={() => {
                toggleDrop("categoryDrop");
                console.log("category");
              }}
            />
            {isDrop.categoryDrop ? (
              <ul className="absolute top-[8rem]">
                {categories.map((option, index) => (
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
          </div>
          <div>
            <FilterBox
              filterName="지역"
              onClick={() => {
                setIsDrop({ ...isDrop, regionDrop: !isDrop.regionDrop });
              }}
            />
            {isDrop.regionDrop ? (
              <ul className="absolute top-[8rem]">
                {locations.map((option, index) => (
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
          </div>
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
