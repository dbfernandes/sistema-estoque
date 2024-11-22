import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar/Navbar";

export const metadata: Metadata = {
  title: "Sistema-estoque",
  description: "Sistema de estoque Lab Maker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
