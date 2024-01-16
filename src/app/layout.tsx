import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "@/theme/Theme";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Website",
  description: "Developed by Abdelrahman Abdelmoaty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
