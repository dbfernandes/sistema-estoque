import type { AppProps } from "next/app";
import ButtonAppBar from "@/components/AppBar/AppBar";

import AuthProvider from "@/provider/AuthProvider";

import "@/styles/globals.css";
import "@/styles/app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ButtonAppBar />
      <div
        style={{
          margin: 20,
        }}
      >
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}
