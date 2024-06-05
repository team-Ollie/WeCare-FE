import "../styles/globals.css";
import RootLayout from "@/components/RootLayout";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </QueryClientProvider>
  );
}
