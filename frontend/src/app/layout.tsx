import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar/NavBar";
import BootstrapClient from "@/components/BootstrapClient";
import AuthProvider from "@/provider/AuthProvider";

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
        <AuthProvider>
          <NavBar />
          {children}
          <BootstrapClient />
        </AuthProvider>
      </body>
    </html>
  );
}
