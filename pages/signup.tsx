import HeadFunction from "@/components/HeadFunction";
import { NextPage } from "next";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <HeadFunction title="회원가입" />
    </div>
  );
};

export default SignUp;
