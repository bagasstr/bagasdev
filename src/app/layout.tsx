import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

// Optimize font loading with better configuration
const myFont = localFont({
  src: "./fonts/SF-Pro.ttf",
  display: 'swap', // Better font loading performance
  preload: true,
  fallback: ['system-ui', 'arial'], // Fallback fonts for better UX
  adjustFontFallback: false, // Prevent layout shift
});

export const metadata: Metadata = {
  title: "Bagas Satrio - Portfolio",
  description: "Portfolio website showcasing projects and skills",
  keywords: ["portfolio", "developer", "projects", "web development"],
  authors: [{ name: "Bagas Satrio" }],
  creator: "Bagas Satrio",
  metadataBase: new URL('https://bagasdev.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Bagas Satrio - Portfolio',
    description: 'Portfolio website showcasing projects and skills',
    siteName: 'Bagas Satrio Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bagas Satrio - Portfolio',
    description: 'Portfolio website showcasing projects and skills',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/SF-Pro.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//cdn.sanity.io" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      </head>
      <body className={`${myFont.className} content sm:px-4 lg:px-8`}>
        <ThemeProvider 
          attribute='class' 
          enableSystem={true}
          defaultTheme="system"
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
