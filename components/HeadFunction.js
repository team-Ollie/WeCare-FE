import Head from "next/head";
//Head Title 바꾸는 컴포넌트
export default function HeadFunction({ title }) {
  return (
    <Head>
      <title>{title} | wecare</title>
    </Head>
  );
}
