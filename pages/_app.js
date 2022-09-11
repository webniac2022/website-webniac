import "../styles/globals.css";
import { AppWrapper } from "../context/context";
import Layout from "../components/layout/layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
