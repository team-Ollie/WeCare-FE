import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import NavBar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeadFunction title="home" />
      <h1 className="text-main-color flex-grow">home</h1>
      <div className="fixed inset-x-0 bottom-0">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
