import "@/styles/globals.css";
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  const httpLink = createHttpLink({
    uri: 'https://cg.optimizely.com/content/v2?auth=NsfqFlN2UN1srJEEJyBGobakhagSIbmpSZBhyseRJHuaqoJ2',
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>;
}
