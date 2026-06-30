import type { Metadata } from "next";
import "./globals.css";
import { Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Jobes Boxing Gym",
  description: "Jobes Boxing Gym",
};



const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",

});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
