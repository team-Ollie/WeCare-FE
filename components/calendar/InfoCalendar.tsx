import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";

export default function InfoCalendar() {
  type DatePiece = Date | null;
  type SelectedDate = DatePiece | [DatePiece, DatePiece];

  const [clickedDate, setClickedDate] = useState<SelectedDate>(new Date());

  const onChangeToday = () => {
    setClickedDate(clickedDate);
  };

  return (
    <div className="flex justify-center items-center">
      <StyledCalendarWrapper>
        <Calendar
          onChange={onChangeToday}
          value={clickedDate}
          locale="en"
          next2Label={null}
          prev2Label={null}
          minDate={new Date(2024, 4, 1)}
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
  }

  /* 년도, 월 */
  .react-calendar__navigation {
    display: flex;
    height: fit-content;
    font-size: 1.25rem;
    font-weight: 400;
    color: black;
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
    padding: 1rem;
    color: #f06459;
    font-size: 1.25rem;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__month-view__days__day--weekend {
    color: #f06459;
    font-size: 1.25rem;
  }

  /* 요일 */
  abbr[title] {
    text-decoration: none;
    text-align: center;
    width: 100%;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__month-view__weekdays {
    color: #f06459;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    padding: 1rem 0rem;
  }

  /* 일 */
  .react-calendar__tile {
    text-align: center;
    width: 2.5rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
  }
  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #f06459;
    color: white;
    border-radius: 14px;
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
    border-radius: 14px;
  }
`;
