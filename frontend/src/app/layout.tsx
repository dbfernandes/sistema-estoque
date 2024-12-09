import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar/Navbar";
import BootstrapClient from "@/components/BootstrapClient";
import AuthProvider from "@/provider/AuthProvider";
import { ReactQueryClientProvider } from "@/components/ReactQueryClient/ReactQueryClient";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
          <ReactQueryClientProvider>
            <Navbar />
            {children}
            <BootstrapClient />
            <ToastContainer />
          </ReactQueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
