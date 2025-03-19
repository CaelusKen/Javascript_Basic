import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MyListProvider } from "@/hooks/use-my-list";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSFLIX - Learn JavaScript with Movies",
  description:
    "An interactive platform to learn JavaScript concepts through movie examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MyListProvider>{children}</MyListProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
