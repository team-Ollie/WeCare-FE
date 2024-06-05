import "../styles/globals.css";
import Layout from "../components/Layout";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => toast.error(`Something went wrong: ${error.message}`),
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
