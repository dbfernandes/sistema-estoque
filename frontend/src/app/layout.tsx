import type { Metadata } from "next";
import ButtonAppBar from "@/components/AppBar/AppBar";

import "@/styles/globals.css";
import "@/styles/app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ButtonAppBar />
        {children}
      </body>
    </html>
  );
}
