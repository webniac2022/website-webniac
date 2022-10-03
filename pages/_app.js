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
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script id="google-analythics-script" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
      });
      `}</Script>
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
