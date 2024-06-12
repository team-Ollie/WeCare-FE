import Head from "next/head";

//Head Title
export default function HeadFunction({ title }) {
  return (
    <>
      <Head>
        <title>{title} | wecare</title>
      </Head>
      <div className="h-[4rem] w-full flex items-center justify-center mb-[1rem]">
        <span className="text-xl">{title}</span>
      </div>
    </>
  );
}
