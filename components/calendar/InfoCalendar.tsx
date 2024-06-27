import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useGetMonthCalendar } from "@/apis/hooks/calendar";
import { MonthCalendarProps } from "@/apis/calendar";
import Dot from "@/public/svgs/Dot.svg";

export default function InfoCalendar() {
  type DatePiece = Date | null;
  type SelectedDate = DatePiece | [DatePiece, DatePiece];

  const [clickedDate, setClickedDate] = useState<SelectedDate>(new Date());

  // const [monthCalendarData, setMonthCalendarData] = useState<
  //   MonthCalendarProps[]
  // >([]);

  const onChangeToday = () => {
    setClickedDate(clickedDate);
  };

  const { data } = useGetMonthCalendar();

  const customTileContent = ({ date, view }: { date: Date; view: string }) => {
    let isOpen = true;
    if (data && view === "month") {
      const dayData = data.find((dayData: MonthCalendarProps) => {
        const openDate = new Date(
          dayData.openDate.year,
          dayData.openDate.month - 1,
          dayData.openDate.day,
        );

        const dueDate = new Date(
          dayData.dueDate.year,
          dayData.dueDate.month - 1,
          dayData.dueDate.day,
        );

        if (date.getTime() === openDate.getTime()) isOpen = true;
        else isOpen = false;

        return (
          date.getTime() === openDate.getTime() ||
          date.getTime() === dueDate.getTime()
        );
      });

      if (dayData) {
        return (
          <div className="custom-tile-content">
            <div className=" flex flex-row justify-center items-center gap-1 ">
              <Dot color={isOpen ? "#F06459" : "#8E8E93"} />
              <div className="h6 custom-tile-text text-grey-900 whitespace-nowrap overflow-hidden text-ellipsis">
                {dayData.name}
              </div>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="flex justify-center items-center">
      <StyledCalendarWrapper>
        <Calendar
          onChange={onChangeToday}
          value={clickedDate}
          locale="ko"
          next2Label={null}
          prev2Label={null}
          minDate={new Date(2024, 4, 1)}
          formatDay={(locale, date) => moment(date).format("DD")}
          tileContent={customTileContent}
        />
      </StyledCalendarWrapper>
    </div>
  );
}

const StyledCalendarWrapper = styled.div`
  .react-calendar {
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    margin: 1.5rem 0 0rem 0;
    padding: 0;
  }

  .custom-tile-content {
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .custom-tile-text {
    text-align: start;
    line-height: 130%;
    flex-wrap: wrap;
  }

  /* 년도, 월 */
  .react-calendar__navigation {
    display: flex;
    height: fit-content;
    font-size: 1.25rem;
    font-weight: 400;
    color: #f06459;
    padding: 0 4rem;
    justify-content: flex-start;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: white;
  }

  .react-calendar__navigation__arrow {
    width: 2rem;
    height: 1.5rem;
  }

  .react-calendar__navigation__label {
    width: 4rem;
  }

  /* 월 달력 (내비게이션 제외) */
  .react-calendar__month-view {
    padding: 0rem;
    color: #f06459;
    font-size: 1.25rem;
  }

  .react-calendar__month-view__days {
    border: 0.5px rgba(244, 138, 130, 0.16) solid;
  }

  .react-calendar__month-view__days__day--neighboringMonth
    .react-calendar__month-view__days__day--weekend {
    color: #f06459;
    font-size: 1.25rem;
  }

  /* 요일 */
  abbr[title] {
    text-decoration: none;
    text-align: center;
    width: 100%;
    color: #8e8e93;
    font-size: 0.8125rem;
  }

  abbr[area-label] {
    text-align: start;
    width: 100%;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__month-view__weekdays {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    padding: 1rem 0rem;
  }

  /* 일 */
  .react-calendar__tile {
    text-align: center;
    width: 2.5rem;
    height: 6.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.75rem;
    border: 0.5px rgba(244, 138, 130, 0.16) solid;
    padding: 0.25rem 0.5rem;
  }

  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #f06459;
    color: white;
  }

  /* 현재 날짜 */
  .react-calendar__tile--now {
    background: #fff2f1;
    color: #f06459;
  }

  /*hover, focus 시 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #f06459;
  }
`;
