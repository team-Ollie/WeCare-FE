import { NextPage } from "next";

interface TagProps {
  name: string;
}

const Tag: NextPage<TagProps> = ({ name }: TagProps) => {
  return <div className="rounded-xl text-main-color h5">#{name}</div>;
};

export default Tag;
