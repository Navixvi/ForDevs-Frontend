import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "../redux/ReduxProvider";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <ReduxProvider>
          <main>{children}</main>
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}
