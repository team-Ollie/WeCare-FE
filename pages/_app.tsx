import "@/styles/globals.css";
import "@/styles/dropdown.css";
import "@/styles/toast.css";
import "public/fonts/font.css";
// import "@/styles/Calendar.css";
import RootLayout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";
import { Provider } from "jotai";
import Head from "next/head";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <meta property="og:title" content="WeCare" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://team-ollie.github.io/WeCare-FE/main"
        />
        <meta
          property="og:description"
          content="노숙인 프로그램 참여 독려를 위한, 기관 프로그램 챌린지 서비스 WeCare"
        />
        <meta property="og:image" content="/pngs/ogTag.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="위케어" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
        <ReactQueryDevtools initialIsOpen={false} />
        <DevTools />
      </QueryClientProvider>
    </Provider>
  );
}
