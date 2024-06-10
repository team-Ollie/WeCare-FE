import Head from "next/head";

//Head Title
export default function HeadFunction({ title }) {
  return (
    <>
      <Head>
        <title>{title} | wecare</title>
      </Head>
      <div className="h-[2.875rem] w-full flex items-center justify-center">
        <span className="text-xl">{title}</span>
      </div>
    </>
  );
}
