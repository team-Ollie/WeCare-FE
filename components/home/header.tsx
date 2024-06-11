import { NextPage } from "next";
import Image from "next/image";

export const HomeHeader: NextPage = () => {
  return (
    <div className="w-full h-12 py-3">
      <Image src={"/pngs/LogoLetter.png"} height={24} width={90} />
    </div>
  );
};
