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

const categories = ["카테고리", "운동", "예술", "학술", "기타"];
const locations = ["지역", "서울", "경기", "그 외"];

const CalendarPage: NextPage = () => {
  const date = new Date();
  console.log(date);

  const [isDrop, setIsDrop] = useState<DropProps>({
    categoryDrop: false,
    regionDrop: false,
  });
  const [isIndex, setIsIndex] = useState<number>(-1);
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    console.log(selected);
    setSelected(e.target.value);
  };

  const toggleDrop = (dropName: string) => {
    setIsDrop((prev: DropProps) => ({ ...prev, [dropName]: !prev[dropName] }));
  };

  return (
    <div className="flex flex-col w-full h-screen pb-[4rem]">
      <HeadFunction title="캘린더" />
      <div className="flex flex-col flex-grow pt-[1.5rem] items-center overflow-auto scrollbar-hide">
        <div className="h-fit w-full flex flex-row justify-start items-end px-[1rem] gap-3">
          {isDrop && (
            <select
              value={selected}
              onChange={handleSelect}
              className="dropdown w-fit h-[1.9rem] flex justify-center items-center text-center bg-main-color rounded-3xl text-white py-[0.31rem] pl-[0.94rem] pr-[0.44rem] gap-0.5"
            >
              {categories.map((opt, index) => (
                <option
                  key={index}
                  className="h3 cursor-pointer hover:bg-gray-100"
                  value={opt}
                >
                  {opt}
                </option>
              ))}
            </select>
          )}

          <select
            value={selected}
            onChange={handleSelect}
            className="dropdown w-fit h-[1.9rem] flex justify-center items-center text-center bg-main-color rounded-3xl text-white py-[0.31rem] pl-[0.94rem] pr-[0.44rem] gap-0.5"
          >
            {locations.map((opt, index) => (
              <option
                key={index}
                className="h3 cursor-pointer hover:bg-gray-100"
                value={opt}
              >
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full">
          <InfoCalendar filterTag={selected} />
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default CalendarPage;
