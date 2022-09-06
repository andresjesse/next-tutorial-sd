import type { AppProps } from "next/app";
import ApplicationLayout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  );
}

export default MyApp;
