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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
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
