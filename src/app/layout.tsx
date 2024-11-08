import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/layout";
import { Cinzel, Raleway, Open_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const openSans = Open_Sans({
  weight: "400",
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  weight: ["400", "600"],
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  weight: "900",
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BETIS 2025",
  description: "DROG is my life and savior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} ${cinzel.variable} ${openSans.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#c5599e" shadow={false} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
