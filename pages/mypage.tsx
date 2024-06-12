import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import { NextPage } from "next";

const MyPage: NextPage = () => {
  return (
    <div>
      <HeadFunction title="마이페이지" />
      <h1 className="flex flex-grow">mypage</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default MyPage;
