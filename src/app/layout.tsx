import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/layouts/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries Data - REST Countries API with color theme switcher",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
