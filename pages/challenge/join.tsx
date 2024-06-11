import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/home/searchBar";
import SearchResult from "@/components/home/searchResult";
import { NextPage } from "next";
import { useState } from "react";

const JoinChallenge: NextPage = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <div className="w-full">
      <HeadFunction title={"챌린지 참여하기"} />
      <SearchBar value={keyword} setValue={setKeyword} />
      <Divider height={2} />
      <div className="w-full px-4">
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
      <NavBar />
    </div>
  );
};

export default JoinChallenge;
