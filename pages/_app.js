import "../styles/globals.css";
import { AppWrapper } from "../context/context";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import { CookieWrapper } from "../context/cookie-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider
          attribute="class"
          themes={["dark", "light"]}
          enableSystem={false}
        >
          <CookieWrapper>
            <AppWrapper>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppWrapper>
          </CookieWrapper>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
