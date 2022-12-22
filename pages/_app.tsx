import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { AppContextProvider } from "../context/appContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
