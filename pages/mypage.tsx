import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/Navbar";

const MyPage: NextPage = () => {
  return (
    <div className="flex">
      <HeadFunction title="mypage" />
      <h1>mypage</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default MyPage;
