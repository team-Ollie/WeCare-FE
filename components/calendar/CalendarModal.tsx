interface CalendarModalProps {}

const CalendarModal = ({ filterName }) => {
  return (
    <div className="w-fit h-[1.9rem] flex justify-center items-center bg-main-color rounded-3xl text-white py-[0.31rem] pl-[0.94rem] pr-[0.44rem] gap-0.5">
      <div>{filterName}</div>
    </div>
  );
};

export default CalendarModal;
