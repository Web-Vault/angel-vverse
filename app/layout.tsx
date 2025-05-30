import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angel Vverse | Where creativity meets connectivity",
  description:
    "Professional digital marketing services including content creation, social media marketing, product photography, and graphics design.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/Angel_Vverse_-_blue-removebg-preview.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/Angel_Vverse_-_blue-removebg-preview.png"
        />
        <link
          rel="shortcut icon"
          href="/Angel_Vverse_-_blue-removebg-preview.png"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
