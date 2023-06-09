import "./globals.css";
// eslint-disable-next-line camelcase
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

import { AuthProvider } from "./providers/AuthProvider";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt_BR" className="scroll-smooth antialiased">
      <AuthProvider>
        <body className={`${nunito.className}`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
