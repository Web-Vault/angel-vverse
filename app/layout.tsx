import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelvverse.com"),
  title: {
    default: "Angel Vverse - Digital Marketing Agency",
    template: "%s | Angel Vverse",
  },
  description: "Transform your brand with Angel Vverse - Your partner for social media marketing, content creation, product photography, and graphic design.",
  keywords: ["digital marketing", "social media marketing", "content creation", "product photography", "graphic design", "brand strategy"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelvverse.com",
    siteName: "Angel Vverse",
    title: "Angel Vverse - Digital Marketing Agency",
    description: "Transform your brand with Angel Vverse - Your partner for social media marketing, content creation, product photography, and graphic design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
