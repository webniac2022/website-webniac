import "../styles/globals.css";
import { AppWrapper } from "../context/context";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTHICS_MEASUREMENT_CODE}`}
      />
      <Script
        strategy="lazyOnload"
        src={`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.GOOGLE_ANALYTHICS_MEASUREMENT_CODE});`}
      />
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
    </>
  );
}

export default MyApp;
