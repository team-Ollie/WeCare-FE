import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import BackIcon from "@/public/svgs/Back.svg";
import { NextPage } from "next";

const Challenge: NextPage = () => {
  return (
    <div className="flex">
      <div>
        <BackIcon className="flex fixed left-[1rem]" />
        <HeadFunction title="챌린지" />
      </div>

      <h1 className="text-blue-700">challenge</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Challenge;
