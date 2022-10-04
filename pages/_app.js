import "../styles/globals.css";
import { AppWrapper } from "../context/context";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <ApolloProvider client={client}>
          <ThemeProvider
            attribute="class"
            themes={["dark", "light"]}
            enableSystem={false}
          >
            <AppWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppWrapper>
          </ThemeProvider>
        </ApolloProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
