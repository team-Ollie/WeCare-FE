import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/Navbar";

const Calendar: NextPage = () => {
  return (
    <div className="flex">
      <HeadFunction title="calendar" />
      <h1 className="text-blue-700">calendar</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Calendar;
