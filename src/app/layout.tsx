import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SpaceCanvas from "./components/SpaceBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harold Nwosu",
  description: "Harold's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>
        <SpaceCanvas />
        {children}
      </body>
    </html>
  );
}
