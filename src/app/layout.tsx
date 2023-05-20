"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
// eslint-disable-next-line camelcase
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} max-w-screen-2xl mt-0 mx-auto`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
