import Calendar from "react-calendar";
import { useState } from "react";

export default function ChallengeCalendar() {
  type DatePiece = Date | null;
  type SelectedDate = DatePiece | [DatePiece, DatePiece];

  const [clickedDate, setClickedDate] = useState<SelectedDate>(new Date());

  const onChangeToday = () => {
    setClickedDate(clickedDate);
  };

  return (
    <div className="flex justify-center items-center">
      <Calendar
        onChange={onChangeToday}
        value={clickedDate}
        locale="en"
        next2Label={null}
        prev2Label={null}
        minDate={new Date(2024, 4, 1)}
      />
    </div>
  );
}
