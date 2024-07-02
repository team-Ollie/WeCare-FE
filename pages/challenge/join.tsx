import { useGetChallengeSearch } from "@/apis/hooks/challenge";
import Divider from "@/components/Divider";
import HeadFunction from "@/components/HeadFunction";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/home/searchBar";
import SearchResult from "@/components/home/searchResult";
import { NextPage } from "next";
import { useState } from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckIcon from "@/public/svgs/Check.svg";

const JoinChallenge: NextPage = () => {
  const [keyword, setKeyword] = useState<string>("");

  const { data } = useGetChallengeSearch(keyword.trim());

  const notify = (title: string) => {
    toast.success(`${title}에 성공적으로 참여하셨습니다.`, {
      position: "bottom-center",
      icon: ({ theme, type }) => <CheckIcon width={24} height={24} />,
    });
  };

  return (
    <div className="w-full">
      <HeadFunction title={"챌린지 참여하기"} />
      <SearchBar value={keyword} setValue={setKeyword} />
      <Divider height={8} />
      <div className="w-full px-4">
        {data?.result.map((info) => (
          <SearchResult notify={notify} challengeInfo={info} />
        ))}
      </div>
      <NavBar />
      <ToastContainer
        hideProgressBar={true}
        autoClose={1000}
        closeButton={false}
        transition={Zoom}
        pauseOnFocusLoss={false}
        limit={1}
      />
    </div>
  );
};

export default JoinChallenge;
