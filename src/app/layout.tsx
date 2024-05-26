import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const myFont = localFont({
  src: "./fonts/SF-Pro.ttf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${myFont.className} content sm:px-4 lg:px-8`}>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
