import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <HeadFunction title="홈" />
      <h1 className="text-main-color flex-grow">home</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
