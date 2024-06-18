import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <HeadFunction title="로그인" />
    </div>
  );
};

export default Login;
