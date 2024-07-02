import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import InfoCalendar from "@/components/calendar/InfoCalendar";
import { NextPage } from "next";
import CalendarModal from "@/components/calendar/CalendarModal";

// tag 종류
const categories = ["카테고리", "운동", "예술", "학술", "기타"];
const locations = ["지역", "서울", "경기", "그 외"];

const CalendarPage: NextPage = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  //프로그램 상세 모달 용
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [modalIdx, setModalIdx] = useState<number>(0);
  const toggleModalHandler = (programIdx: number) => {
    setModalIdx(programIdx);
    setIsModal(!isModal);
  };

  return (
    <>
      {isModal ? (
        <CalendarModal
          programIdx={modalIdx}
          toggleModal={() => setIsModal(false)}
        />
      ) : null}
      <div className="flex flex-col w-full h-screen pb-[4rem]">
        <HeadFunction title="캘린더" />
        <div className="flex flex-col flex-grow pt-[1.5rem] items-center overflow-auto scrollbar-hide">
          <div className="h-fit w-full flex flex-row justify-start items-end px-[1rem] gap-3">
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
            <InfoCalendar
              filterTag={selected}
              toggleModalHandler={toggleModalHandler}
            />
          </div>
        </div>

        <NavBar />
      </div>
    </>
  );
};

export default CalendarPage;
