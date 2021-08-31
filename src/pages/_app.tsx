/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import theme from "@root/theme";
import Nav from "@components/nav/Nav";
import "@styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
