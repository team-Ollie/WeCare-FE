import Head from "next/head";

//Head Title
export default function HeadFunction({ title }) {
  return (
    <Head>
      <title>{title} | wecare</title>
    </Head>
  );
}
