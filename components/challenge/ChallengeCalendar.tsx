import Calendar from "react-calendar";
import { useState } from "react";
import styled from "styled-components";
import LogoMark from "@/public/svgs/LogoMark.svg";
import { useGetChallengeDetail } from "@/apis/hooks/challenge";
import { AttendanceDate } from "@/apis/challenge";

export default function ChallengeCalendar({
  attendanceInfo,
}: {
  attendanceInfo: AttendanceDate[];
}) {
  type DatePiece = Date | null;
  type SelectedDate = DatePiece | [DatePiece, DatePiece];

  const [clickedDate, setClickedDate] = useState<SelectedDate>(new Date());

  const onChangeToday = () => {
    setClickedDate(clickedDate);
  };

  const customTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (Array.isArray(attendanceInfo) && view === "month") {
      const matchedData = attendanceInfo.find((challenge) => {
        const attendanceDate = new Date(
          challenge.year,
          challenge.month - 1,
          challenge.day,
        );
        return attendanceDate.getTime() === date.getTime();
      });

      if (matchedData) {
        return (
          <div className="custom-tile-content">
            <div className="custom-image">
              <LogoMark width="2.75rem" height="2.75rem" />
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
          locale="en"
          next2Label={null}
          prev2Label={null}
          minDate={new Date(2024, 4, 1)}
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
    height: 90%;
    margin: 0rem 0 3rem 0;
  }

  .custom-tile-content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 2.6rem;
    height: 2.6rem;
  }

  .custom-image {
    position: absolute;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    left: 50%;
    top: 50%;
    z-index: 1;
  }

  /* 년도, 월 */
  .react-calendar__navigation {
    display: flex;
    height: fit-content;
    font-size: 1.25rem;
    font-weight: 400;
    color: #f06459;
    justify-content: flex-start;
    width: 13.5rem;
    margin-left: 1.25rem;
    font-family: "Pretendard";
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
    width: 2rem;
  }

  /* 월 달력 (내비게이션 제외) */
  .react-calendar__month-view {
    color: #f06459;
    font-size: 1rem;
    font-family: "Pretendard";
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #fac6c2;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #f06459;
    font-size: 1rem;
    font-family: "Pretendard";
  }

  /* weekend면서 neighboring일때는 #fac6c2 */
  .react-calendar__month-view__days__day--neighboringMonth.react-calendar__month-view__days__day--weekend {
    color: #fac6c2 !important;
    font-size: 1rem;
    font-family: "Pretendard";
  }

  /* 요일 */
  abbr[title] {
    text-decoration: none;
    text-align: center;
    width: 100%;
    display: none;
  }

  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }

  .react-calendar__month-view__weekdays {
    color: #f06459;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 0rem;
    display: none;
  }

  /* 일 */
  .react-calendar__tile {
    text-align: center;
    width: 3.25rem;
    height: 3.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
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
    font-family: "Pretendard";
  }

  /*hover, focus 시 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #f06459;
    border-radius: 14px;
  }

  .react-calendar__year-view__months__month {
    color: #ee7970;
  }
`;
