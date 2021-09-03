import { AppProps } from "next/app";

import Header from "@root/src/components/header/header";
import "@styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
