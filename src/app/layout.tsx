import type { Metadata } from "next";
import {League_Spartan} from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Room homepage",
  description: "Room homepage challenge by frontendmentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
