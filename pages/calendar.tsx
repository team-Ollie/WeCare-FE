import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div className="flex">
      <HeadFunction title="캘린더" />
      <h1 className="text-blue-700">calendar</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Calendar;
